export default function Connect() {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return (
      <section id="connect" className="bg-[#1f1f1f] text-white py-40 px-6 h-[100vh] flex items-center justify-center">
        <div className="text-center font-mono space-y-6">
          <div className="flex justify-center items-center space-x-2 text-2xl md:text-4xl">
            <span className="text-blue-400">function</span>
            <span className="text-white">connectWithMe</span>
            <span className="text-white">()</span>
            <span className="text-white">{"{"}</span>
          </div>
  
          <div className="text-white text-lg md:text-xl">// Let’s build something together</div>
  
          <button
            onClick={scrollToTop}
            className="mt-4 px-6 py-2 border border-white text-white font-semibold rounded hover:bg-white hover:text-black transition"
          >
            return to top();
          </button>
  
          <div className="text-white text-2xl md:text-4xl">{"}"}</div>
        </div>
      </section>
    );
  }
  