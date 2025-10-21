import "./App.css";
import { FloatingNav } from "./components/FloatingNav";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      {/* Floating Navigation */}
      <FloatingNav />

      {/* Aurora Background - z-index: 0 */}
      <div className="aurora-bg">
        <div className="aurora-grain"></div>
        <div className="aurora-particle aurora-particle-1"></div>
        <div className="aurora-particle aurora-particle-2"></div>
        <div className="aurora-particle aurora-particle-3"></div>
        <div className="aurora-silk"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white max-w-3xl mb-4 leading-[1.15] tracking-[-0.025em]">
            This is an incredible heading for your wonderful landing page
          </h1>
          <p className="font-body text-sm md:text-base lg:text-base text-white/30 max-w-xl leading-relaxed tracking-[-0.01em]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* Awards Section */}
        <div className="pb-16">
          <p className="text-white/30 text-xs text-center mb-5 tracking-wider">
            Track everything. Ask anything.
          </p>
          <div className="flex justify-center items-center gap-16">
            {/* Forbes Award */}
            <div className="text-center px-2">
              <div className="text-white/50 font-serif text-lg mb-0.5 tracking-tight">
                Forbes
              </div>
              <div className="text-white/30 text-[10px] uppercase tracking-[0.15em] font-mono leading-tight">
                Best XYZ
              </div>
              <div className="text-white/30 text-[10px] uppercase tracking-[0.15em] font-mono leading-tight">
                App 2025
              </div>
            </div>

            {/* Fast Company Award */}
            <div className="text-center px-2">
              <div className="text-white/50 font-serif text-lg mb-0.5 tracking-tight">
                FAST⊙MPANY
              </div>
              <div className="text-white/30 text-[10px] uppercase tracking-[0.15em] font-mono leading-tight">
                Most Innovative
              </div>
              <div className="text-white/30 text-[10px] uppercase tracking-[0.15em] font-mono leading-tight">
                Companies 2024
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
    </>
  );
}

export default App;
