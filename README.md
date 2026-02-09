# App 前进 qiánjìn

## Run

```bash
make clean
make install
make dev
```

## Functional requirements

1. [ ] search 👀
   - draw: Pleco like
   - input
2. [ ] database 🔠
   - hanzi
   - pinyin
   - word class
   - chữ Hán
   - meaning (vietnamese & english)
3. [ ] search 🔍
   - hanzi recognition
   - text input
   - speech input
4. [ ] quiz 🤔
   - database fields above
   - randomize, by radical, by class
   - AI features:
     - anatomy: radical, components, compounds
     - words: containing, synonym & antonym, same radical
     - sentences: 3 examples
5. [ ] tools 🛠️
   - big font size display for writing
   - daily notifications
   - search history
   - learn by topic/class

## Non-functional requirements

- NextJS PWA for frontend & backend
- Vercel for CICD and domain management
- Supabase for database, query APIs, push notifications, authentication

### References

- https://dev.to/rayenmabrouk/best-tech-stack-for-startups-in-2025-5h2l
- https://chatgpt.com/c/676ba9b9-154c-800d-b114-bc36bf690ba6
  - https://chatgpt.com/c/676b9f6a-b424-800d-921c-ce9d1cc570e9 (first version)
  - - https://chatgpt.com/c/6781f666-485c-800d-98fa-f523d6f6a95d (openAI chat completion integration)
- https://github.com/JWu-Git/react-hanzi-lookup
  - https://github.com/gugray/HanziLookupJS
    - https://github.com/skishore/makemeahanzi
    - https://github.com/skishore/inkstone (mobile app)
