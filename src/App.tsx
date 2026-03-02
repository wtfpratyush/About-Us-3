import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Empowering from './components/Empowering';
import Philosophy from './components/Philosophy';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import WhyPartner from './components/WhyPartner';
import Investment from './components/Investment';
import Join from './components/Join';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-gray-900 font-sans selection:bg-gray-900 selection:text-white">
      <Navbar />
      <Hero />
      <Empowering />
      <Philosophy />
      <About />
      <Portfolio />
      <Team />
      <WhyPartner />
      <Investment />
      <Join />
      <Footer />
    </div>
  );
}
