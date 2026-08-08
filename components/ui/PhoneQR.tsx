"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

type PhoneQRProps = {
  hovered?: boolean;
};

export function PhoneQR({ hovered = false }: PhoneQRProps) {
  return (
   <div className="relative inline-flex items-center justify-center w-12 h-12">
      <motion.div
        animate={{ scale: hovered ? 10 : 1 , x: hovered ? 280 : 0, y: hovered ? 80 : 0}}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <Phone className="size-8 text-accent-blue" />
            </motion.div>

      <motion.img
        src="/PhoneQR.png"
        alt=""
        draggable={false}
        animate={{ opacity: hovered ? 0.25 : 0, scale: hovered ? 10 : 0.8 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-full bg-accent-blue blur-md -z-10"
      />
    </div>
  
  );
}