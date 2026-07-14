/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Compass, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Droplets } from "lucide-react";

interface ActOneEntranceProps {
  onStart: () => void;
}

export default function ActOneEntrance({ onStart }: ActOneEntranceProps) {
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  // Cascading drop counts for rain effect overlay
  const rainDrops = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    delay: Math.random() * 3,
    duration: 1.5 + Math.random() * 1.5,
    left: `${Math.random() * 100}%`,
  }));

  // Scattered glowing autumn leaf drift coordinates
  const leaves = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    delay: Math.random() * 8,
    duration: 10 + Math.random() * 15,
    left: `${Math.random() * 100}%`,
    startScale: 0.5 + Math.random() * 0.5,
    rotateRange: 180 + Math.random() * 360,
  }));

  const handleStartJourney = () => {
    setIsLeaving(true);
    // Give time for the walking camera motion to play out before switching acts
    setTimeout(() => {
      onStart();
    }, 1800);
  };

  return (
    <div id="act-one-viewport" className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between bg-zinc-950 font-sans select-none">
      {/* 1. CINEMATIC OUTSIDE LANDSCAPE (Deep background layer with autumn foliage and road perspective) */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center origin-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1920&q=80')`,
        }}
        animate={{
          scale: isLeaving ? 1.25 : 1.03,
          y: isLeaving ? -50 : 0,
          filter: isLeaving ? "blur(8px) brightness(0.2)" : "blur(0px) brightness(0.65)",
        }}
        transition={{
          duration: 1.8,
          ease: [0.7, 0, 0.2, 1], // deep cinematic easing curve
        }}
      />

      {/* Rain droplets overlay falling down */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden mix-blend-screen opacity-40">
        {rainDrops.map((drop) => (
          <div
            key={`drop-${drop.id}`}
            style={{
              position: "absolute",
              left: drop.left,
              top: "-5%",
              width: "1.5px",
              height: "40px",
              background: "linear-gradient(to bottom, transparent, rgba(220, 225, 255, 0.45))",
            }}
            className="animate-pulse"
          />
        ))}
      </div>

      {/* Floating drifting leaves overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-30">
        {leaves.map((leaf) => (
          <motion.div
            key={`leaf-${leaf.id}`}
            className="absolute text-amber-500/80 fill-current"
            style={{ left: leaf.left, top: "-10%" }}
            initial={{ y: -50, rotate: 0, x: 0 }}
            animate={{
              y: "115vh",
              x: [0, 40, -40, 20],
              rotate: leaf.rotateRange,
            }}
            transition={{
              duration: leaf.duration,
              delay: leaf.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Elegant SVG Autumn Leaf Outline */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2 C11.5,4.5 9,6.5 6,8 C3,9.5 2,12 3.5,14.5 C5,17 8.5,16.5 10.5,15 C10.2,16 10.5,17.5 11.5,18.5 C12.5,19.5 14,19.8 15,19.5 C13.5,17.5 13,14 15.5,11 C18,8 20,5.5 22,5 C19.5,6.5 16,6.5 13.5,8 C11,9.5 12,12 12,12 C12,12 12.5,9 12,2 Z" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Atmospheric misty golden glow in center */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-radial-gradient from-amber-500/10 via-transparent to-zinc-950/80" />

      {/* Subtle bottom road lines overlay drawn mathematically to guide eye */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none z-10 overflow-hidden opacity-25">
        <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
          {/* Centered Perspective Road Lines */}
          <path d="M 500,200 L 200,500" stroke="#FBBF24" strokeWidth="3" strokeDasharray="10, 10" />
          <path d="M 500,200 L 800,500" stroke="#9A3412" strokeWidth="4" />
          <path d="M 500,200 L 150,500" stroke="#9A3412" strokeWidth="4" />
        </svg>
      </div>

      {/* HEADER BAR (Logo & Series Label) */}
      <header className="relative z-20 w-full px-6 py-4 md:px-12 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent">
        <div id="logo-block" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-700 to-amber-400 flex items-center justify-center shadow-lg shadow-amber-950/40">
            <Compass className="w-5 h-5 text-zinc-950 stroke-[2.5]" />
          </div>
          <span className="font-sans font-bold text-2xl tracking-widest text-zinc-100 uppercase bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-300">
            NBti
          </span>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-sans text-xs font-medium tracking-widest text-amber-300 whitespace-nowrap">
            思想家系列 · 2026
          </span>
        </div>
      </header>

      {/* MAIN TWO-COLUMN DISPLAY HERO (Left content, Right road guiding space) */}
      <main className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 py-6 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Introspective copy layout */}
        <motion.div
          id="intro-text"
          className="lg:col-span-7 flex flex-col justify-center text-left"
          animate={{
            opacity: isLeaving ? 0 : 1,
            x: isLeaving ? -80 : 0,
            filter: isLeaving ? "blur(5px)" : "blur(0px)",
          }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Tagline */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-[1px] bg-amber-500/50" />
            <p className="text-xs font-medium tracking-widest text-amber-400 uppercase">
              DEEP PHILOSOPHICAL COGNITIVE PATH
            </p>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans tracking-tight text-white leading-[1.15] font-semibold mb-6">
            走一段路，
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200 drop-shadow-md">
              看看你的脑回路像谁
            </span>
          </h1>

          {/* Descriptive Content */}
          <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-lg mb-8">
            一场轻松幽默、不失深度的公开思维模型匹配。
            每一次在深林雨路的分叉口做出选择，你都在踩下一块引路的路牌。走到静谧湖泊旁，你终将认清思维映射中的那个自我。
          </p>

          {/* Interactive CTA buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md">
            <button
              id="cta-start-journey"
              onClick={handleStartJourney}
              className="group relative flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-zinc-950 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-amber-500/20 active:scale-98 transition duration-200 cursor-pointer text-center"
            >
              從這裡出發
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition duration-200" />
            </button>

            <button
              id="cta-how-to-play"
              onClick={() => setShowHowToPlay(true)}
              className="flex items-center justify-center gap-2 px-6 py-4 border border-zinc-200/20 bg-zinc-900/40 text-zinc-300 hover:text-white hover:bg-zinc-900/70 hover:border-zinc-200/40 rounded-xl transition cursor-pointer text-center"
            >
              <HelpCircle className="w-5 h-5 text-amber-500/70" />
              先看玩法
            </button>
          </div>
        </motion.div>

        {/* Right side - Negative compositional spacer mimicking road depth */}
        <div className="hidden lg:block lg:col-span-5 h-[340px] pointer-events-none" />
      </main>

      {/* FOOTER ACTION (Disclaimer and quick statistics) */}
      <footer className="relative z-20 w-full px-6 py-6 border-t border-zinc-900/40 bg-zinc-950/80 backdrop-blur-sm flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wide text-zinc-500">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-500/60" />
          <span>非心理诊断 · 不代表人物授权或真实内心 · 约 2 分钟</span>
        </div>
        <div className="flex items-center gap-3">
          <Droplets className="w-4 h-4 text-sky-400/50 animate-pulse" />
          <span>思想家系列第二季：雨后清晨</span>
        </div>
      </footer>

      {/* POPUP MODAL: HOW TO PLAY */}
      <AnimatePresence>
        {showHowToPlay && (
          <motion.div
            id="how-to-play-modal"
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-zinc-950/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-lg bg-zinc-900 border border-zinc-800/80 rounded-2xl p-6 md:p-8 shadow-2xl relative"
              initial={{ scale: 0.93, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.93, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-5 border-b border-zinc-800 pb-3">
                <Compass className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-bold text-zinc-100 tracking-wide font-sans">
                  林径漫步指南
                </h3>
              </div>

              <div className="space-y-4 text-sm text-zinc-300 leading-relaxed font-sans mb-6">
                <p>
                  1. <strong className="text-amber-400">持续前进</strong>：开启旅程后，你将步入林间大路。你一共会走过 <span className="text-zinc-100 font-semibold">8</span> 段雨后林口情境。
                </p>
                <p>
                  2. <strong className="text-amber-400">选择分叉</strong>：每一个路口情境，路边都立有 4 块刻着思维决策的木制引路牌。请选择一块最默契的牌面，然后按下「继续」。
                </p>
                <p>
                  3. <strong className="text-amber-400">投影水月</strong>：完成第 8 段路时，林网会向你舒卷而开，你将被带到一派静谧的澄净湖泊前。在长苔老树下的古镜里，你会瞥见你本能的哲思面貌。
                </p>
                <p>
                  4. <strong className="text-amber-400">知音共鸣</strong>：湖面上还散落着微弱的星标坐标——他们是与你的第二人格或相近特质遥遥呼应的著名哲人阴影。
                </p>
              </div>

              <button
                onClick={() => setShowHowToPlay(false)}
                className="w-full py-3 bg-zinc-100 hover:bg-white text-zinc-950 font-semibold rounded-xl text-center active:scale-98 transition duration-200 cursor-pointer"
              >
                我已了解，立即出发
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
