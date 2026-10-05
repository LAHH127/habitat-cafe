import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Menu from './components/Menu';
import Featured from './components/Featured';
import Beverages from './components/Beverages';
import Architecture from './components/Architecture';
import Gallery from './components/Gallery';
import CityView from './components/CityView';
import Reviews from './components/Reviews';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ivory font-sans text-charcoal antialiased">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Experience />
        <Menu />
        <Featured />
        <Beverages />
        <Architecture />
        <Gallery />
        <CityView />
        <Reviews />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}
