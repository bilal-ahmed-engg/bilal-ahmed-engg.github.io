"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FaChevronDown, FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaTerminal } from "react-icons/fa";

const experiences = [
    {
        company: "Invertio Software Solutions",
        role: "Full Stack Node.js Developer",
        period: "11/2023 – 12/2025",
        location: "Hyderabad",
        responsibilities: [
            "Led backend engineering for enterprise-grade web platforms including Aivaah and Anganwadi Web Systems.",
            "Designed and developed scalable RESTful APIs using Node.js and Express.js ensuring high availability and security.",
            "Implemented robust authentication systems using JWT, refresh tokens, secure cookies, and Google OAuth integrations.",
            "Optimized PostgreSQL queries and backend logic, reducing API response time by 30% and improving overall system throughput.",
            "Engineered file upload and document management workflows using Multer and AWS S3, managing over 10,000 records efficiently.",
            "Implemented background job processing using pg-boss for asynchronous workflows such as PDF generation and document tracking.",
            "Integrated caching mechanisms with Redis to enhance performance and reduce database load.",
            "Collaborated with frontend teams (React.js, Next.js) to deliver full-stack production-ready features in Agile sprints.",
            "Ensured secure role-based access control and compliance with best practices in API security and data validation.",
        ],
    },
];

export default function Experience() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="experience" className="py-24 relative w-full flex flex-col items-center bg-black overflow-hidden">
            <div className="absolute top-1/4 left-10 w-96 h-96 bg-white/3 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-mono text-white mb-4 tracking-tight">EXECUTION_PIPELINE</h2>
                    <div className="w-24 h-[2px] bg-white/50 mx-auto"></div>
                </motion.div>

                <div className="relative" ref={containerRef}>
                    <div className="absolute left-[20px] md:left-0 top-0 bottom-0 w-[2px] bg-gray-800"></div>
                    <motion.div
                        className="absolute left-[20px] md:left-0 top-0 bottom-0 w-[2px] bg-white origin-top"
                        style={{ scaleY }}
                    ></motion.div>

                    {experiences.map((exp, idx) => (
                        <div key={idx} className="relative mb-8 pl-14 md:pl-10">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="absolute w-5 h-5 bg-black border-[3px] border-white rounded-full left-[11px] md:-left-[9px] top-8 z-10"
                            ></motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="bg-[#0a0a0a] rounded-xl border border-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] hover:border-white/20 transition-all overflow-hidden cursor-pointer group"
                                onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                            >
                                <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold text-white flex items-center gap-3 tracking-tight">
                                            <FaBriefcase className="text-gray-400" /> {exp.role}
                                        </h3>
                                        <h4 className="text-lg text-gray-400 mt-2 font-mono tracking-wide">{exp.company}</h4>
                                        <div className="flex flex-wrap gap-5 mt-4 text-sm text-gray-500 font-mono tracking-wide">
                                            <span className="flex items-center gap-2 bg-[#111] px-3 py-1.5 rounded-sm border border-gray-800"><FaCalendarAlt className="text-gray-500" /> {exp.period}</span>
                                            <span className="flex items-center gap-2 bg-[#111] px-3 py-1.5 rounded-sm border border-gray-800"><FaMapMarkerAlt className="text-gray-500" /> {exp.location}</span>
                                        </div>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: expandedIndex === idx ? 180 : 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="p-4 bg-gray-900 rounded-sm text-gray-400 group-hover:bg-white/10 group-hover:text-white border border-transparent group-hover:border-white/20 transition-colors duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)] relative z-10"
                                    >
                                        <FaChevronDown />
                                    </motion.div>
                                </div>

                                <AnimatePresence>
                                    {expandedIndex === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                                        >
                                            <div className="p-6 md:p-8 pt-0 border-t border-gray-800 mt-2">
                                                <div className="text-xs text-gray-600 font-mono mb-4 flex items-center gap-2">
                                                    <FaTerminal className="text-gray-700" /> SYSTEM.LOG
                                                    <div className="flex-1 h-px bg-gray-800"></div>
                                                </div>
                                                <ul className="space-y-5">
                                                    {exp.responsibilities.map((resp, rIdx) => (
                                                        <motion.li
                                                            key={rIdx}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: rIdx * 0.05 + 0.1 }}
                                                            className="text-gray-300 flex items-start leading-relaxed text-[1.05rem]"
                                                        >
                                                            <span className="text-gray-500 mr-4 mt-1.5 text-lg leading-none font-mono">{">"}</span>
                                                            <span className="flex-1 font-light">{resp}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
