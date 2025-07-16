import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-[#2e2e2e] to-[#1e1e1e] text-white py-10 mt-20"
    >
      <div className="w-11/12 mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* Brand Info */}
        <div>
           <span className="text-red-700 text-5xl font-bold">Easy</span>
            <sup className='text-5xl'>GURU</sup>
          <p className="text-sm text-gray-300">
            Your one-stop platform for finding expert tutors and mastering new languages.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white transition duration-300 cursor-pointer">Home</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Find Tutors</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Pricing</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white transition duration-300 cursor-pointer">Blog</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Free PDFs</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Webinars</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-400 transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-pink-400 transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-sky-400 transition"><Twitter size={20} /></a>
            <a href="#" className="hover:text-red-500 transition"><Youtube size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} LanguageHub. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
