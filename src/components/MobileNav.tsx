import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-40" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute right-0 top-0 h-full w-72 bg-white dark:bg-gray-900 shadow-2xl p-6"
          >
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              ✕
            </button>
            <nav className="flex flex-col gap-6 mt-12" aria-label="Mobile navigation">
              {["About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={onClose}
                  className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
