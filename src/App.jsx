import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Connect from './components/Connect';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <Projects />
      <Experience />
      <Connect />
    </div>
  );
}

export default App;
