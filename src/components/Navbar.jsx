export default function Navbar() {
    return (
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/60 to-transparent text-white">
        <div className="flex justify-center gap-10 py-6 uppercase text-sm tracking-widest">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
          <a href="#activities" className="hover:text-blue-400 transition">Activities</a>
        </div>
      </nav>
    );
  }
  