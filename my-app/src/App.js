import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function SurprisePage() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-500 to-red-500 text-white">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.5 }}
        className="text-5xl font-bold text-center"
      >
        A Special Message Just for You Sanju!!
      </motion.h1>
      
      {!showMessage ? (
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-10"
        >
          <Button 
            onClick={() => setShowMessage(true)} 
            className="bg-white text-red-500 font-bold py-3 px-6 text-xl rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            Click Here Baby
          </Button>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-center mt-10"
        >
          <p className="text-2xl font-semibold">You are the most beautiful part of my life my queen. ❤️</p>
          <p className="text-xl mt-3">Every moment with you feels like a dream come true.</p>
          <p className="text-xl mt-3">And now, I want to make this dream last forever...</p>
          
          <motion.h2 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, delay: 2 }}
            className="text-4xl font-extrabold mt-6"
          >
            Will you marry me? 💍
          </motion.h2>
        </motion.div>
      )}
    </div>
  );
}
