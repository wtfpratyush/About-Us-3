export default function Empowering() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold mb-8 leading-[1.1]">
            Empowering growth through strategic investments and business development.
          </h2>
          <p className="text-gray-600 mb-12 text-lg leading-relaxed">
            Introduction to Thrive Group — To acquire, scale, and sustain brands that deliver value, impact, and innovation. We operate on the core values of Integrity, Collaboration, Growth, and Global Perspective.
          </p>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="bg-[#f0f0ed] p-8 rounded-3xl">
              <div className="text-5xl font-light mb-3 text-gray-900">200+</div>
              <div className="text-sm text-gray-600 font-medium tracking-wide">Premium homes built</div>
            </div>
            <div className="bg-[#f0f0ed] p-8 rounded-3xl">
              <div className="text-5xl font-light mb-3 text-gray-900">10+</div>
              <div className="text-sm text-gray-600 font-medium tracking-wide">Companies invested</div>
            </div>
            <div className="bg-[#f0f0ed] p-8 rounded-3xl">
              <div className="text-5xl font-light mb-3 text-gray-900">4</div>
              <div className="text-sm text-gray-600 font-medium tracking-wide">Global locations</div>
            </div>
            <div className="bg-[#f0f0ed] p-8 rounded-3xl">
              <div className="text-5xl font-light mb-3 text-gray-900">3</div>
              <div className="text-sm text-gray-600 font-medium tracking-wide">Dynamic founders</div>
            </div>
          </div>
        </div>
        
        <div className="relative h-[600px] lg:h-[800px] rounded-[2.5rem] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" 
            alt="Team high five" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
