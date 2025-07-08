import profile from '../assets/profile1.jpg';
import vtbridge from '../assets/vtbridge.jpg';

export default function Home() {
  return (
    <section
      id="connect"
      className="text-white min-h-screen flex items-center justify-center px-6"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(31,31,31,0.9), rgba(17,17,17,0.95)), url(${vtbridge})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="grid md:grid-cols-2 items-center gap-10 max-w-5xl">
        <img src={profile} alt="Shoumik Bisoi" className="rounded-lg" />
        <div className="border border-white/10 rounded-lg p-8 bg-[#1f1f1f]/70 backdrop-blur">
          <p className="text-sm uppercase tracking-wide">Junior at Virginia Tech</p>
          <h1 className="text-5xl font-extrabold">Shoumik<br />Bisoi</h1>
          <p className="mt-4 text-sm leading-relaxed text-gray-300">
  I’m Shoumik Bisoi, a Junior at Virginia Tech with a strong foundation in full-stack development, AI applications, and systems engineering. I’ve built and deployed real-world solutions—from web platforms for travel agencies to motion analysis tools in physical therapy—using technologies like React, Flask, and C++. I enjoy tackling complex problems, collaborating across disciplines, and continuously learning to drive impact through software. I'm currently seeking opportunities to grow as an engineer in forward-thinking teams.
</p>

          <div className="mt-6">
            <p className="uppercase text-sm">Connect with me</p>
            <div className="space-x-4 mt-2">
              <a href="https://www.linkedin.com/in/shoumik-bisoi/" className="underline">LinkedIn</a>
              <a href="https://github.com/shoumik77" className="underline">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
