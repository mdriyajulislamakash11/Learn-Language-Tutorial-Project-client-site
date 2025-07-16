import { motion } from "framer-motion";
import { BookOpen, Brain, Youtube, Mic, Calendar, Globe } from "lucide-react";

// Icon Mapping
const iconMap = {
  brain: <Brain size={30} />,
  youtube: <Youtube size={30} />,
  "book-open": <BookOpen size={30} />,
  mic: <Mic size={30} />,
  calendar: <Calendar size={30} />,
  globe: <Globe size={30} />,
};

// Tips Data
const tips = [
  {
    id: 1,
    icon: "brain",
    title: "5 Quick Tips to Remember Vocabulary",
    desc: "Use flashcards, practice daily, and speak aloud to retain new words effectively.",
  },
  {
    id: 2,
    icon: "youtube",
    title: "Best YouTube Channels for English Learners",
    desc: "Explore popular YouTube channels that help improve speaking, listening, and grammar.",
  },
  {
    id: 3,
    icon: "book-open",
    title: "Why You Should Learn a Second Language",
    desc: "Boost your career, brain power, and global connections by learning a new language.",
  },
  {
    id: 4,
    icon: "mic",
    title: "Practice Speaking with AI Chat",
    desc: "Use chatbots or language apps to talk and improve fluency without fear.",
  },
  {
    id: 5,
    icon: "calendar",
    title: "Create a Daily Learning Routine",
    desc: "Learning 15 minutes a day is better than 3 hours once a week. Stay consistent!",
  },
  {
    id: 6,
    icon: "globe",
    title: "Join Language Exchange Communities",
    desc: "Talk with native speakers worldwide through online platforms like Tandem or HelloTalk.",
  },
];

// Component
const LearningTips = () => {
  return (
    <section className="w-11/12 mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        💡 Learning Tips & Blog
      </h2>

      {/* description  */}
      <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
        Discover bite-sized tips and practical resources to supercharge your
        language learning journey! Whether you're just starting out or polishing
        your fluency, these tips and blogs will help you stay motivated,
        organized, and consistent every step of the way.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {tips.map((tip, index) => (
          <motion.div
            key={tip.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white shadow-xl p-6 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div className="text-blue-600 mb-3">{iconMap[tip.icon]}</div>
            <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
            <p className="text-sm text-gray-600">{tip.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LearningTips;
