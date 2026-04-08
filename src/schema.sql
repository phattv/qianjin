begin;

-- synchronous response
create table if not exists words (
  id bigserial primary key,   -- e.g. 1
  characters text not null,   -- e.g. "前进"
  pinyin text,                -- e.g. "qián jìn"

  -- meanings
  meaning_en text,            -- e.g. "to advance; to move forward"
  meaning_vi text,            -- e.g. "tiến lên; tiến về phía trước"
  syno_vn text,               -- e.g. "tiền tiến"

  -- metadata
  word_type text,             -- noun, verb, adj, measure, etc
  hsk_level int,              -- 1-6

  created_at timestamptz default now(),
  updated_at timestamptz default now(),

  unique (characters)
);
create index if not exists idx_words_pinyin on words (pinyin);
create index if not exists idx_words_en on words (meaning_en);
create index if not exists idx_words_vi on words (meaning_vi);
create index if not exists idx_words_hsk_level on words (hsk_level);


-- async response from AI
-- jsonb format:
-- {
--   "characters": "前进",
--   "pinyin": "qián jìn",
--   "meaning_en": "to advance; to move forward"
-- }
create table if not exists word_extras (
  id bigserial primary key,
  word_id bigint references words(id),

  components jsonb,        -- parts that make up this word
  synonyms jsonb,          -- similar meaning words
  antonyms jsonb,          -- opposite meaning words
  sample_sentences jsonb,
  
  words_similar jsonb,     -- words that look/sound similar
  words_containing jsonb,  -- words that contain this word
  compounds jsonb,         -- words that contain this word as part

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);


create table if not exists search_history (
  id bigserial primary key,
  word_id bigint references words(id),

  query text not null,
  source text, -- text | drawing | speech

  user_id uuid references auth.users(id),

  created_at timestamptz default now()
);


commit;