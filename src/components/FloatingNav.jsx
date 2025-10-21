import { useState, useEffect } from "react";

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show nav when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const getItemStyle = (index) => {
    if (hoveredIndex === null) return {};
    
    const distance = Math.abs(hoveredIndex - index);
    
    if (distance === 0) {
      // Hovered item - scale up
      return {
        transform: 'scale(1.2)',
        zIndex: 10,
      };
    } else if (distance === 1) {
      // Adjacent items - move away slightly
      const direction = index < hoveredIndex ? -1 : 1;
      return {
        transform: `translateX(${direction * 8}px) scale(1.08)`,
      };
    } else if (distance === 2) {
      // Second-level items - move away less
      const direction = index < hoveredIndex ? -1 : 1;
      return {
        transform: `translateX(${direction * 4}px) scale(1.02)`,
      };
    }
    
    return {};
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
      }`}
    >
      <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-5 py-2 shadow-xl shadow-black/10">
        <ul className="flex items-center gap-3">
          {navItems.map((item, index) => (
            <li 
              key={item.name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                ...getItemStyle(index),
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
              className="relative"
            >
              <a
                href={item.href}
                className="text-xs font-medium text-white/70 hover:text-white transition-colors duration-200 block"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="ml-1">
            <button className="text-xs font-medium bg-white text-slate-900 px-3 py-1.5 rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-200">
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
