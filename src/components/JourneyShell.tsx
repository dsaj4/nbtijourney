/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Compass, Eye, Map, Sparkles } from "lucide-react";
import { calculateThinkerProfile } from "../types";
import ActOneEntrance from "./ActOneEntrance";
import ActTwoQuizFork from "./ActTwoQuizFork";
import ActThreeReportLake from "./ActThreeReportLake";
import backgroundImage from "../../assets/背景.png";

type JourneyStage = "entrance" | "quiz" | "transition" | "report";

export default function JourneyShell() {
  const [stage, setStage] = useState<JourneyStage>("entrance");
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Restart the walk back to Act 1
  const handleRestart = () => {
    setAnswers({});
    setSelectedOption(null);
    setCurrentStep(1);
    setStage("entrance");
  };

  const handleStartQuiz = () => {
    setStage("quiz");
  };

  const handleSelectOption = (optionId: string) => {
    setSelectedOption(optionId);
    setAnswers((prev) => ({ ...prev, [currentStep]: optionId }));
  };

  const handleNextStep = () => {
    if (currentStep < 8) {
      setCurrentStep((prev) => prev + 1);
      // Pre-populate with previous selection if exists
      setSelectedOption(answers[currentStep + 1] || null);
    } else {
      // Completed last step! Trigger cinematic Act 2 to Act 3 Transition
      setStage("transition");
      
      // Auto advance to report after the cinematic animation plays out (3.2 seconds)
      setTimeout(() => {
        setStage("report");
      }, 3400);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      setSelectedOption(answers[currentStep - 1] || null);
    }
  };

  // Compute matched thinker based on answers
  const matchedProfile = calculateThinkerProfile(answers);

  return (
    <div id="journey-application-shell" className="relative w-full min-h-screen bg-zinc-950 overflow-hidden select-none">
      <AnimatePresence mode="wait">
        
        {/* ACT 1: ENTRANCE */}
        {stage === "entrance" && (
          <motion.div
            key="stage-entrance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <ActOneEntrance onStart={handleStartQuiz} />
          </motion.div>
        )}

        {/* ACT 2: QUIZ FORKS */}
        {stage === "quiz" && (
          <motion.div
            key="stage-quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <ActTwoQuizFork
              currentStep={currentStep}
              selectedOption={selectedOption}
              onSelectOption={handleSelectOption}
              onNext={handleNextStep}
              onPrev={handlePrevStep}
            />
          </motion.div>
        )}

        {/* INTER-ACT 2 TO 3 CINEMATIC TRANSITION (Forest opens, golden light extends, road marches forward into the lake) */}
        {stage === "transition" && (
          <motion.div
            key="stage-transition"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Cinematic zoom backdrop of path ending */}
            <motion.div
              className="absolute inset-0 bg-cover bg-center origin-center filter brightness-65"
              style={{
                backgroundImage: `url(${backgroundImage})`,
              }}
              initial={{ scale: 1.0, filter: "blur(2px) brightness(0.5)" }}
              animate={{
                scale: 1.25,
                filter: "blur(5px) brightness(1.2)"
              }}
              transition={{
                duration: 3.2,
                ease: "easeInOut"
              }}
            />

            {/* Glowing gold light rays in the distance */}
            <div className="absolute inset-0 pointer-events-none z-10 bg-radial-gradient from-amber-500/20 via-transparent to-zinc-950/80" />

            {/* Floating golden autumn elements */}
            <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
              <div className="w-96 h-96 rounded-full bg-amber-400/10 blur-[80px] animate-pulse" />
            </div>

            {/* Cinematic transitional typography overlaid centered */}
            <div className="relative z-20 text-center max-w-lg px-6 space-y-6">
              
              {/* Spinning leaf coordinates */}
              <motion.div
                className="mx-auto w-12 h-12 rounded-full border border-amber-400/40 bg-zinc-900/60 flex items-center justify-center mb-4"
                animate={{ rotate: 180 }}
                transition={{ duration: 3, ease: "easeInOut" }}
              >
                <Compass className="w-6 h-6 text-amber-400" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xs font-bold tracking-widest text-amber-400 uppercase font-mono"
              >
                AUTUMN FOREST IS ENDING
              </motion.p>

              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-2xl md:text-3xl font-sans font-bold text-zinc-100 tracking-tight leading-snug"
              >
                林网已散，湖光渐阔。
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-200">
                  思维的水镜，正在浮现你的面庞...
                </span>
              </motion.h3>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.45 }}
                transition={{ duration: 1.5, delay: 1.2 }}
                className="flex items-center justify-center gap-1.5 text-xs text-zinc-400 italic"
              >
                <span>正在抵达：静谧终点水畔镜像湖景</span>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* ACT 3: LAKESIDE MIRROR REPORT */}
        {stage === "report" && (
          <motion.div
            key="stage-report"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full h-full"
          >
            <ActThreeReportLake profile={matchedProfile} onRestart={handleRestart} />
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
