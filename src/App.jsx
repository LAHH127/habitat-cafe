import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Featured from './components/Featured';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
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
        <Featured />
        <Menu />
        <Gallery />
        <Reviews />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}
