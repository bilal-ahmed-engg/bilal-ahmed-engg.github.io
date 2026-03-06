"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import NetworkBackground from "./NetworkBackground";
import { FaFileDownload, FaTerminal, FaArrowDown } from "react-icons/fa";

const keywords = [
    "System Architecture",
    "Agentic AI Development",
    "Scalable Backends",
    "OpenAI Integration",
    "Full Stack Engineering",
];

const Typewriter = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % keywords.length);
        }, 2800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-8 flex items-center gap-2 font-mono text-base md:text-lg">
            <span className="text-gray-700">~/</span>
            <AnimatePresence mode="wait">
                <motion.span
                    key={keywords[index]}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="text-gray-400"
                >
                    {keywords[index]}
                </motion.span>
            </AnimatePresence>
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="w-0.5 h-5 bg-white inline-block"
            />
        </div>
    );
};

export default function Hero() {
    const { scrollY } = useScroll();
    const yHeroText = useTransform(scrollY, [0, 500], [0, -120]);
    const opacityHero = useTransform(scrollY, [0, 350], [1, 0]);

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black" id="home">
            <NetworkBackground />

            {/* Scanline */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:100%_3px] z-0"></div>

            {/* Center radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,255,255,0.04)_0%,transparent_70%)] pointer-events-none z-0"></div>

            <motion.div
                style={{ y: yHeroText, opacity: opacityHero }}
                className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-start justify-center text-left"
            >
                {/* Top label */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 mb-8"
                >
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-800 bg-[#0a0a0a] text-gray-500 font-mono text-xs tracking-widest uppercase">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                        Available for opportunities
                    </div>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl font-extrabold text-white mb-3 tracking-tighter leading-[1.0] max-w-4xl"
                >
                    Bilal Ahmed<br /><span className="text-gray-400">Siddique</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-500 text-lg md:text-xl mb-8 font-light tracking-wide max-w-2xl leading-relaxed"
                >
                    Full Stack Developer specializing in <span className="text-gray-300">System Design</span>, <span className="text-gray-300">Backend Architecture</span>, and <span className="text-gray-300">AI-Based Development</span>.
                </motion.p>

                {/* Typewriter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mb-10"
                >
                    <Typewriter />
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="flex flex-wrap items-center gap-4"
                >
                    <a
                        href="#projects"
                        className="group px-8 py-3.5 rounded-xl bg-white text-black font-semibold font-mono text-sm hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center gap-2"
                    >
                        View Projects
                        <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="px-8 py-3.5 flex items-center gap-2 rounded-xl border border-gray-800 text-gray-400 font-mono text-sm font-medium hover:border-gray-600 hover:text-white transition-all duration-200"
                    >
                        <FaFileDownload className="text-xs" /> Resume
                    </a>
                    <a href="#contact" className="px-6 py-3.5 font-mono text-sm text-gray-600 hover:text-gray-400 transition-colors">
                        Contact →
                    </a>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="flex flex-wrap items-center gap-8 mt-14 pt-8 border-t border-gray-900"
                >
                    {[
                        { value: "2+", label: "Years Experience" },
                        { value: "30%", label: "API Performance Gains" },
                        { value: "3", label: "Production Platforms" },
                    ].map((stat, idx) => (
                        <div key={idx} className="flex flex-col">
                            <span className="text-2xl font-bold text-white font-mono">{stat.value}</span>
                            <span className="text-gray-600 text-sm font-mono mt-0.5">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex flex-col items-center gap-2 text-gray-700"
                >
                    <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
                    <FaArrowDown className="text-xs" />
                </motion.div>
            </motion.div>

            {/* Floating code — desktop only */}
            <div className="absolute right-8 top-1/3 text-[11px] font-mono text-white/8 hidden xl:block select-none pointer-events-none leading-relaxed">
                {`const agent = new AutonomousAgent({
  model: 'gpt-4o',
  permissions: 'root',
});
await agent.execute(task);`}
            </div>
        </section>
    );
}
