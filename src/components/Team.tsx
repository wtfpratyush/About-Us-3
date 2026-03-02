import { ArrowRight } from 'lucide-react';

const team = [
  {
    name: "Mr. Shiv Garg",
    role: "FOUNDER, SKS DEVELOPMENTS",
    desc: "Built over 200+ premium homes. Owns a successful retail chain. Investor in 10+ companies across real estate, retail, and startups. Expertise: property development, business expansion, and strategic investment.",
    img: "/team/shiv-garg.png"
  },
  {
    name: "Mr. Sunny Goel",
    role: "SEASONED ENTREPRENEUR",
    desc: "Deep expertise in finance, infrastructure, wellness, and advisory services. SDSG & Co., Aditi Sales, Vault by Virat Kohli, Thrive Consultants. Expertise: finance, structured growth, business strategy, and cross-border advisory.",
    img: "/team/sunny-goel.png"
  },
  {
    name: "Mr. Shikhar Bathla",
    role: "FOUNDER, THAT'S CREATIVE",
    desc: "Branding & marketing agency. Co-Founder, Unlock Velocity. Director, Herbocleanz Pvt Ltd. Thrive Consultants. Expertise: marketing systems, digital growth, and brand development.",
    img: "/team/shikhar-bathla.png"
  }
];

export default function Team() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-20">
        <div className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-6">• FOUNDING PARTNERS</div>
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold max-w-4xl leading-[1.1]">
          Get to know the team that's as passionate about your project as you are.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
        {team.map((member, idx) => (
          <div key={idx} className="flex flex-col group">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 bg-[#e8e8e5]">
              <img 
                src={member.img} 
                alt={member.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-3xl font-semibold mb-2">{member.name}</h3>
            <div className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-6">{member.role}</div>
            <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
              {member.desc}
            </p>
            <button className="flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase hover:text-gray-600 transition-colors w-fit">
              VIEW DETAILS <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
