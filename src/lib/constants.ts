
import { Code2, Rocket, Users, Server,MapPin, Database, Brain, Globe, Bot, Zap,Mail } from 'lucide-react';
import {FaGithub,FaLinkedin ,} from 'react-icons/fa';

export const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
];

export const highlights = [
    {
        icon: Code2,
        title: 'Clean Code',
        description: 'Writing maintainable, scalable code that follows best practices',
    },
    {
        icon: Rocket,
        title: 'Fast Delivery',
        description: 'Agile development with quick iterations and timely deployments',
    },
    {
        icon: Users,
        title: 'Client-Focused',
        description: 'Understanding requirements and delivering solutions that matter',
    },
];

export const skillCategories = [
    {
        icon: Code2,
        title: 'Frontend',
        color: 'from-blue-400 to-cyan-400',
        skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'HTML5/CSS3'],
    },
    {
        icon: Server,
        title: 'Backend',
        color: 'from-green-400 to-emerald-400',
        skills: ['Node.js', 'Express', 'FastAPI', 'RESTful APIs', 'GraphQL'],
    },
    {
        icon: Database,
        title: 'Database',
        color: 'from-orange-400 to-red-400',
        skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Mongoose', 'Prisma'],
    },
    {
        icon: Brain,
        title: 'AI & Tools',
        color: 'from-purple-400 to-pink-400',
        skills: ['RAG Systems', 'LLM Integration', 'OpenAI API', 'LangChain', 'Vector DBs'],
    },
];

export const projects = [
    {
        title: 'AI-Powered RAG Chatbot',
        description: 'Intelligent chatbot using Retrieval-Augmented Generation for accurate, context-aware responses. Integrates vector databases for semantic search.',
        image: 'https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwQUklMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc0NTEyMjEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['FastAPI', 'LangChain', 'OpenAI', 'React', 'Vector DB'],
        liveUrl: '#',
        githubUrl: '#',
        gradient: 'from-purple-400 to-pink-400',
    },
    {
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard. Built for scalability and performance.',
        image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NzQ1ODU5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['Next.js', 'MongoDB', 'Stripe', 'Node.js', 'Tailwind'],
        liveUrl: '#',
        githubUrl: '#',
        gradient: 'from-blue-400 to-cyan-400',
    },
    {
        title: 'SaaS Analytics Dashboard',
        description: 'Real-time analytics platform with interactive charts, user behavior tracking, and automated reporting. Handles millions of data points.',
        image: 'https://images.unsplash.com/photo-1753715613457-63127ec40824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBkYXJrfGVufDF8fHx8MTc3NDY0MDY4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['React', 'Express', 'PostgreSQL', 'Redis', 'Chart.js'],
        liveUrl: '#',
        githubUrl: '#',
        gradient: 'from-green-400 to-emerald-400',
    },
    {
        title: 'Neural Network Visualizer',
        description: 'Interactive web app for visualizing and training neural networks in real-time. Educational tool for understanding deep learning concepts.',
        image: 'https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NzQ1OTcxNzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['React', 'TensorFlow.js', 'D3.js', 'FastAPI', 'Python'],
        liveUrl: '#',
        githubUrl: '#',
        gradient: 'from-orange-400 to-red-400',
    },
];

export const services = [
    {
        icon: Globe,
        title: 'Web Development',
        description: 'Full-stack web applications using MERN stack and Next.js. From MVP to production-ready solutions.',
        features: [
            'Responsive web apps',
            'SEO optimization',
            'Performance tuning',
            'Progressive Web Apps',
        ],
        gradient: 'from-blue-400 to-cyan-400',
    },
    {
        icon: Server,
        title: 'API Development',
        description: 'Robust and scalable backend services with FastAPI and Node.js. RESTful and GraphQL APIs.',
        features: [
            'RESTful API design',
            'GraphQL endpoints',
            'API documentation',
            'Security best practices',
        ],
        gradient: 'from-green-400 to-emerald-400',
    },
    {
        icon: Bot,
        title: 'AI Chatbot Development',
        description: 'Intelligent chatbots powered by RAG systems and LLM integration for enhanced user experiences.',
        features: [
            'Custom RAG pipelines',
            'LLM integration',
            'Context-aware responses',
            'Multi-turn conversations',
        ],
        gradient: 'from-purple-400 to-pink-400',
    },
    {
        icon: Zap,
        title: 'UI/Performance Optimization',
        description: 'Enhance existing applications with modern UI/UX and performance improvements.',
        features: [
            'Code refactoring',
            'Performance audits',
            'UI modernization',
            'Load time optimization',
        ],
        gradient: 'from-orange-400 to-red-400',
    },
];

export const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'Founder at TechStart',
        content: 'Exceptional work on our e-commerce platform. The attention to detail and technical expertise really stood out. Our conversion rates increased by 40% after launch.',
        rating: 5,
    },
    {
        name: 'Michael Rodriguez',
        role: 'CTO at DataFlow',
        content: 'Built our AI chatbot system from scratch using RAG. The solution is robust, scalable, and our customers love it. Highly recommended for AI integration projects.',
        rating: 5,
    },
    {
        name: 'Emily Watson',
        role: 'Product Manager at GrowthLabs',
        content: 'Delivered a complex analytics dashboard ahead of schedule. Clean code, great documentation, and excellent communication throughout the project.',
        rating: 5,
    },
];

export const stats = [
    { value: '15+', label: 'Projects Completed' },
    { value: '12+', label: 'Happy Clients' },
    { value: '3+', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' },
];

export const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shadrack.s@zohomail.in',
      href: 'mailto:shadrack.s@zohomail.in',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: '@Shadrack-S',
      href: 'https://github.com/Shadrack-S',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: '/in/shadrack-shibu',
      href: 'https://www.linkedin.com/in/shadrack-shibu/',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Remote / Worldwide',
      href: null,
    },
  ];