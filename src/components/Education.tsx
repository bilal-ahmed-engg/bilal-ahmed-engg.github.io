"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaLanguage, FaTerminal } from "react-icons/fa";

const education = [
    {
        degree: "Master of Engineering – Computer Science and Engineering",
        university: "Osmania University – Hyderabad"
    },
    {
        degree: "Bachelor of Engineering – Computer Science and Engineering",
        university: "Osmania University – Hyderabad"
    }
];

const languages = [
    { name: "English", proficiency: "Fluent", level: 90 },
    { name: "Hindi", proficiency: "Proficient", level: 80 }
];

export default function Education() {
    return (
        <section id="education" className="py-24 relative w-full flex flex-col items-center bg-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.02)_0%,transparent_50%)]"></div>

            <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

                {/* Education Column */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col"
                >
                    <div className="flex items-center gap-5 mb-12">
                        <div className="p-4 bg-[#111] border border-gray-800 rounded-sm">
                            <FaGraduationCap className="text-3xl text-white" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-mono text-white tracking-tight">TRAINING_DATA</h2>
                    </div>

                    <div className="space-y-6">
                        {education.map((edu, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.02, x: 5, transition: { type: "spring", stiffness: 300 } }}
                                className="bg-[#0a0a0a] p-8 rounded-xl border border-gray-800 transition-all relative overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.06)] hover:border-white/20"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-gray-800 group-hover:bg-white transition-all duration-300"></div>
                                <h3 className="text-lg font-bold text-white mb-3 tracking-wide">{edu.degree}</h3>
                                <div className="text-gray-500 font-mono text-sm flex items-center gap-2">
                                    <FaTerminal className="text-gray-700 text-xs" /> {edu.university}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Languages Column */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col"
                >
                    <div className="flex items-center gap-5 mb-12">
                        <div className="p-4 bg-[#111] border border-gray-800 rounded-sm">
                            <FaLanguage className="text-3xl text-white" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-mono text-white tracking-tight">LANGUAGES</h2>
                    </div>

                    <div className="space-y-10 bg-[#0a0a0a] p-8 md:p-12 rounded-xl border border-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                        {languages.map((lang, idx) => (
                            <div key={idx} className="w-full group">
                                <div className="flex justify-between items-end mb-4">
                                    <span className="text-xl font-bold text-white tracking-wide font-mono group-hover:text-gray-300 transition-colors">{lang.name}</span>
                                    <span className="text-gray-300 font-mono bg-black border border-gray-800 px-3 py-1 rounded-sm text-sm uppercase tracking-wider">{lang.proficiency}</span>
                                </div>
                                <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden relative shadow-[inset_0_0_5px_rgba(0,0,0,0.5)]">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${lang.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, delay: 0.5 + idx * 0.2, ease: [0.25, 1, 0.5, 1] }}
                                        className="h-full bg-white"
                                    ></motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
