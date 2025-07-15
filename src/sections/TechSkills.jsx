import React, { useCallback, useEffect, useRef, useState } from 'react';
import Title from '../components/Title';
import { topTechStack, extraTechStack } from '../data';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';
import FancyCard from '../components/FancyCard';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';

function TechSkills({ sectionRef }) {
  const [showMore, setShowMore] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const cardRefs = useRef([]);

  const filters = ['all', 'frontend', 'backend', 'tool'];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const combinedRef = useCallback(
    (node) => {
      sectionRef.current = node;
      ref(node); // ref from useInView
    },
    [ref, sectionRef]
  );

  const isVisible = (techType) => {
    if (activeFilter === 'frontend')
      return techType === 'frontend' || techType === 'fullstack';
    if (activeFilter === 'backend')
      return techType === 'backend' || techType === 'fullstack';
    if (activeFilter === 'tool') return techType === 'tool';
    return true; // default: show all
  };

  useEffect(() => {
    if (inView && cardRefs.current.length) {
      gsap.fromTo(
        cardRefs.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.inOut',
          stagger: 0.1,
        }
      );
    }
  }, [inView]);
  useEffect(() => {
    gsap.to('.card-container', {
      opacity: (i, el) => (isVisible(el.dataset.type) ? 1 : 0.3),
      scale: (i, el) => (isVisible(el.dataset.type) ? 1 : 0.95),
      duration: 0.5,
      stagger: 0.05,
    });
  }, [activeFilter]);

  return (
    <section ref={combinedRef} className="skills-section section-padding mb-20">
      <div className="w-full px-5 md:px-10">
        <Title
          title={'My preferred Tech Stack'}
          sub={'The Skills I bring to the table'}
        />

        {/* Top Skills */}
        <div className="tech-grid">
          <div className="filter-btns">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`filter-circle group relative hover:bg-violet/50 hover:border-white/50 ${
                  activeFilter === filter
                    ? '!bg-violet border-white/50 green-pink-gradient shadow-xs shadow-white'
                    : 'bg-coal border-violet/50'
                }`}
                title={filter}
              >
                <span className="filter-tooltip">{filter}</span>
              </button>
            ))}
          </div>

          {topTechStack.map((icon, i) => {
            const isDimmed = !isVisible(icon.type);
            return (
              <div
                key={icon.name}
                className={`card-container ${
                  isDimmed ? 'opacity-30 grayscale' : 'opacity-100 shadow-xl'
                } ${
                  i === 9
                    ? 'col-start-auto md:col-start-2 xl:col-start-auto'
                    : ''
                }`}
                data-type={icon.type}
              >
                <a
                  href={icon.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FancyCard index={i}>
                    <div
                      ref={(el) => (cardRefs.current[i] = el)}
                      className={`tech-card relative group py-8 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 
                  `}
                    >
                      <div className="hover-glow-bg"></div>
                      <img
                        src={icon.iconPath}
                        alt={icon.name}
                        className={`w-18 h-18 object-contain mb-4 tech-float relative z-10`}
                      />
                      <p className="text-white font-bold text-center relative z-10 group-hover:opacity-0 transition-opacity duration-300">
                        {icon.name}
                      </p>
                      <div className="absolute bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-md px-2 text-violet font-semibold text-center z-10">
                        {icon.description}
                      </div>
                    </div>
                  </FancyCard>
                </a>
              </div>
            );
          })}
        </div>

        {/* Show More Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-accent text-md cursor-pointer flex items-center gap-0 mx-auto relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] hover:before:w-full hover:before:bg-violet before:transition-all transition-all before:duration-300 duration-500 before:ease-in-out ease-in-out"
          >
            {showMore ? (
              <>
                <p>
                  <span className="text-violet font-bold">Hide</span> extra
                  tools
                </p>
                <IoMdArrowDropup className="w-6 h-6" />
              </>
            ) : (
              <>
                <p>
                  <span className="text-violet font-bold">Show</span> more tools
                </p>
                <IoMdArrowDropdown className="w-6 h-6" />
              </>
            )}
          </button>
        </div>

        {/* Extra Tools */}
        <div
          className={`transition-all duration-300 ${
            showMore ? '' : 'pointer-events-none'
          }`}
          style={{
            maxHeight: showMore ? '1000px' : '0px',
            opacity: showMore ? 1 : 0,
          }}
        >
          <div className="tech-grid xl:grid-cols-6">
            {extraTechStack.map((icon, i) => {
              const isDimmed = !isVisible(icon.type);
              return (
                <div
                  key={icon.name}
                  className={`card-container ${
                    isDimmed ? 'opacity-30 grayscale' : 'opacity-100 shadow-xl'
                  }`}
                  data-type={icon.type}
                >
                  {icon.proficiency === 'beginner' && (
                    <div className="badge-container group">
                      <div className="badge-dot group-hover:animate-none">
                        <div className="badge-tooltip group-hover:opacity-100">
                          Still learning
                        </div>
                      </div>
                    </div>
                  )}
                  <a
                    href={icon.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FancyCard index={i}>
                      <div
                        ref={(el) => (cardRefs.current[i] = el)}
                        className="tech-card relative group py-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300"
                      >
                        <div className="hover-glow-bg"></div>
                        <img
                          src={icon.iconPath}
                          alt={icon.name}
                          className={` ${i === 5 ? 'w-24' : 'w-15'} 
                      h-15 object-contain mb-4 tech-float relative z-100`}
                        />
                        <p className="text-white font-bold text-center relative z-10 group-hover:opacity-0 transition-opacity duration-300">
                          {icon.name}
                        </p>
                        <div className="absolute bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm px-2 font-semibold text-violet text-center z-10">
                          {icon.description}
                        </div>
                      </div>
                    </FancyCard>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechSkills;
