import { useRef } from 'react';
import { abilities, overviewPoints } from '../data';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Title from '../components/Title';
import OverviewCard from '../components/overviewCard';

gsap.registerPlugin(ScrollTrigger);

function FeatureCard({ sectionRef }) {
  const cardsRef = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        rotateY: -90,
        x: -50,
        y: 50,
        scale: 0.8,
        filter: 'blur(10px)',
      },
      {
        opacity: 1,
        rotateY: 0,
        x: 0,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 20%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
    gsap.to('.floating-bg', {
      y: 30, // Move up and down 30px
      duration: 3.5, // Time to complete one way
      repeat: -1, // Repeat forever
      yoyo: true, // Come back to original position
      ease: 'sine.inOut', // Very smooth ease
    });
  });

  return (
    <section
      ref={sectionRef}
      className="overview w-full padding-x-lg my-20 relative"
    >
      <Title title="Build. Learn. Repeat" sub="About me" />
      <div className="absolute top-0 left-0 opacity-80">
        <img src="/images/bg.png" alt="background" className="floating-bg" />
      </div>
      <div className="overview-paragraph">
        <p className="text-center md:text-start">
          I'm a{' '}
          <span className="font-semibold text-accent">
            dedicated full-stack developer
          </span>{' '}
          who specializes in building modern, responsive, and user-friendly web
          applications. My focus is on writing{' '}
          <span className="font-semibold text-accent">clean code</span>,
          delivering{' '}
          <span className="font-semibold text-accent">
            high-performance solutions
          </span>
          , and continuously leveling up my skills.
        </p>

        <div className="mckinsey mt-6 flex flex-col sm:flex-row items-center gap-5 flex-nowrap px-8 mb-7">
          <a
            href="https://www.credly.com/badges/5034bda5-a177-4590-add8-1de6ce3cca29/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-500 ease-in-out z-[10]"
          >
            <img
              src="/images/overviewSection/mckinsey-badge.png"
              alt="McKinsey Forward Badge"
              className="min-w-[90px] w-30 h-auto animate-heartbeat"
            />
          </a>
          <p className="text-white text-center sm:text-start text-[18px] max-w-2xl">
            Certified by McKinsey & Company’s{' '}
            <a
              href="https://www.mckinsey.com/forward/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-violet"
            >
              Forward Program
            </a>{' '}
            for mastering structured problem-solving, communication, digital
            tools, and adaptability.
          </p>
        </div>

        <ul className="list-none space-y-3">
          {overviewPoints.map(({ point, icon: Icon }, index) => (
            <li key={index} className="flex flex-col sm:flex-row items-center gap-2">
              <span className="min-w-8 min-h-8 p-2 bg-coal text-violet rounded-full flex items-center justify-center">
                <Icon className="w-full h-full" />
              </span>{' '}
              <span className='text-center sm:text-start'>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto 2xl:mx-15 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 my-5 px-5 md:px-0">
        {abilities.map(({ imgPath, title, desc }, index) => {
          const isLast = index === abilities.length - 1;
          return (
            <OverviewCard
              key={title}
              ref={(el) => (cardsRef.current[index] = el)}
              title={title}
              description={desc}
              index={index}
              icon={imgPath}
              isLast={isLast}
            />
          );
        })}
      </div>
    </section>
  );
}

export default FeatureCard;
