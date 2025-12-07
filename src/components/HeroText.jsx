import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import DecryptedText from "./DecryptedText";
import GlassIcons from "./GlassIcons";
import { FiFileText } from "react-icons/fi";

const items = [
  {
    icon: <FiFileText />,
    color: "blue",
    label: "Resume",
    link: "https://drive.google.com/uc?export=download&id=1z-5YHh6lafzTy5fOpKQcHFmU8lhVaY3j",
  },
];



const HeroText = () => {
  const words = ["Intelligent", "Data-Driven", "Scalable", "Innovative"];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40  md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        {/* Tamil Quote (Decrypts First) */}
        <motion.h2
          className="text-2xl font-medium text-neutral-400 tracking-wide mb-4"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <DecryptedText
            text="கற்றது கையளவு, கல்லாதது உலகளவு!"
            speed={120}
            maxIterations={20}
            revealDirection="start"
            className="text-white font-extrabold font-tamil"
            encryptedClassName="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          />
        </motion.h2>

        {/* Your Name (Decrypts after quote) */}
        <motion.h1
          className="text-5xl font-bold text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          <DecryptedText
            text="Hi, I'm Koushik Murali"
            speed={30}
            maxIterations={20}
            animateOn="view"
            revealDirection="center"
            className="text-white"
            encryptedClassName="text-neutral-600"
          />
        </motion.h1>

        {/* Description and Animated Words */}
        <div className="flex flex-col items-start mt-6">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Developer passionate about AI and Data Analytics. Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Applications
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.5 }}
          >
            <div
              style={{ height: "530px", width: "100%", position: "relative" }}
            >
              <GlassIcons items={items} className="custom-class" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 📱 Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        {/* Tamil quote */}
        <motion.p
          className="text-2xl text-indigo-400"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <DecryptedText
            text="கற்றது கையளவு, கல்லாதது உலகளவு!"
            speed={120}
            maxIterations={20}
            revealDirection="start"
            className="text-white font-extrabold font-tamil"
            encryptedClassName="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          />
        </motion.p>

        <motion.p
          className="text-4xl font-bold text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          <DecryptedText
            text="Hi, I'm Koushik"
            speed={40}
            animateOn="view"
            revealDirection="start"
          />
        </motion.p>

        <motion.p
          className="text-5xl font-black text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          A Developer passionate about AI and Data Analytics. Building
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          <FlipWords words={words} className="font-bold text-white text-5xl" />
        </motion.div>

        <motion.p
          className="text-4xl font-black text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          Applications
        </motion.p>

        {/* Resume button mobile */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.5 }}
        >
          <div className="w-full flex justify-center mt-10">
            <div className="inline-block ml-29">
              <GlassIcons items={items} className="custom-class" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;
