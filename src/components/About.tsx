"use client";

import { motion } from "framer-motion";
import { FaServer, FaDatabase, FaCog } from "react-icons/fa";

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="about" className="py-24 relative w-full flex flex-col items-center overflow-hidden bg-black">
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row gap-12 items-center relative z-10">

                {/* Left Side: Text Details */}
                <motion.div
                    className="flex-1 space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div variants={itemVariants} className="flex flex-col gap-2 mb-4">
                        <p className="text-gray-600 font-mono text-xs tracking-widest uppercase">// about me</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Who I Am</h2>
                        <div className="w-12 h-0.5 bg-white/30 mt-1"></div>
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed font-normal">
                        Results-driven <span className="text-neon-cyan font-semibold drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]">Full Stack Developer</span> with deep expertise in <span className="font-semibold text-white">System Design and Architectural Engineering</span> — building scalable, secure, and production-grade web platforms from the ground up.
                    </motion.p>

                    <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed font-normal">
                        Strong foundation in <span className="font-semibold text-white">backend architecture</span>, RESTful API design, authentication systems (JWT/OAuth), database design (PostgreSQL), caching (Redis), and asynchronous job processing — delivering systems optimized for performance, reliability, and scale.
                    </motion.p>

                    <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed font-normal">
                        Also experienced in <span className="text-neon-purple font-semibold drop-shadow-[0_0_5px_rgba(188,19,254,0.8)]">AI-Based Development</span> — integrating OpenAI APIs, building Agentic AI workflows, and delivering intelligent features into full-stack production applications.
                    </motion.p>
                </motion.div>

                {/* Right Side: Animated Diagram */}
                <motion.div
                    className="flex-1 w-full max-w-md relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="glass p-8 rounded-3xl relative w-full h-[400px] flex items-center justify-center border border-white/10 group">
                        {/* Diagram Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:20px_20px] rounded-3xl"></div>

                        <div className="relative w-full h-full flex flex-col items-center justify-around">
                            {/* Client/Frontend */}
                            <div className="flex gap-4 z-10">
                                <motion.div
                                    initial={{ boxShadow: "0 0 10px rgba(255,255,255,0.1)" }}
                                    animate={{ boxShadow: ["0 0 10px rgba(255,255,255,0.1)", "0 0 20px rgba(255,255,255,0.3)", "0 0 10px rgba(255,255,255,0.1)"] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="bg-black border border-white/40 text-white px-6 py-2.5 rounded-sm font-mono text-sm tracking-wider uppercase"
                                >
                                    Client.UI
                                </motion.div>
                            </div>

                            {/* API Layer */}
                            <div className="relative z-10 bg-[#0a0a0a] border border-white/30 text-gray-200 px-8 py-3.5 rounded-sm font-mono uppercase flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                                <FaServer /> API_GATEWAY
                            </div>

                            {/* Data & Background Processing */}
                            <div className="flex w-full justify-between px-4 z-10">
                                <div className="bg-[#0a0a0a] border border-white/20 text-gray-300 px-5 py-2.5 rounded-sm font-mono flex flex-col items-center gap-1 shadow-sm text-xs uppercase tracking-wider">
                                    <FaDatabase /> PG_SQL & REDIS
                                </div>
                                <div className="bg-[#0a0a0a] border border-white/15 text-gray-400 px-5 py-2.5 rounded-sm font-mono flex flex-col items-center gap-1 shadow-sm text-xs uppercase tracking-wider">
                                    <FaCog /> WORKER_NODES
                                </div>
                            </div>

                            {/* SVGs connecting the nodes */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                                <path d="M200 80 L200 160" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4,4" />
                                <motion.circle cx="200" cy="80" r="3" fill="white"
                                    animate={{ cy: [80, 160] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                    style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.6))" }}
                                />
                                <path d="M160 210 L100 290" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4,4" />
                                <motion.circle cx="160" cy="210" r="2.5" fill="white"
                                    animate={{ cx: [160, 100], cy: [210, 290] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                                    style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.6))" }}
                                />
                                <path d="M240 210 L300 290" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4,4" />
                                <motion.circle cx="240" cy="210" r="2.5" fill="white"
                                    animate={{ cx: [240, 300], cy: [210, 290] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                                    style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.6))" }}
                                />
                            </svg>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
