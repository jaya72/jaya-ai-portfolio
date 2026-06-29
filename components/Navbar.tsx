/*export default function Navbar() {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold">Navbar Section</h2>
      </section>
    );
  }*/
    export default function Navbar() {
        return (
          <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
              <h1 className="font-bold text-xl">
                JM
              </h1>
      
              <div className="hidden md:flex gap-8 text-sm text-gray-300">
                <a href="#about" className="hover:text-white">
                  About
                </a>
      
                <a href="#journey" className="hover:text-white">
                  Journey
                </a>

                <a href="#skills" className="hover:text-white">
                Skills
                </a>  
      
                <a href="#projects" className="hover:text-white">
                  Projects
                </a>
      
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        );
      }