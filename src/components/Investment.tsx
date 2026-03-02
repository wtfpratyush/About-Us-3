import { Target, Crosshair, TrendingUp, Shield } from 'lucide-react';

export default function Investment() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div className="lg:sticky lg:top-32">
          <div className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-6">• INVESTMENT THESIS</div>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-semibold mb-12 leading-[1.1]">
            Acquisition Strategy
          </h2>
          
          <div className="relative border-l-2 border-gray-200 ml-3 space-y-12 pb-4">
            <div className="relative pl-10">
              <div className="absolute w-6 h-6 bg-gray-900 rounded-full -left-[13px] top-0 border-4 border-[#f7f7f5]"></div>
              <h4 className="text-2xl font-semibold mb-3 text-gray-900">Cross-border Operations</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Canada, India, UAE with multi-industry expertise backed by 3 successful entrepreneurs.</p>
            </div>
            
            <div className="relative pl-10">
              <div className="absolute w-6 h-6 bg-gray-300 rounded-full -left-[13px] top-0 border-4 border-[#f7f7f5]"></div>
              <h4 className="text-2xl font-semibold mb-3 text-gray-900">Proven Track Record</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Entrepreneur-driven investment approach in building and scaling companies.</p>
            </div>
            
            <div className="relative pl-10">
              <div className="absolute w-6 h-6 bg-gray-300 rounded-full -left-[13px] top-0 border-4 border-[#f7f7f5]"></div>
              <h4 className="text-2xl font-semibold mb-3 text-gray-900">In-house Capabilities</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Comprehensive expertise in finance, development, marketing, and operations.</p>
            </div>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 sm:col-span-2 group hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
              <Target className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h4 className="text-3xl font-semibold mb-4">Objective</h4>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">Identify and acquire scalable, sustainable, and high-potential businesses.</p>
          </div>
          
          <div className="bg-[#121216] text-white p-8 md:p-10 rounded-[2rem] group hover:-translate-y-1 transition-transform duration-300">
            <Crosshair className="w-10 h-10 mb-8 text-gray-400 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
            <h4 className="text-2xl font-semibold mb-4">Focus Areas</h4>
            <p className="text-gray-400 leading-relaxed">F&B, FMCG, Fitness, Consumer Brands, Tech & Marketing.</p>
          </div>
          
          <div className="bg-[#e8e8e5] p-8 md:p-10 rounded-[2rem] group hover:-translate-y-1 transition-transform duration-300">
            <TrendingUp className="w-10 h-10 mb-8 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" strokeWidth={1.5} />
            <h4 className="text-2xl font-semibold mb-4">Approach</h4>
            <p className="text-gray-600 leading-relaxed">Strategic acquisition, operational restructuring, marketing and digital scaling.</p>
          </div>
          
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 sm:col-span-2 group hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
              <Shield className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h4 className="text-3xl font-semibold mb-4">Future Vision</h4>
            <p className="text-gray-600 text-lg leading-relaxed">Establish Thrive as a private investment house for mid-sized businesses.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
