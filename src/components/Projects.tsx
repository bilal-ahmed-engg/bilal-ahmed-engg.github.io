"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        id: "greenloop",
        title: "Greenloop",
        subtitle: "B2B Waste Management Marketplace (Saudi Arabia)",
        tech: ["Node.js", "Express.js", "PostgreSQL", "JWT", "AWS S3", "DocuSign API", "Algolia Search", "Worker Threads", "pg-boss", "Redis"],
        details: [
            "Architected and developed scalable backend infrastructure supporting Buyer, Seller, and Admin multi-role workflows.",
            "Built secure authentication and authorization layers using JWT with refresh token strategy.",
            "Integrated Algolia Search delivering sub-2 second search performance across 10,000+ marketplace listings.",
            "Implemented non-blocking PDF generation from dynamic HTML templates using Worker Threads to enhance concurrency.",
            "Designed background job queue processing using pg-boss for document workflows, DocuSign integration, and asynchronous tasks.",
            "Integrated DocuSign webhooks for real-time status updates and AWS S3 for secure document storage.",
            "Leveraged Redis caching to improve marketplace load time and manage realtime chat session state.",
        ],
        theme: "neon",
    },
    {
        id: "aivaah",
        title: "Aivaah",
        subtitle: "EdTech Cloud Learning Platform",
        tech: ["React.js", "Next.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "Web Workers", "Multer", "Google APIs"],
        details: [
            "Designed and developed a full-stack cloud platform delivering training in Docs, Slides, AI, IoT, HTML/CSS, and Python.",
            "Implemented secure cookie-based and JWT authentication systems.",
            "Integrated Google APIs for document editing and developed custom cloud-saving workflows in block-coding modules.",
            "Improved compute-intensive task performance by 40% using Web Workers for parallel processing.",
            "Built scalable backend APIs with structured database design in PostgreSQL.",
        ],
        theme: "matrix",
    },
    {
        id: "anganwadi",
        title: "Anganwadi Monitoring",
        subtitle: "UP Government Monitoring System",
        tech: ["React.js", "Express.js", "Node.js", "Firebase", "BLE", "PostgreSQL", "Tailwind CSS"],
        details: [
            "Developed backend services for structured health data ingestion, validation, and storage.",
            "Implemented JWT-based authentication and RBAC for secure administrative dashboards.",
            "Contributed to monitoring dashboards tracking health metrics across multiple Anganwadi centers.",
            "Collaborated with mobile teams to enable BLE-based device integration for real-time weight tracking.",
            "Focused on responsive UI development and usability optimization for government stakeholders.",
        ],
        theme: "purple",
    },
];

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [scrollDistance, setScrollDistance] = useState(0);

    // Dynamically compute how far to slide so last card stops correctly
    useEffect(() => {
        const calcDistance = () => {
            if (trackRef.current) {
                const trackWidth = trackRef.current.scrollWidth;
                const viewW = window.innerWidth;
                // slide until right edge of last card hits right edge of viewport
                setScrollDistance(Math.max(0, trackWidth - viewW));
            }
        };
        calcDistance();
        window.addEventListener("resize", calcDistance);
        return () => window.removeEventListener("resize", calcDistance);
    }, []);

    const { scrollYProgress } = useScroll({ target: sectionRef });
    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

    const [selectedId, setSelectedId] = useState<string | null>(null);
    const selectedProject = projects.find((p) => p.id === selectedId);

    return (
        <section id="projects" ref={sectionRef} className="relative bg-black" style={{ height: `${100 + projects.length * 80}vh` }}>
            <div className="sticky top-0 h-screen flex flex-col overflow-hidden pt-20 pb-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 shrink-0 px-6"
                >
                    <p className="text-gray-600 font-mono text-xs tracking-widest uppercase mb-2">// selected work</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Projects</h2>
                    <div className="w-16 h-[2px] bg-white/30 mx-auto mt-4"></div>
                </motion.div>

                {/* Horizontal scroll track */}
                <div className="flex-1 flex items-center overflow-hidden">
                    <motion.div
                        ref={trackRef}
                        style={{ x }}
                        className="flex gap-6 md:gap-10 items-stretch flex-nowrap shrink-0 pl-6 md:pl-20 pr-6 md:pr-20"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                layoutId={`project-container-${project.id}`}
                                key={project.id}
                                onClick={() => setSelectedId(project.id)}
                                className="w-[82vw] md:w-[560px] shrink-0 cursor-pointer group"
                                style={{ minHeight: "420px" }}
                            >
                                <div className="h-full bg-[#0a0a0a] p-8 md:p-10 rounded-2xl flex flex-col justify-between border border-gray-800 hover:border-white/20 transition-all duration-400 relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)]">

                                    {/* Top accent line */}
                                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/50 transition-all duration-500"></div>

                                    {/* Corner index */}
                                    <div className="absolute top-6 right-6 text-gray-700 font-mono text-xs">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <div>
                                        <motion.h3
                                            layoutId={`title-${project.id}`}
                                            className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight"
                                        >
                                            {project.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`subtitle-${project.id}`}
                                            className="text-gray-500 mb-6 text-base leading-relaxed"
                                        >
                                            {project.subtitle}
                                        </motion.p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.slice(0, 4).map((t, idx) => (
                                                <span key={idx} className="text-xs px-3 py-1.5 bg-black border border-gray-800 rounded-full text-gray-400 font-mono">
                                                    {t}
                                                </span>
                                            ))}
                                            {project.tech.length > 4 && (
                                                <span className="text-xs px-3 py-1.5 bg-black border border-gray-800 rounded-full text-gray-600 font-mono">
                                                    +{project.tech.length - 4} more
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-6 border-t border-gray-900">
                                        <span className="text-gray-600 font-mono text-xs uppercase tracking-widest">View Details</span>
                                        <div className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center text-gray-500 group-hover:border-white/30 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                                            <FaExternalLinkAlt className="text-xs" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll hint */}
                <div className="shrink-0 text-center pb-2">
                    <p className="text-gray-700 font-mono text-xs tracking-widest">SCROLL TO NAVIGATE →</p>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedId && selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-start justify-center p-4 md:p-10 overflow-y-auto"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            layoutId={`project-container-${selectedProject.id}`}
                            className="bg-[#0a0a0a] w-full max-w-3xl rounded-2xl border border-gray-800 relative mt-4 mb-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-8 md:p-12">
                                {/* Close button */}
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center bg-gray-900 border border-gray-700 hover:border-white/30 hover:text-white rounded-lg text-gray-500 transition-all z-10"
                                >
                                    <FaTimes className="text-sm" />
                                </button>

                                {/* Header */}
                                <div className="pr-12 mb-8">
                                    <motion.h2
                                        layoutId={`title-${selectedProject.id}`}
                                        className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2"
                                    >
                                        {selectedProject.title}
                                    </motion.h2>
                                    <motion.p
                                        layoutId={`subtitle-${selectedProject.id}`}
                                        className="text-gray-500 text-lg font-mono"
                                    >
                                        {selectedProject.subtitle}
                                    </motion.p>
                                </div>

                                {/* Tech stack */}
                                <div className="mb-8 p-6 bg-black border border-gray-900 rounded-xl">
                                    <h4 className="text-gray-600 font-mono mb-3 uppercase tracking-widest text-xs flex items-center gap-3">
                                        Tech Stack
                                        <div className="h-px bg-gray-900 flex-1"></div>
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((t, idx) => (
                                            <span key={idx} className="px-3 py-1.5 bg-[#111] border border-gray-800 rounded-full text-gray-300 font-mono text-sm">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Details */}
                                <div>
                                    <h4 className="text-gray-600 font-mono mb-5 uppercase tracking-widest text-xs flex items-center gap-3">
                                        Project Details
                                        <div className="h-px bg-gray-900 flex-1"></div>
                                    </h4>
                                    <ul className="space-y-4">
                                        {selectedProject.details.map((detail, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.08 * idx + 0.15 }}
                                                className="text-gray-300 flex items-start leading-relaxed"
                                            >
                                                <span className="text-gray-600 mr-3 mt-1 shrink-0">—</span>
                                                <span className="font-light">{detail}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
