import { Building2, TrendingUp, Megaphone } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto" id="philosophy">
      <div className="text-center mb-20">
        <div className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-6">• OUR PHILOSOPHY</div>
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold max-w-5xl mx-auto leading-[1.1]">
          Thrive Group is built on entrepreneur-led growth, combining strategy, execution, and investment.
        </h2>
      </div>

      <div className="bg-[#121216] text-white rounded-[2.5rem] p-10 md:p-16 lg:p-24 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">A balanced, synergistic ecosystem.</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Each stakeholder contributes distinct expertise — real estate, finance, and marketing — to create a balanced, synergistic ecosystem. Focus on sustainability, scalability, and long-term partnerships.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-white/5 border border-white/10 p-5 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-[10px]">✓</div>
              <span className="font-medium text-lg">Real Estate</span>
            </div>
            <Building2 className="w-6 h-6 text-gray-400" />
          </div>
          <div className="flex items-center justify-between bg-white/5 border border-white/10 p-5 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-[10px]">✓</div>
              <span className="font-medium text-lg">Finance</span>
            </div>
            <TrendingUp className="w-6 h-6 text-gray-400" />
          </div>
          <div className="flex items-center justify-between bg-white/5 border border-white/10 p-5 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-[10px]">✓</div>
              <span className="font-medium text-lg">Marketing</span>
            </div>
            <Megaphone className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
