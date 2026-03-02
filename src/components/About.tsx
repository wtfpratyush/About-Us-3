export default function About() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto" id="about">
      <div className="mb-16">
        <div className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-6">• ABOUT THRIVE GROUP</div>
        <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-semibold max-w-4xl leading-[1.1]">
          A multi-sector business collective operating across the globe..
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div className="relative h-[600px] lg:h-[800px] rounded-[2.5rem] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
            alt="Team working" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="pt-8 lg:pt-16">
          <blockquote className="text-3xl md:text-4xl font-medium italic mb-12 leading-[1.3] text-gray-900">
            "Operations and investments across India, UAE, US and Canada. Diverse portfolio includes: Real Estate Development, F&B, FMCG, Fitness, Consultancy, Marketing, Financial Advisory."
          </blockquote>
          
          <div className="flex items-center gap-5 mb-12">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
              alt="Mr. Shiv Garg" 
              className="w-14 h-14 rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="font-semibold text-xl mb-1">Mr. Shiv Garg</div>
              <div className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase">CEO & FOUNDER, THRIVE</div>
            </div>
          </div>
          
          <div className="space-y-8 text-gray-600 text-lg leading-relaxed">
            <p>
              Our agency combines experience, integrity, and modern corporate tools to help you make confident business decisions. We specialize in mainland, free zone, and offshore company formations across major global hubs.
            </p>
            <p>
              Every client gets personalized attention, verified property options, and honest advice from our dedicated consultants. Whether you're searching for your dream office, planning to scale, or exploring new market entry, we're here to guide you with clarity, trust, and proven expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
