export default function Hero() {
  return (
    <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl px-6 mt-20">
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-8 leading-[1.1]">
          We build, invest, and<br />grow with purpose.
        </h1>
        <p className="text-lg md:text-xl font-medium text-gray-200 max-w-2xl mx-auto leading-relaxed">
          A multi-sector business collective founded by three experienced entrepreneurs.
        </p>
      </div>
    </div>
  );
}
