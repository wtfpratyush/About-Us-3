import { Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#121216] text-white pt-32 pb-16 px-6 md:px-12" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 mb-32">
          <div>
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold mb-8 leading-[1.1]">Let's Thrive Together.</h2>
            <p className="text-gray-400 text-xl md:text-2xl mb-12">We build, invest, and grow with purpose.</p>
            <button className="bg-white text-black px-10 py-4 rounded-full text-sm font-bold tracking-wider uppercase hover:bg-gray-200 transition-colors">
              Contact Us
            </button>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-12 lg:gap-16 pt-4">
            <div>
              <div className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-8">• LOCATIONS</div>
              <ul className="space-y-5 text-gray-300 text-lg">
                <li>India</li>
                <li>UAE</li>
                <li>Canada</li>
                <li>US</li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-8">• CONTACT</div>
              <a href="mailto:info@thriveconsultants.ae" className="text-gray-300 hover:text-white transition-colors block mb-10 text-lg">
                info@thriveconsultants.ae
              </a>
              <div className="flex gap-5">
                <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/10 text-sm text-gray-500">
          <div className="flex items-center gap-4 mb-8 md:mb-0">
            <div className="w-10 h-10 border-[2.5px] border-white/20 flex items-center justify-center font-bold text-2xl text-white">T</div>
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-[0.2em] text-xl leading-none">THRIVE</span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase mt-1">GROUP</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-xs font-bold tracking-widest uppercase">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
            <span>© Thrive Group 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
