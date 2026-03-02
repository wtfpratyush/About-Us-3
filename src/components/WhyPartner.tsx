import { CheckCircle2, Globe, Users, Building2 } from 'lucide-react';

export default function WhyPartner() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto" id="partners">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div>
          <div className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-6">• OUR STRENGTHS</div>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-semibold mb-12 leading-[1.1]">
            Why Partner with Thrive
          </h2>
          
          <div className="space-y-8">
            {[
              "Multi-industry expertise backed by 3 successful entrepreneurs.",
              "Cross-border operations (Canada, India, UAE).",
              "Proven record in building and scaling companies.",
              "Entrepreneur-driven investment approach.",
              "In-house capabilities: finance, development, marketing, operations.",
              "Long-term, hands-on investment approach with entrepreneurial agility and institutional discipline."
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-5">
                <CheckCircle2 className="w-7 h-7 text-gray-400 shrink-0 mt-0.5" />
                <p className="text-xl text-gray-800 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-sm border border-gray-100">
          <div className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-6">• FUTURE VISION</div>
          <h3 className="text-3xl md:text-4xl font-semibold mb-12 leading-[1.2]">
            Building a global network of cross-sector brands.
          </h3>
          
          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <Globe className="w-10 h-10 text-gray-400 shrink-0" strokeWidth={1.5} />
              <p className="text-gray-600 text-lg leading-relaxed">Expand Thrive's portfolio across UAE, and North America.</p>
            </div>
            <div className="flex items-start gap-6">
              <Users className="w-10 h-10 text-gray-400 shrink-0" strokeWidth={1.5} />
              <p className="text-gray-600 text-lg leading-relaxed">Focus on sustainability, innovation, and community-driven impact.</p>
            </div>
            <div className="flex items-start gap-6">
              <Building2 className="w-10 h-10 text-gray-400 shrink-0" strokeWidth={1.5} />
              <p className="text-gray-600 text-lg leading-relaxed">Establish Thrive as a private investment house for mid-sized businesses.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
