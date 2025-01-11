const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
const model = "gpt-4o";
const results = 1;
const systemPrompt =
  "skip explanation, only json response; top level: character, radicals, components, compounds, words_containing_current_word, synonyms, antonyms, words_having_same_radical, example_sentences; format for each word: character, pinyin, sino_vietnamese, meaning_vietnamese, meaning_english, word class; give up to 5 response per top level objects, up to 10 for words_having_same_radical";

export { apiKey, model, results, systemPrompt };
