import { Building, Coffee, Car, Dumbbell, Briefcase, MonitorSmartphone } from 'lucide-react';

const portfolioItems = [
  {
    title: "Real Estate & Development",
    desc: "SKS Developments (Canada) 200+ homes built.",
    icon: Building,
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Food & Beverage",
    desc: "Training Day Café.",
    icon: Coffee,
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Automobiles",
    desc: "DreamRide Rentals",
    icon: Car,
    img: "https://images.unsplash.com/photo-1503376760367-11ea8f6008eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Fitness & Lifestyle",
    desc: "Vault by Virat Kohli.",
    icon: Dumbbell,
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Consultancy & Financial Advisory",
    desc: "Thrive Financial Advisor LLP.",
    icon: Briefcase,
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Marketing & Technology",
    desc: "That's Creative",
    icon: MonitorSmartphone,
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Portfolio() {
  return (
    <section className="py-24 md:py-32 bg-[#121216] text-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-16">• THRIVE PORTFOLIO OVERVIEW</div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {portfolioItems.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-56 md:h-64 rounded-[1.5rem] overflow-hidden mb-6 bg-white/5">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-start gap-4">
                <item.icon className="w-6 h-6 mt-1 text-gray-400 shrink-0" />
                <div>
                  <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
