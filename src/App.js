import './App.css';
import End from './components/End';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Testimonials1 from './components/Testimonials1';
import Testimonials2 from './components/Testimonials2';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Feature />
      <Testimonials1 />
      <Testimonials2 />
      <End />
      <Footer />
    </>
  );
}

export default App;
