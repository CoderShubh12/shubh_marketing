"use client";

import Head from "next/head";
import { motion } from "framer-motion";

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 },
  },
};

const headingVariants = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const paragraphVariants = {
  initial: { y: 10, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const footerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4, delay: 0.6 } },
};

export default function Home() {
  return (
    <motion.div
      className="bg-gradient-to-br from-blue-200 via-purple-300 to-indigo-400 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <Head>
        <title>Your Digital Marketing Agency - Coming Soon</title>
        <meta
          name="description"
          content="Our new digital marketing agency website is coming soon! Stay tuned for expert strategies and solutions to help your business grow."
        />
        {/* Add other meta tags */}
      </Head>

      <motion.div className="max-w-3xl w-full bg-white rounded-lg shadow-xl p-12 text-center">
        <motion.h1
          className="text-4xl font-extrabold text-indigo-600 mb-6 tracking-tight"
          variants={headingVariants}
        >
          We're Launching Soon!
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-700 leading-relaxed"
          variants={paragraphVariants}
        >
          Thank you for your interest in our digital marketing agency. We're
          working hard behind the scenes to bring you a brand new website
          showcasing our expert services and proven strategies.
        </motion.p>
        <motion.p
          className="mt-4 text-lg text-gray-700 leading-relaxed"
          variants={paragraphVariants}
        >
          We specialize in helping businesses like yours achieve significant
          growth through data-driven marketing, innovative campaigns, and a
          dedicated team of professionals.
        </motion.p>
        <motion.p
          className="mt-6 text-xl font-semibold text-gray-800"
          variants={paragraphVariants}
        >
          Stay Tuned for Updates!
        </motion.p>
        {/* You could add a simple countdown timer or email signup form here if desired */}
        <div className="mt-8">
          <p className="text-sm text-gray-500" variants={paragraphVariants}>
            Follow us for sneak peeks and launch announcements:
          </p>
          {/* Add social media icons/links here */}
        </div>
        <motion.p
          className="mt-12 text-xs text-gray-400"
          variants={footerVariants}
        >
          &copy; {new Date().getFullYear()} Your Digital Marketing Agency. All
          rights reserved.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
