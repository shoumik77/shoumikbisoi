import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Activities from './components/Activities';


function App() {
  return (
    <div className="font-sans bg-[#1f1f1f] text-white">
      <Navbar />
      <Home />
      <Projects />
      <Experience />
      <Activities />
    </div>
  );
}

export default App;
