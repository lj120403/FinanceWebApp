import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Analytics from './components/Analytics';
import Newsletters from './components/Newsletters';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletters />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
