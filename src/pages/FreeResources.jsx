import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

const resources = [
  {
    title: "100 Common English Verbs (PDF)",
    url: "/downloads/english-verbs.pdf",
    description: "Essential verbs list to boost your English speaking and writing skills.",
    pages: 25,
    level: "Beginner",
    size: "1.2MB",
  },
  {
    title: "Spanish Numbers Chart",
    url: "/downloads/spanish-numbers.pdf",
    description: "Learn to count and master Spanish numbers easily with this handy chart.",
    pages: 5,
    level: "Beginner",
    size: "0.4MB",
  },
  {
    title: "Beginner Grammar Cheatsheet",
    url: "/downloads/grammar-cheatsheet.pdf",
    description: "Quick reference guide for basic English grammar rules and tips.",
    pages: 12,
    level: "Beginner",
    size: "0.9MB",
  },
  {
    title: "Top 50 Phrasal Verbs (PDF)",
    url: "/downloads/phrasal-verbs.pdf",
    description: "Common phrasal verbs you need to know for fluent English conversations.",
    pages: 15,
    level: "Intermediate",
    size: "1.1MB",
  },
  {
    title: "English Idioms & Expressions",
    url: "/downloads/english-idioms.pdf",
    description: "Familiarize yourself with popular English idioms and their meanings.",
    pages: 20,
    level: "Intermediate",
    size: "1.3MB",
  },
  {
    title: "Common English Pronunciation Guide",
    url: "/downloads/pronunciation-guide.pdf",
    description: "Improve your English pronunciation with this easy-to-follow guide.",
    pages: 18,
    level: "All Levels",
    size: "1.0MB",
  },
];

const FreeResources = () => {
  return (
    <section className="w-11/12 mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        🎁 Free Language Learning Resources
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {resources.map((res, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              <div className="flex items-center gap-3 text-green-600 mb-4">
                <FileText size={24} />
                <h3 className="text-lg font-semibold">{res.title}</h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm">{res.description}</p>
              <p className="text-gray-500 text-xs">
                Pages: {res.pages} | Level: {res.level} | Size: {res.size}
              </p>
            </div>
            <a
              href={res.url}
              download
              className="mt-6 inline-flex items-center justify-center gap-2 bg-green-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              <Download size={18} />
              Download
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FreeResources;
