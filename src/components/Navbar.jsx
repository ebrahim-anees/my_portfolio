import { useEffect, useState, useRef } from 'react';
import { handleClickBtn } from '../utils/index.js';
import { navLinks } from '../data/index.js';
function Navbar({ sectionRefs }) {
  const scrollToTheTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll);

    // Check once on mount, so initial scroll position is captured
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      ref={navbarRef}
      className={`navbar ${isScrolled ? 'scrolled' : 'non-scrolled'}`}
    >
      <button className="logo cursor-pointer" onClick={scrollToTheTop}>
        Ebrahim Anees | docode
      </button>
      <nav className="desktop">
        <ul>
          {navLinks.map((navLink) => (
            <li key={navLink} className="group">
              <button
                className="cursor-pointer"
                onClick={() => handleClickBtn(sectionRefs[navLink])}
              >
                <span>{navLink[0].toUpperCase() + navLink.slice(1)}</span>
                <span className="underline" />
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="contact-btn group"
        onClick={() => handleClickBtn(sectionRefs.contact)}
      >
        <span className="flex items-center justify-center flex-col gap-2 xs:flex-row">
          <span>Contact</span>
          <span className="flex">
            <span className="letter-m">M</span>
            <span className="ml-[1px]">e</span>
          </span>
        </span>
        <span className="dot absolute right-3 top-0 animate-ping text-violet text-xs">
          •
        </span>
      </button>
    </header>
  );
}

export default Navbar;
