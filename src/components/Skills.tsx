'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { skillCategories } from '../lib/constants'

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="skills" ref={ref} className="py-32 relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Technical Skills
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
                    <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
                        A comprehensive toolkit for building modern, scalable applications
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="group"
                        >
                            <div className="h-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                {/* Icon */}
                                <div className={`inline-flex p-4 bg-gradient-to-br ${category.color} bg-opacity-10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <category.icon size={32} className={`bg-gradient-to-br ${category.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }} />
                                </div>

                                {/* Title */}
                                <h3 className={`text-xl font-bold mb-4 bg-gradient-to-br ${category.color} bg-clip-text text-transparent`}>
                                    {category.title}
                                </h3>

                                {/* Skills List */}
                                <div className="space-y-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                            }}
                                            className="flex items-center gap-2 text-gray-300"
                                        >
                                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`} />
                                            <span className="text-sm">{skill}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Tools */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
                >
                    <h4 className="text-lg font-semibold mb-4 text-center">Also Experienced With</h4>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            'Git',
                            'Docker',
                            'AWS',
                            'Vercel',
                            'Jest',
                            'Webpack',
                            'Vite',
                            'Postman',
                            'Figma',
                        ].map((tool, index) => (
                            <motion.span
                                key={tool}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                {tool}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
