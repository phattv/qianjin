import { GradeResult, Lesson } from "./_types";

const MOCK_LESSONS: Lesson[] = [
  {
    topic: "The Psychology of Decision-Making",
    vocabulary: [
      {
        characters: "犹豫",
        pinyin: "yóu yù",
        meaning_en: "to hesitate; hesitation",
        meaning_vi: "do dự, lưỡng lự",
        word_type: "verb/adjective",
      },
      {
        characters: "权衡",
        pinyin: "quán héng",
        meaning_en: "to weigh up; to balance (pros and cons)",
        meaning_vi: "cân nhắc, đắn đo",
        word_type: "verb",
      },
      {
        characters: "后悔",
        pinyin: "hòu huǐ",
        meaning_en: "to regret; regret",
        meaning_vi: "hối hận, tiếc nuối",
        word_type: "verb",
      },
      {
        characters: "冲动",
        pinyin: "chōng dòng",
        meaning_en: "impulsive; impulse",
        meaning_vi: "bốc đồng, xung động",
        word_type: "adjective/noun",
      },
      {
        characters: "理性",
        pinyin: "lǐ xìng",
        meaning_en: "rational; rationality",
        meaning_vi: "lý trí, lý tính",
        word_type: "adjective/noun",
      },
      {
        characters: "潜意识",
        pinyin: "qián yì shí",
        meaning_en: "subconscious; the subconscious mind",
        meaning_vi: "tiềm thức",
        word_type: "noun",
      },
      {
        characters: "承担",
        pinyin: "chéng dān",
        meaning_en: "to bear; to take on (responsibility)",
        meaning_vi: "gánh chịu, đảm nhận",
        word_type: "verb",
      },
      {
        characters: "偏见",
        pinyin: "piān jiàn",
        meaning_en: "bias; prejudice",
        meaning_vi: "thành kiến, định kiến",
        word_type: "noun",
      },
    ],
    passage:
      "在日常生活中，我们每天都要做出无数个决定，从早餐吃什么到人生中的重大选择。心理学家发现，人类的决策过程远比我们想象的复杂。\n\n许多人认为自己是理性的决策者，但事实上，我们的潜意识在很大程度上影响着我们的判断。比如，当我们面对一个重要选择时，往往会先有一种直觉，然后才开始权衡利弊。这种直觉其实来自于我们长期积累的经验。\n\n然而，潜意识也可能带来偏见。我们倾向于选择熟悉的事物，或者相信第一印象，这些都是常见的心理偏见。正因如此，很多人在做出冲动的决定之后，往往会感到后悔。\n\n心理学家建议，面对重要决策时，不要犹豫太久，但也不要过于冲动。最好的方法是给自己一段冷静的时间，理性地分析各种可能性，同时承担起决策所带来的后果。毕竟，无论选择什么，勇于承担责任才是成熟的表现。",
    exercises: [
      {
        id: "ex_1",
        type: "fill_in_blank",
        question: "面对重要的人生选择，他总是___不决，迟迟无法做出决定。",
        expected_answer: "犹豫",
      },
      {
        id: "ex_2",
        type: "fill_in_blank",
        question: "在做出最终决定之前，我们应该仔细___各方面的利弊得失。",
        expected_answer: "权衡",
      },
      {
        id: "ex_3",
        type: "comprehension",
        question:
          "According to the passage, why do people often make biased decisions even when they think they are being rational?",
        expected_answer:
          "Because the subconscious mind heavily influences our judgment. We tend to favor familiar things and trust first impressions, which are common psychological biases. Our intuition, which actually comes from accumulated experience, often drives our initial reaction before any rational analysis begins.",
      },
      {
        id: "ex_4",
        type: "comprehension",
        question:
          "What advice do psychologists give about making important decisions, according to the passage?",
        expected_answer:
          "Psychologists suggest that when facing important decisions, one should neither hesitate for too long nor act too impulsively. The best approach is to give yourself a calm period to rationally analyze all possibilities, and to be prepared to bear the consequences of your decision. Taking responsibility for one's choices is considered a sign of maturity.",
      },
      {
        id: "ex_5",
        type: "use_in_context",
        question: "用「承担」造一个句子。(Use 承担 in a sentence.)",
        expected_answer: "既然是你自己做的决定，你就应该承担相应的后果，不能把责任推给别人。",
      },
    ],
  },
  {
    topic: "Environmental Protection and Sustainable Living",
    vocabulary: [
      {
        characters: "环境",
        pinyin: "huán jìng",
        meaning_en: "environment",
        meaning_vi: "môi trường",
        word_type: "noun",
      },
      {
        characters: "污染",
        pinyin: "wū rǎn",
        meaning_en: "pollution",
        meaning_vi: "ô nhiễm",
        word_type: "noun",
      },
      {
        characters: "资源",
        pinyin: "zī yuán",
        meaning_en: "resources",
        meaning_vi: "tài nguyên",
        word_type: "noun",
      },
      {
        characters: "可持续",
        pinyin: "kě chí xù",
        meaning_en: "sustainable",
        meaning_vi: "bền vững",
        word_type: "adjective",
      },
      {
        characters: "垃圾",
        pinyin: "lā jī",
        meaning_en: "garbage/waste",
        meaning_vi: "rác thải",
        word_type: "noun",
      },
      {
        characters: "回收",
        pinyin: "huí shōu",
        meaning_en: "to recycle",
        meaning_vi: "tái chế",
        word_type: "verb",
      },
      {
        characters: "能源",
        pinyin: "néng yuán",
        meaning_en: "energy",
        meaning_vi: "năng lượng",
        word_type: "noun",
      },
    ],
    passage:
      "随着工业的发展，环境污染问题变得越来越严重。许多城市的空气质量下降，水资源也受到了严重的污染。为了保护我们的环境，各国都在推行可持续发展的政策。减少垃圾的产生是一个重要的步骤。我们可以通过分类和回收垃圾来减少对环境的破坏。此外，使用清洁的能源，比如太阳能和风能，也是保护环境的有效方法。很多公司和个人已经开始采取行动，改变他们的生活方式。他们减少使用塑料制品，购买环保产品，并积极参与回收计划。虽然这些努力还不够，但越来越多的人意识到保护环境的重要性。我们每个人都可以为可持续的未来做出贡献。",
    exercises: [
      {
        id: "ex_1",
        type: "fill_in_blank",
        question: "许多城市的空气质量下降，水___也受到了严重的破坏。",
        expected_answer: "资源",
      },
      {
        id: "ex_2",
        type: "fill_in_blank",
        question: "我们可以通过分类和___垃圾来减少对环境的破坏。",
        expected_answer: "回收",
      },
      {
        id: "ex_3",
        type: "comprehension",
        question:
          "According to the passage, what are some ways individuals can help protect the environment?",
        expected_answer:
          "Individuals can help by reducing garbage production through classification and recycling, using clean energy sources like solar and wind power, reducing plastic product usage, buying eco-friendly products, and actively participating in recycling programs. They should adopt a sustainable lifestyle and change their consumption habits.",
      },
      {
        id: "ex_4",
        type: "comprehension",
        question:
          "What does the passage suggest about the current state of environmental protection efforts?",
        expected_answer:
          "The passage suggests that while many companies and individuals have started taking action to protect the environment, current efforts are still insufficient. However, it is positive that more and more people are becoming aware of the importance of environmental protection, and each person can contribute to a sustainable future.",
      },
      {
        id: "ex_5",
        type: "use_in_context",
        question: "用「可持续」造一个句子。",
        expected_answer:
          "我们需要找到一个可持续的发展方式，既能满足现在的需求，也不会损害未来的环境。",
      },
    ],
  },
  {
    topic: "Environmental Protection and Sustainable Living (II)",
    vocabulary: [
      {
        characters: "环境",
        pinyin: "huán jìng",
        meaning_en: "environment",
        meaning_vi: "môi trường",
        word_type: "noun",
      },
      {
        characters: "污染",
        pinyin: "wū rǎn",
        meaning_en: "pollution",
        meaning_vi: "ô nhiễm",
        word_type: "noun",
      },
      {
        characters: "资源",
        pinyin: "zī yuán",
        meaning_en: "resources",
        meaning_vi: "tài nguyên",
        word_type: "noun",
      },
      {
        characters: "可持续",
        pinyin: "kě chí xù",
        meaning_en: "sustainable",
        meaning_vi: "bền vững",
        word_type: "adjective",
      },
      {
        characters: "消耗",
        pinyin: "xiāo hào",
        meaning_en: "to consume, to exhaust",
        meaning_vi: "tiêu hao",
        word_type: "verb",
      },
      {
        characters: "改善",
        pinyin: "gǎi shàn",
        meaning_en: "to improve",
        meaning_vi: "cải thiện",
        word_type: "verb",
      },
      {
        characters: "措施",
        pinyin: "cuò shī",
        meaning_en: "measures, actions",
        meaning_vi: "biện pháp",
        word_type: "noun",
      },
    ],
    passage:
      "随着经济的发展，环境污染问题变得越来越严重。工业生产消耗了大量的自然资源，同时也排放出大量的污染物，严重影响了人们的生活质量。许多城市的空气质量下降，水资源受到污染，这些都威胁着我们的健康。为了改善环境状况，各国政府采取了多种措施。首先，他们鼓励企业使用清洁能源，减少污染的排放。其次，公众需要树立可持续发展的意识，改变日常生活习惯。例如，我们应该减少塑料的使用，选择可回收的产品。此外，植树造林也是一个重要的措施，可以净化空气，保护生态系统。只有通过政府、企业和个人的共同努力，我们才能建立一个更加绿色和健康的环境，为后代留下一个美好的地球。",
    exercises: [
      {
        id: "ex_1",
        type: "fill_in_blank",
        question: "工业生产___了大量的自然资源。",
        expected_answer: "消耗",
      },
      {
        id: "ex_2",
        type: "fill_in_blank",
        question: "为了___环境状况，各国政府采取了多种___。",
        expected_answer: "改善，措施",
      },
      {
        id: "ex_3",
        type: "comprehension",
        question: "According to the passage, what are the main sources of environmental pollution?",
        expected_answer:
          "Industrial production is the main source, which consumes large amounts of natural resources and releases pollutants. This causes problems such as declining air quality in cities and water resource contamination.",
      },
      {
        id: "ex_4",
        type: "comprehension",
        question:
          "What specific actions does the passage suggest individuals can take to promote sustainable development?",
        expected_answer:
          "The passage suggests reducing plastic use, choosing recyclable products, and planting trees. Individuals should develop awareness of sustainable development and change their daily living habits.",
      },
      {
        id: "ex_5",
        type: "use_in_context",
        question: "用「可持续」造一个句子。",
        expected_answer:
          "我们需要找到可持续的发展方式来保护地球。(We need to find sustainable ways of development to protect the earth.)",
      },
    ],
  },
];

export function getRandomMockLesson(): Lesson {
  return MOCK_LESSONS[Math.floor(Math.random() * MOCK_LESSONS.length)];
}

export const MOCK_GRADE: GradeResult = {
  correct: true,
  score: 85,
  feedback:
    "Good answer! You covered the main points. Consider adding more specific details for a more complete response.",
};
