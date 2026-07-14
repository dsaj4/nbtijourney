/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, AlertCircle, Compass, ShieldAlert } from "lucide-react";
import { QUIZ_QUESTIONS, QuizOption } from "../types";

interface ActTwoQuizForkProps {
  currentStep: number;
  selectedOption: string | null;
  onSelectOption: (optionId: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ActTwoQuizFork({
  currentStep,
  selectedOption,
  onSelectOption,
  onNext,
  onPrev,
}: ActTwoQuizForkProps) {
  const currentQuestion = QUIZ_QUESTIONS[currentStep - 1];
  const [showWarning, setShowWarning] = useState(false);
  const [isWalking, setIsWalking] = useState(false);

  // Trigger step changed animation
  useEffect(() => {
    setIsWalking(true);
    const timer = setTimeout(() => setIsWalking(false), 900);
    return () => clearTimeout(timer);
  }, [currentStep]);

  const handleNextClick = () => {
    if (!selectedOption) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
      return;
    }
    onNext();
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between bg-zinc-950 font-sans select-none text-zinc-100">
      {/* 1. KINETIC LANDSCAPE DOCK (Changes slightly or rotates representing walking forward) */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center origin-center filter brightness-45 contrast-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1498100152307-ce63fd6c5424?auto=format&fit=crop&w=1920&q=80')`,
        }}
        animate={{
          scale: isWalking ? 1.08 : 1.02,
          x: isWalking ? [0, -15, 10, 0] : 0,
          y: isWalking ? [0, 8, -5, 0] : 0,
          filter: isWalking ? "blur(3px) brightness(0.25)" : "blur(0px) brightness(0.45)",
        }}
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
      />

      {/* Dynamic Rain Overlay for mood density */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-20 mix-blend-color-dodge">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="30%" y2="100%" stroke="rgba(244, 244, 255, 0.4)" strokeWidth="1" />
          <line x1="40%" y1="0" x2="70%" y2="100%" stroke="rgba(244, 244, 255, 0.4)" strokeWidth="1" />
          <line x1="80%" y1="0" x2="110%" y2="100%" stroke="rgba(244, 244, 255, 0.4)" strokeWidth="1" />
        </svg>
      </div>

      {/* Dark vignette borders */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-radial-gradient from-transparent via-zinc-950/40 to-zinc-950/90" />

      {/* ROAD PERSPECTIVE GRAPHICS representing road splitting toward right */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none z-10 overflow-hidden opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
          {/* Main Entering Road perspective */}
          <path d="M 100,600 C 350,450 500,320 530,280" fill="none" stroke="#27272A" strokeWidth="80" strokeLinecap="round" />
          {/* Pathway split left road */}
          <path d="M 530,280 C 580,240 700,200 950,180" fill="none" stroke="#27272A" strokeWidth="50" strokeLinecap="round" />
          {/* Pathway split right road */}
          <path d="M 530,280 C 600,340 750,420 1100,520" fill="none" stroke="#27272A" strokeWidth="55" strokeLinecap="round" />

          {/* Yellow Road Separators showing damp gold lines */}
          <path d="M 530,280 C 600,340 750,420 1100,520" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeDasharray="15, 15" />
          <path d="M 530,280 C 580,240 700,200 950,180" fill="none" stroke="#9A3412" strokeWidth="2" strokeDasharray="10, 5" />
        </svg>
      </div>

      {/* HEADER SECTION (Progress counter & Step Leaf Indicators) */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4 bg-gradient-to-b from-zinc-950 to-transparent">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-md">
            <Compass className="w-4 h-4 text-amber-500 animate-spin-slow" />
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
              ACT 2 : THE FORK
            </span>
          </div>
          <span className="text-zinc-500 text-xs">|</span>
          <span className="text-sm font-semibold tracking-wider text-zinc-300">
            第 {currentStep} / 8 段路
          </span>
        </div>

        {/* 8 Footprint indicators: colored yellow when completed/current, styled like falling leaves */}
        <div className="flex items-center gap-2.5">
          {Array.from({ length: 8 }).map((_, i) => {
            const stepNum = i + 1;
            const isCompleted = stepNum < currentStep;
            const isCurrent = stepNum === currentStep;

            return (
              <div key={`footstep-${stepNum}`} className="relative flex flex-col items-center">
                <motion.div
                  className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition duration-300 ${
                    isCompleted
                      ? "bg-amber-500 shadow-md shadow-amber-950"
                      : isCurrent
                      ? "bg-amber-400 scale-125 border border-amber-300 shadow-lg shadow-amber-500/20"
                      : "bg-zinc-800"
                  }`}
                  animate={isCurrent ? { scale: [1, 1.3, 1] } : {}}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  {isCompleted && (
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-950" />
                  )}
                </motion.div>
                <span className={`text-[9px] mt-1 font-mono font-bold tracking-tighter ${
                  isCurrent ? "text-amber-400" : isCompleted ? "text-amber-600" : "text-zinc-600"
                }`}>
                  S{stepNum}
                </span>
              </div>
            );
          })}
        </div>
      </header>

      {/* MAIN LAYOUT WRAPPER (Grid: Question card on left, Wooden signpost options on right) */}
      <main className="relative z-20 w-full max-w-7xl mx-auto px-6 py-4 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-center">
        {/* LEFT COLUMN: Question context panel */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`question-card-${currentStep}`}
              className="bg-zinc-950/65 border border-zinc-800/80 rounded-2xl p-6 md:p-8 backdrop-blur-lg shadow-xl relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/5 to-transparent rounded-tr-2xl pointer-events-none" />

              {/* Decorative title label */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs font-bold tracking-widest text-amber-500 font-sans uppercase">
                  路口情境 : {currentQuestion.stageName}
                </span>
              </div>

              {/* Cinematic situation text */}
              <p className="text-base md:text-lg text-zinc-200 leading-relaxed font-sans first-letter:text-2xl first-letter:font-bold first-letter:text-amber-400 text-justify">
                {currentQuestion.situation}
              </p>

              {/* Subtext warning info */}
              <div className="mt-8 pt-4 border-t border-zinc-900/60 flex items-start gap-1.5 text-[11px] text-zinc-500 leading-normal">
                <AlertCircle className="w-3.5 h-3.5 text-zinc-600 flex-shrink-0 mt-0.5" />
                <span>
                  请凝神细品当前林中氛围。点击右方符合你此刻最原始知觉的路牌，向前走去。
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: Interactive signboard list options */}
        <div className="lg:col-span-7 flex flex-col justify-center gap-4">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`options-wrapper-${currentStep}`}
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, staggerChildren: 0.08, ease: "easeOut" }}
            >
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedOption === option.id;

                return (
                  <motion.div
                    key={`option-${option.id}`}
                    id={`option-card-${option.id}`}
                    onClick={() => onSelectOption(option.id)}
                    className={`relative p-5 rounded-xl border backdrop-blur-md cursor-pointer select-none transition-all duration-300 overflow-hidden ${
                      isSelected
                        ? "bg-zinc-900/90 border-amber-500 shadow-lg shadow-amber-950/40 translate-x-3 scale-[1.01]"
                        : "bg-zinc-950/40 border-zinc-800/80 hover:bg-zinc-900/50 hover:border-zinc-700/80 hover:translate-x-1"
                    }`}
                    whileHover={{ scale: isSelected ? 1.01 : 1.002 }}
                    whileTap={{ scale: 0.995 }}
                  >
                    {/* Selected Highlight Glowing Background effect */}
                    {isSelected && (
                      <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-amber-400 to-amber-600" />
                    )}

                    {/* Wooden structural aspect label on signboards */}
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex items-center gap-3">
                        {/* Custom visual signboard number icon */}
                        <div className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-xs font-bold border ${
                          isSelected
                            ? "bg-amber-500/10 border-amber-400 text-amber-400"
                            : "bg-zinc-900 text-zinc-500 border-zinc-800"
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </div>

                        {/* Option Option text label */}
                        <span className={`text-[14px] md:text-15 leading-relaxed font-sans transition duration-200 text-justify ${
                          isSelected ? "text-zinc-100 font-medium" : "text-zinc-300"
                        }`}>
                          {option.label}
                        </span>
                      </div>

                      {/* Flag showing selection */}
                      {isSelected && (
                        <motion.span
                          className="px-2 py-0.5 rounded text-[10px] font-bold tracking-widest bg-amber-500 text-zinc-950 uppercase shrink-0"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                        >
                          已选
                        </motion.span>
                      )}
                    </div>

                    {/* Selection interactive extra quote text block inside options */}
                    <AnimatePresence>
                      {isSelected && option.quote && (
                        <motion.div
                          className="mt-3.5 pl-9 pt-2 border-t border-zinc-900 flex items-center gap-2"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                        >
                          <span className="text-xs italic font-serif font-semibold text-amber-500">
                            {option.quote}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* FOOTER CONTROLS CONTROLLER (Previous back, Continue forwards, Warnings) */}
      <footer className="relative z-20 w-full px-6 py-6 border-t border-zinc-900/60 bg-zinc-950/90 backdrop-blur-md">
        <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Safety warning disclaimer anchor */}
          <div className="flex items-center gap-2 text-xs text-zinc-500 order-2 sm:order-1">
            <ShieldAlert className="w-4 h-4 text-zinc-600" />
            <span>公开思维模型匹配，不是心理诊断。</span>
          </div>

          {/* Forward-Back triggers bar */}
          <div className="flex items-center gap-4 w-full sm:w-auto justify-end order-1 sm:order-2">
            <button
              id="btn-prev-step"
              onClick={onPrev}
              disabled={currentStep === 1}
              className={`flex items-center gap-1.5 px-4.5 py-3 rounded-lg border text-sm font-semibold tracking-wider transition-all cursor-pointer ${
                currentStep === 1
                  ? "border-zinc-900 text-zinc-700 bg-transparent pointer-events-none"
                  : "border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:text-white hover:bg-zinc-900 hover:border-zinc-700"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              上一段
            </button>

            <button
              id="btn-next-step"
              onClick={handleNextClick}
              className="group flex items-center gap-1.5 px-7 py-3 bg-zinc-100 hover:bg-white text-zinc-950 font-semibold rounded-lg shadow-md transition duration-200 cursor-pointer"
            >
              继续
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition duration-200" />
            </button>
          </div>
        </div>
      </footer>

      {/* FLOATING TOAST WARNING DIALOG */}
      <AnimatePresence>
        {showWarning && (
          <motion.div
            id="unselected-prompt"
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3.5 bg-red-950/90 border border-red-500/40 rounded-xl shadow-xl backdrop-blur-md max-w-sm text-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
          >
            <AlertCircle className="w-5 h-5 text-red-400 stretch-0 shrink-0" />
            <span className="text-13 tracking-wider text-red-200 font-medium font-sans">
              先选一块路牌，再继续走。
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
