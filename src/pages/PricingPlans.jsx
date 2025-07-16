import { motion } from "framer-motion";

const plans = [
  {
    title: "🎓 Basic",
    price: "৳0",
    features: [
      "Access free tutorials",
      "Limited support",
      "No certificate",
    ],
    button: "Start Free",
    bg: "bg-white text-black",
  },
  {
    title: "⭐ Pro",
    price: "৳499",
    features: [
      "1:1 Tutor Access",
      "Live Classes",
      "All Free Features",
    ],
    button: "Go Pro",
    bg: "bg-blue-600 text-white",
  },
  {
    title: "👑 Premium",
    price: "৳999",
    features: [
      "All Features + Certificate",
      "VIP Support",
      "Unlimited Access",
    ],
    button: "Join Premium",
    bg: "bg-gradient-to-r from-yellow-400 to-orange-500 text-white",
  },
];

const PricingPlans = () => {
  return (
    <section className="w-11/12 mx-auto py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">Choose Your Plan</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`rounded-xl p-8 shadow-xl ${plan.bg} hover:scale-105 transition-transform duration-300`}
          >
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-3xl font-bold mb-4">{plan.price}/month</p>
            <ul className="text-sm space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li>
              ))}
            </ul>
            <button className="px-6 py-2 bg-black bg-opacity-10 rounded hover:bg-opacity-20 transition">
              {plan.button}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
