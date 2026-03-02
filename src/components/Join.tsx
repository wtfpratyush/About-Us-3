export default function Join() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[90rem] mx-auto bg-[#f0f0ed] rounded-[4rem] p-12 md:p-24 lg:p-32 text-center">
        <div className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-8">• WHY PARTNER WITH THRIVE</div>
        <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-semibold max-w-5xl mx-auto mb-24 leading-[1.1]">
          Join a collective where ideas matter, growth is real, and partnerships thrive.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm">
            <h4 className="text-2xl font-semibold mb-6">Dynamic Leadership</h4>
            <p className="text-gray-600 text-base leading-relaxed">Three dynamic founders with operational business success and a proven track record of building profitable brands.</p>
          </div>
          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm">
            <h4 className="text-2xl font-semibold mb-6">Global Network</h4>
            <p className="text-gray-600 text-base leading-relaxed">Multi-sector, multi-country network. Expand Thrive's portfolio across UAE, and North America.</p>
          </div>
          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm">
            <h4 className="text-2xl font-semibold mb-6">Agile & Disciplined</h4>
            <p className="text-gray-600 text-base leading-relaxed">Entrepreneurial agility combined with institutional discipline. Long-term, hands-on investment approach.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
