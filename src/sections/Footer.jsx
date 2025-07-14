import React from 'react';
import { socialImgs } from '../data';

function Footer() {
  const scrollToTheTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <button
            onClick={scrollToTheTop}
            className="font-medium hover:font-semibold cursor-pointer w-fit px-3 whitespace-nowrap text-base md:text-sm lg:text-base text-white hover:text-violet transition-all duration-300 ease-in-out"
          >
            Portfolio | Docode
          </button>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a
              key={img.name}
              className="icon group transition duration-300"
              href={img.pathUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img.icon className="text-xl group-hover:scale-110 transition-transform duration-300 ease-out group-hover:text-violet" />
            </a>
          ))}
        </div>
        <div className="text-center text-base md:text-sm lg:text-base text-white/70 md:whitespace-nowrap">
          <span>
            ©{new Date().getFullYear()} |{' '}
            <a
              href="https://github.com/ebrahim-anees"
              className="font-semibold text-white hover:text-violet transition-all duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ebrahim Anees
            </a>{' '}
            | All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
