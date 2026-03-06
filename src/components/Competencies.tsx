"use client";

import { motion } from "framer-motion";

const categories = [
    {
        title: "Agentic & GenAI",
        skills: ["OpenAI API", "Generative AI Integration", "AI-Based Development", "Agentic AI", "Prompt Engineering", "Autonomous Agents"],
        highlight: true,
    },
    {
        title: "System Design",
        skills: ["Distributed Systems", "Microservices", "RESTful APIs", "Middleware Architecture", "Scalable Architecture"],
        highlight: false,
    },
    {
        title: "Backend Development",
        skills: ["Node.js", "Express.js", "JWT / OAuth", "Background Jobs (pg-boss)", "Worker Threads"],
        highlight: false,
    },
    {
        title: "Frontend Development",
        skills: ["React.js", "Next.js", "Redux", "Tailwind CSS"],
        highlight: false,
    },
    {
        title: "Databases",
        skills: ["PostgreSQL", "MongoDB", "Redis"],
        highlight: false,
    },
    {
        title: "Cloud & DevOps",
        skills: ["AWS EC2", "AWS S3", "Docker"],
        highlight: false,
    },
    {
        title: "API & Integrations",
        skills: ["Google APIs", "DocuSign API", "Algolia Search"],
        highlight: false,
    },
    {
        title: "Programming",
        skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
        highlight: false,
    },
];

export default function Competencies() {
    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.08 } },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="skills" className="py-24 relative w-full bg-black overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">CORE_COMPETENCIES</h2>
                    <div className="w-24 h-[2px] bg-white/40 mx-auto"></div>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
                            className={`bg-[#0a0a0a] p-8 md:p-10 rounded-xl border transition-all duration-300 relative group hover:shadow-[0_0_30px_rgba(255,255,255,0.06)]
                                ${category.highlight
                                    ? "border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                                    : "border-gray-800 hover:border-white/15"
                                }`}
                        >
                            {category.highlight && (
                                <div className="absolute top-3 right-3 text-[9px] font-mono text-gray-600 uppercase tracking-widest border border-gray-800 px-2 py-0.5 rounded-sm">AI</div>
                            )}
                            <h3 className="text-xl font-mono font-bold mb-6 text-white tracking-wide uppercase flex items-center gap-2">
                                <span className="opacity-30 text-gray-500 text-sm">##</span> {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-2 relative z-10">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-4 py-2 text-sm font-mono bg-black border border-gray-800 rounded-sm text-gray-400 hover:text-white hover:border-white/30 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
