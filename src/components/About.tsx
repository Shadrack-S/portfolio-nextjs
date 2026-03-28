'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { highlights } from '../lib/constants'



export default function About() {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true, margin: '-100px' });


    return (
        <section id="about" ref={ref} className="py-32 relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                            I'm a full-stack developer passionate about building{' '}
                            <span className="text-blue-400 font-semibold">
                                high-performance web applications
                            </span>{' '}
                            that solve real-world problems. With expertise in the MERN stack and modern frameworks like Next.js, I create seamless user experiences backed by robust architectures.
                        </p>
                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                            My recent focus has been on integrating{' '}
                            <span className="text-purple-400 font-semibold">
                                Generative AI and RAG systems
                            </span>{' '}
                            into web applications, helping businesses leverage cutting-edge AI technology to enhance their products and services.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I thrive on solving complex challenges and turning innovative ideas into scalable, production-ready solutions that drive business growth.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-4"
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                        <item.icon size={24} className="text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                        <p className="text-gray-400">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
