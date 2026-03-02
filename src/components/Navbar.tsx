import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 text-white">
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-[2.5px] border-white flex items-center justify-center font-bold text-2xl">T</div>
          <span className="text-[10px] font-bold tracking-[0.2em] mt-1">THRIVE</span>
        </div>
      </div>
      
      <div className="hidden lg:flex items-center gap-10 text-xs font-bold tracking-widest uppercase">
        <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
        <a href="#philosophy" className="hover:text-gray-300 transition-colors">Philosophy</a>
        <a href="#portfolio" className="hover:text-gray-300 transition-colors">Portfolio</a>
        <a href="#partners" className="hover:text-gray-300 transition-colors">Partners</a>
        <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
      </div>

      <button className="hidden md:flex bg-white text-black px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase items-center gap-2 hover:bg-gray-100 transition-colors">
        Get Consultation <ArrowRight className="w-4 h-4" />
      </button>
    </nav>
  );
}
