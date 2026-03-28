import { Heart } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 bg-gray-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© {currentYear} Shadrack.dev .</span>
            <span>Built with</span>
            <Heart size={16} className="text-red-400 fill-red-400" />
            <span>and Next.Js</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            Designed & Developed by <span className="text-white font-semibold">Shadrack</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
