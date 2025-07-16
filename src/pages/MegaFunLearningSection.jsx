import React, { useState } from "react";

// --------- QUIZ QUESTIONS ----------
const languageFunQuizQuestions = [
  {
    id: 1,
    question: "What is the plural of 'mouse'?",
    options: ["mouses", "mice", "mouse", "meese"],
    answer: "mice",
  },
  {
    id: 2,
    question: "Which word is a synonym of 'happy'?",
    options: ["sad", "angry", "joyful", "tired"],
    answer: "joyful",
  },
  {
    id: 3,
    question: "What does 'bilingual' mean?",
    options: [
      "Can speak two languages",
      "Speaks loudly",
      "Likes books",
      "Is very tall",
    ],
    answer: "Can speak two languages",
  },
];

const extraFunQuizQuestions = [
  {
    id: 1,
    question: "Which English word contains all the vowels in order?",
    options: ["Education", "Facetious", "Abstemious", "Sequoia"],
    answer: "Abstemious",
  },
  {
    id: 2,
    question: "What’s the longest English word without a vowel?",
    options: ["Rhythm", "Crypt", "Lynx", "Try"],
    answer: "Rhythm",
  },
  {
    id: 3,
    question: "What is the antonym of 'generous'?",
    options: ["Kind", "Selfish", "Brave", "Happy"],
    answer: "Selfish",
  },
];

// --------- TIPS ----------
const funTips = [
  {
    icon: "🧠",
    title: "Flashcards are your best friend",
    desc: "Review tricky words daily using flashcards.",
  },
  {
    icon: "🎧",
    title: "Listen to podcasts",
    desc: "Tune in to improve your listening skills.",
  },
  {
    icon: "📝",
    title: "Write daily journals",
    desc: "Describe your day using the new language.",
  },
  {
    icon: "🎬",
    title: "Watch movies with subtitles",
    desc: "Learn context and phrases while enjoying films.",
  },
];

// --------- WORDS ----------
const funWords = [
  {
    word: "Serendipity",
    meaning: "Happy or beneficial event by chance.",
    example:
      "Finding your favorite book in a random library is pure serendipity!",
  },
  {
    word: "Bamboozle",
    meaning: "To trick or confuse someone.",
    example: "Don’t let tricky questions bamboozle you!",
  },
  {
    word: "Gobsmacked",
    meaning: "Astonished or amazed.",
    example: "I was gobsmacked by the beautiful sunset.",
  },
];

// --------- QUIZ CARD COMPONENT ----------
function QuizCard({ questions, title }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) setScore(score + 1);
    if (current + 1 < questions.length) setCurrent(current + 1);
    else setShowResult(true);
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="bg-indigo-50 rounded-xl shadow-md p-6 w-full max-w-md mx-auto mb-6">
      <h3 className="text-xl font-bold mb-4 text-indigo-700 text-center">
        {title}
      </h3>

      {!showResult ? (
        <>
          <p className="mb-2 font-semibold">
            Question {current + 1} of {questions.length}
          </p>
          <p className="mb-4 text-gray-800">{questions[current].question}</p>
          <div className="space-y-3">
            {questions[current].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(opt)}
                className="w-full bg-indigo-200 hover:bg-indigo-300 rounded py-2 font-semibold transition"
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <p className="text-2xl font-bold mb-3 text-indigo-800">
            Score: {score} / {questions.length}
          </p>
          <button
            onClick={restart}
            className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}

// --------- FUN TIPS CARD ----------
function FunTipsCard() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-12 px-4">
      {funTips.map((tip, idx) => (
        <div
          key={idx}
          className="bg-indigo-100 p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
        >
          <div className="text-4xl mb-3">{tip.icon}</div>
          <h4 className="font-bold text-lg mb-2">{tip.title}</h4>
          <p className="text-gray-700">{tip.desc}</p>
        </div>
      ))}
    </div>
  );
}

// --------- FUN WORDS CARD ----------
function FunWordsCard() {
  return (
    <div className="space-y-6 px-4">
      {funWords.map((fact, idx) => (
        <div
          key={idx}
          className="border-l-8 border-pink-500 bg-pink-50 p-5 rounded-md shadow-md"
        >
          <h4 className="text-2xl font-extrabold mb-2 text-pink-700">
            {fact.word}
          </h4>
          <p className="italic mb-2 text-pink-900">Meaning: {fact.meaning}</p>
          <p className="text-pink-800">Example: {fact.example}</p>
        </div>
      ))}
    </div>
  );
}

// --------- MAIN COMPONENT ----------
const MegaFunLearningSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          🎉 Fun & Interactive Language Learning
        </h2>

        {/* description daw */}
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          Learning a language doesn’t have to be boring! This section brings you
          exciting quizzes, smart tips, and fun vocabulary facts to make your
          learning journey more enjoyable and effective. Test yourself, discover
          new words, and grab some cool learning hacks—all in one place!
        </p>

        {/* Quiz Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <QuizCard
            questions={languageFunQuizQuestions}
            title="🧭 Language Fun Quiz"
          />
          <QuizCard
            questions={extraFunQuizQuestions}
            title="🎉 Extra Fun Quiz"
          />
        </div>

        {/* Tips Section */}
        <FunTipsCard />

        {/* Words Section */}
        <FunWordsCard />
      </div>
    </section>
  );
};

export default MegaFunLearningSection;
