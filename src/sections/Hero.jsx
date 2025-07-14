import { useGSAP } from '@gsap/react';
import Button from '../components/Button';
import { useInView } from 'react-intersection-observer';
import { words } from '../data';
import gsap from 'gsap';
import ComputerModel from '../components/models/hero/ComputerModel';

export default function Hero({ scrollToRef }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useGSAP(() => {
    gsap.fromTo(
      '.hero-text h1 .header-line',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.inOut',
      }
    );
  });
  return (
    <section ref={ref} id="hero" className="hero relative overflow-hidden">
      <div className="hero-layout">
        {/*  //, LEFT SIDE */}
        <header className="flex justify-center md:w-full w-screen md:px-20 px-5 lg:flex-1 mt-16 md:mt-[-60px] lg:mt-10 xl:mt-0">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <div className="flex flex-col items-center">
                <div className="rounded-violent" />
                <div className="w-1 h-full violet-gradient" />
              </div>
              <h1>
                <div className="header-line">
                  Shaping
                  <span className="slide min-w-max">
                    <div className="wrapper">
                      {words.map((word, i) => (
                        <span
                          key={i}
                          className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                          <img
                            src={word.imgPath}
                            alt={word.text}
                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-coal"
                          />
                          <span className="text-violet font-extrabold">
                            {word.text}
                          </span>
                        </span>
                      ))}
                    </div>
                  </span>
                </div>
                <div className="header-line">into Real Projects</div>
                <div className="header-line">that Deliver Results</div>
              </h1>
            </div>
            <p className="text-white-50 md:w-3/4 md:text-xl relative z-10 pointer-events-none">
              I’m Ebrahim — a full-stack developer turning ideas into fast,
              functional, and scalable web apps.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button
                className="cta-wrapper md:w-80 md:h-16 w-60 h-12"
                text="See my work"
                scrollToRef={scrollToRef}
              />
            </div>
          </div>
        </header>
        {/*  //, RIGHT SIDE */}
        <figure className="lg:flex-1">
          <div className="hero-3d-layout">{inView && <ComputerModel />}</div>
        </figure>
      </div>
    </section>
  );
}
