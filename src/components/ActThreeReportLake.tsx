/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Compass,
  ArrowRight,
  RefreshCw,
  Info,
  Layers,
  Sparkles,
  Share2,
  CheckCircle2,
  ShieldCheck,
  Eye,
  Download,
  Users,
  Flame,
  ArrowRightCircle
} from "lucide-react";
import { ThinkerProfile, THINKER_PROFILES } from "../types";

interface ActThreeReportLakeProps {
  profile: ThinkerProfile;
  onRestart: () => void;
}

export default function ActThreeReportLake({ profile, onRestart }: ActThreeReportLakeProps) {
  const [hoveredNearby, setHoveredNearby] = useState<string | null>(null);
  const [savedImage, setSavedImage] = useState(false);
  const shareCardRef = useRef<HTMLDivElement>(null);

  const handleDownloadCard = () => {
    setSavedImage(true);
    setTimeout(() => setSavedImage(false), 3000);
  };

  return (
    <div className="relative w-full min-h-screen bg-zinc-950 font-sans text-zinc-100 pb-20 select-none">
      {/* 1. ATMOSPHERIC BACKDROP OF THE LAKESIDE MIRROR */}
      <div
        className="absolute top-0 inset-x-0 h-[680px] bg-cover bg-center filter opacity-45 mix-blend-color-dodge pointer-events-none z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      
      {/* Golden hour mist light blur circles */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-amber-500/10 blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-[400px] right-20 w-80 h-80 rounded-full bg-emerald-500/5 blur-[90px] pointer-events-none z-0" />

      {/* HEADER BAR */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-5 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-500 flex items-center justify-center">
            <Compass className="w-5 h-5 text-zinc-950 stroke-[2.5]" />
          </div>
          <span className="font-sans font-bold text-xl tracking-wider text-zinc-100">
            NBti
          </span>
        </div>

        <button
          onClick={onRestart}
          className="flex items-center gap-1 px-4 py-2 border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white rounded-lg transition duration-200 cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5 mr-1" />
          重新走一遍
        </button>
      </header>

      {/* MAIN HERO: LAKESIDE MIRROR + MAIN REPORT TITLE */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-4 items-stretch">
        
        {/* LEFT COLUMN (Lgspan 4): THE VINTAGE ARCHEOLOGY MIRROR */}
        <div className="lg:col-span-4 flex flex-col justify-center items-center">
          <motion.div
            id="vintage-lakeside-mirror"
            className="w-full max-w-xs aspect-[3/4.5] md:aspect-[3/4.2] border-6 border-zinc-700/80 rounded-full shadow-2xl relative bg-zinc-900/90 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-hidden"
            initial={{ scale: 0.95, opacity: 0, rotateY: -30 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ type: "spring", duration: 1.2, bounce: 0.2 }}
            style={{
              boxShadow: "0 0 40px rgba(0,0,0,0.8), inset 0 0 35px rgba(245, 158, 11, 0.15)",
              borderColor: "#3F3F46" // polished iron/bronze look
            }}
          >
            {/* Mirror reflection gold sheen */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent skew-y-12 pointer-events-none" />

            {/* Glowing background in mirror matching profile accent */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none blur-3xl"
              style={{
                background: `radial-gradient(circle, ${profile.accentColor}, transparent 75%)`,
              }}
            />

            {/* ABSTRACT THINKING SYMBOL PORTRAIT IN THE MIRROR */}
            <div className="w-48 h-48 flex items-center justify-center relative z-10">
              {/* Dynamic pulsing path animation */}
              <motion.svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                initial={{ strokeDashoffset: 300 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2.2, ease: "easeOut" }}
              >
                <defs>
                  <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={profile.accentColor} />
                    <stop offset="100%" stopColor="#FFF" stopOpacity="0.4" />
                  </linearGradient>
                  <filter id="glowEffect">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Draw matching path of thinker shape defined in types.ts */}
                <motion.path
                  d={profile.shapeSvgPath}
                  fill="none"
                  stroke="url(#glowGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  filter="url(#glowEffect)"
                  animate={{
                    scale: [0.97, 1.03, 0.97],
                    rotate: [0, 4, -4, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 7,
                    ease: "easeInOut"
                  }}
                  style={{ transformOrigin: "center" }}
                />
              </motion.svg>
            </div>

            {/* Ornate plaque underneath mirror */}
            <div className="mt-4 text-center z-10">
              <span className="text-[10px] font-bold tracking-widest text-amber-500 uppercase font-mono">
                Thinking Portrait
              </span>
              <h4 className="text-sm font-semibold tracking-wide text-zinc-300 mt-1">
                {profile.shapeName}
              </h4>
            </div>

            {/* Moss/Ivy decor details hanging on the mirror frame mathematically */}
            <div className="absolute -bottom-2 -left-1 opacity-60">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="#047857">
                <path d="M0,40 Q15,35 20,20 Q10,25 0,40 Z M15,30 Q25,20 30,10 Q20,15 15,30 Z" />
              </svg>
            </div>
            <div className="absolute -top-3 -right-2 opacity-50">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="#D97706">
                <path d="M40,0 Q25,5 20,20 Q30,15 40,0 Z M25,10 Q15,20 10,30 Q20,25 25,10 Z" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* MIDDLE COLUMN (Lgspan 5): DYNAMIC PRIMARY REPORT COPY CONTAINER */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            id="result-text-panel"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Mind Matching Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-semibold text-amber-400 tracking-wider">
                走径终点 · 脑回路匹配模型
              </span>
            </div>

            {/* Main Title Result match */}
            <div className="space-y-2">
              <span className="text-zinc-400 text-sm tracking-wider font-semibold">你的大脑回路最接近：</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-white tracking-tight leading-tight">
                {profile.title}
              </h2>
            </div>

            {/* Deep philosophy tagline quote */}
            <blockquote className="border-l-2 border-amber-500/60 pl-4 py-1 italic text-zinc-300 font-serif text-base md:text-lg">
              {profile.tagline}
            </blockquote>

            {/* Curated list of cognitive tag indicators */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {profile.tags.map((tag) => (
                <span
                  key={`tag-${tag}`}
                  className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Descriptive Summary of matching style */}
            <p className="text-sm md:text-base leading-relaxed text-zinc-300 text-justify">
              {profile.description}
            </p>
          </motion.div>
        </div>

        {/* RIGHT COLUMN (Lgspan 3): QUIET LAKESIDE MAP OF NEARBY THINKERS */}
        <div className="lg:col-span-3 flex flex-col justify-center relative min-h-[220px] lg:min-h-auto">
          {/* Lakeside mini panel with coordinate nodes */}
          <div className="w-full h-full bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-5 backdrop-blur-md relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-500/5 to-transparent pointer-events-none" />

            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <Users className="w-4 h-4 text-emerald-400" />
                <h4 className="text-xs font-bold text-emerald-400 tracking-widest uppercase">
                  湖畔知音共鸣
                </h4>
              </div>
              <p className="text-[11px] text-zinc-400 leading-normal">
                微茫湖面上，伫立着另外几位近代思想家影绰的坐标。点击或悬停这些浮标，倾听你思维里与之共鸣的细流。
              </p>
            </div>

            {/* Map Canvas viewport Container mimicking lakeside */}
            <div className="relative w-full aspect-[4/3] rounded-lg bg-zinc-950 border border-zinc-900 overflow-hidden my-4">
              {/* Lake pattern representing coordinates */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-sky-950/20 pointer-events-none" />
              
              {/* Star point map */}
              {profile.nearbyThinkers.map((nearby) => {
                const isHovered = hoveredNearby === nearby.id;
                return (
                  <div
                    key={`nearby-${nearby.id}`}
                    style={{
                      position: "absolute",
                      left: `${nearby.coordinates.x}%`,
                      top: `${nearby.coordinates.y}%`,
                    }}
                    className="z-20 transform -translate-x-1/2 -translate-y-1/2 cursor-help"
                    onMouseEnter={() => setHoveredNearby(nearby.id)}
                    onMouseLeave={() => setHoveredNearby(null)}
                    onClick={() => setHoveredNearby(hoveredNearby === nearby.id ? null : nearby.id)}
                  >
                    {/* Ring Pulse Glow */}
                    <div className="absolute w-4 h-4 rounded-full bg-amber-400/30 scale-150 animate-ping pointer-events-none" />
                    
                    {/* Core Point dot */}
                    <div className={`w-3 h-3 rounded-full border transition duration-300 ${
                      isHovered ? "bg-amber-300 scale-125 border-white" : "bg-teal-500/80 border-amber-500/40"
                    }`} />
                  </div>
                );
              })}

              {/* Instructions tag inside lake */}
              <div className="absolute bottom-2 left-2 text-[8px] tracking-tighter text-zinc-600 uppercase font-mono pointer-events-none">
                Lakeside Nodes Map
              </div>
            </div>

            {/* Nearby interactive popup overlay container block */}
            <div className="h-20 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {hoveredNearby ? (
                  (() => {
                    const matched = profile.nearbyThinkers.find((nt) => nt.id === hoveredNearby);
                    return matched ? (
                      <motion.div
                        key={`popup-card-${matched.id}`}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="w-full p-2.5 rounded-lg border border-teal-500/30 bg-teal-950/20 text-left"
                      >
                        <h5 className="text-[11px] font-bold text-amber-400">
                          附近折返：{matched.name}
                        </h5>
                        <p className="text-[10px] text-zinc-300 leading-snug mt-1">
                          {matched.thinkingStyle}
                        </p>
                      </motion.div>
                    ) : null;
                  })()
                ) : (
                  <motion.div
                    key="lake-idle-msg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-[11px] text-zinc-500 italic text-center text-balance"
                  >
                    悬停或点击湖面上闪烁的绿星，阅读折射特质。
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>

      {/* CONTINUOUS SECOND BENTO ROW: REPORTS BLOCK DETAIL */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* BENTO BLOCK 1: WHY RECOGNIZE (为什么像) */}
        <motion.div
          className="bg-zinc-900/60 border border-zinc-800/80 p-6 rounded-2xl flex flex-col justify-between"
          whileHover={{ y: -3, borderColor: "rgba(245, 158, 11, 0.2)" }}
          transition={{ duration: 0.2 }}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-amber-500" />
              <h3 className="text-base font-bold text-zinc-100 uppercase tracking-widest font-sans">
                一、 为什么匹配此类型?
              </h3>
            </div>
            
            <ul className="space-y-3.5 text-xs text-zinc-300 leading-relaxed font-sans list-none">
              {profile.bulletPoints.map((point, idx) => (
                <li key={`bullet-${idx}`} className="flex gap-2 items-start text-justify">
                  <CheckCircle2 className="w-4 h-4 text-amber-500/80 flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 pt-3 border-t border-zinc-900 text-[10px] text-zinc-500 font-mono tracking-wider">
            Match Index: Cognitive Matrix Layer 1
          </div>
        </motion.div>

        {/* BENTO BLOCK 2: THINKING SHAPE (思维的深层轮廓与带走动作) */}
        <motion.div
          className="bg-zinc-900/60 border border-zinc-800/80 p-6 rounded-2xl flex flex-col justify-between"
          whileHover={{ y: -3, borderColor: "rgba(245, 158, 11, 0.2)" }}
          transition={{ duration: 0.2 }}
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h3 className="text-base font-bold text-zinc-100 uppercase tracking-widest font-sans">
                二、 思维的显像几何
              </h3>
            </div>
            <p className="text-xs text-zinc-400 font-serif italic mb-4">
              模型命名：{profile.shapeName}
            </p>
            <p className="text-xs text-zinc-300 leading-relaxed text-justify mb-5">
              {profile.shapeDescription}
            </p>

            <div className="pt-4 border-t border-zinc-900/60">
              <span className="text-[11px] font-bold text-emerald-400 tracking-wider block mb-2 uppercase">
                可带走行动指示 (Actionable Advice)
              </span>
              <p className="text-xs text-zinc-200 leading-relaxed text-justify">
                {profile.actionableAdvice}
              </p>
            </div>
          </div>
          <div className="mt-6 pt-3 border-t border-zinc-900 text-[10px] text-zinc-500 font-mono tracking-wider">
            Shape Formula: {profile.id.toUpperCase()}_PRISM_GRID
          </div>
        </motion.div>

        {/* BENTO BLOCK 3: DOWNLOAD CARD PREVIEW FOR SOCIALS */}
        <motion.div
          className="bg-zinc-900/60 border border-zinc-800/80 p-6 rounded-2xl flex flex-col justify-between"
          whileHover={{ y: -3, borderColor: "rgba(245, 158, 11, 0.2)" }}
          transition={{ duration: 0.2 }}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Share2 className="w-5 h-5 text-amber-500" />
              <h3 className="text-base font-bold text-zinc-100 uppercase tracking-widest font-sans">
                三、 行者手帐 · 分享卡片
              </h3>
            </div>

            {/* Mini visual mockup of the download card */}
            <div
              ref={shareCardRef}
              className="w-full aspect-[7/4.5] rounded-xl bg-orange-950/20 border border-amber-500/20 p-4 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900"
            >
              {/* Subtle aesthetic details in share card mockup */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-radial-gradient from-amber-500/15 to-transparent pointer-events-none" />
              
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[8px] font-bold tracking-widest text-amber-500 block uppercase font-mono">
                    NBti THINKER REPORT
                  </span>
                  <h4 className="text-xs font-bold text-zinc-100 mt-1">
                    {profile.title}
                  </h4>
                </div>
                <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-400/20">
                  <Compass className="w-2.5 h-2.5 text-amber-400" />
                </div>
              </div>

              <div className="my-2 border-b border-zinc-900 pb-2">
                <p className="text-[9px] text-zinc-400 line-clamp-2 italic text-justify leading-relaxed">
                  &ldquo;{profile.tagline}&rdquo;
                </p>
              </div>

              <div className="flex justify-between items-center text-[8px] font-mono tracking-tight text-zinc-500">
                <span>非心理诊断 · 公开自恰思维匹配</span>
                <span className="text-amber-500/60">ID: {profile.id.toUpperCase()}_2026</span>
              </div>
            </div>

            <button
              onClick={handleDownloadCard}
              className="w-full mt-5 py-3 rounded-lg border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 font-semibold text-xs text-zinc-200 hover:text-white flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-amber-500" />
              保存到相册
            </button>
          </div>
          
          <div className="mt-4">
            <AnimatePresence>
              {savedImage && (
                <motion.span
                  key="toast-saved-info"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="text-[10px] text-amber-400 font-semibold flex items-center justify-center gap-1 bg-amber-950/20 py-1.5 border border-amber-400/20 rounded"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  已生成高清行者卡，长按上方缩略图或直接截图保存。
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* RECOMENDATIONS BLOCK AND RESET SEED */}
      <section className="relative z-10 w-full max-w-4xl mx-auto px-6 py-6 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6 bg-zinc-900/10 rounded-2xl">
        <div className="flex items-center gap-3">
          <Flame className="w-6 h-6 text-orange-400 flex-shrink-0 animate-pulse" />
          <div className="text-left">
            <h4 className="text-sm font-bold text-zinc-200">
              思想家第二季企划推荐
            </h4>
            <p className="text-xs text-zinc-400">
              下个秋雨晨曦：<span className="text-amber-400">{profile.recommendedNext}</span> 正开放登记中。
            </p>
          </div>
        </div>

        <button
          onClick={onRestart}
          className="px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs flex items-center gap-1.5 active:scale-98 transition duration-200 cursor-pointer"
        >
          <Compass className="w-4 h-4" />
          漫步新回路
          <ArrowRightCircle className="w-4 h-4" />
        </button>
      </section>

      {/* REPORT BOTTOM SAFETY STATEMENT DISCLAIMER */}
      <footer className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12 text-center text-xs text-zinc-600 leading-relaxed font-sans">
        <div className="flex items-center justify-center gap-1.5 mb-2">
          <ShieldCheck className="w-4 h-4 text-zinc-700" />
          <span className="font-semibold tracking-wider text-zinc-500 uppercase">SAFETY COGNITIVE COOPERATION</span>
        </div>
        <p className="max-w-2xl mx-auto">
          本结果是基于公开文本和历史思想家传统文史材料抽象出的思维模式匹配计算，并非具备临床、医学或专业权威性的心理特质诊断，亦不代表所述哲人本人对本算法模型的任何正式授权、真实内心或者心理评级。
        </p>
      </footer>
    </div>
  );
}
