import Title from '../components/Title';
import { expCards } from '../data';
import FancyCard from '../components/FancyCard';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function Experience({ sectionRef }) {
  useGSAP(() => {
    gsap.utils.toArray('.experience-section .timeline-card').forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: 'left left',
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: card,
          start: 'top 72%',
          toggleActions: 'play reverse play reverse',
        },
      });
    });
    gsap.to('.timeline', {
      transformOrigin: 'bottom bottom',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top center',
        end: '60% center',
        onUpdate: (self) => {
          gsap.to('.timeline', {
            scaleY: 1 - self.progress,
          });
        },
      },
    });
    gsap.utils.toArray('.expText').forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: text,
          start: 'top 44%',
          toggleActions: 'play reverse play reverse',
        },
      });
    });
  }, []);
  return (
    <section
      ref={sectionRef}
      className="experience-section w-full md:mt-40 mt-20 mb-40 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <Title title="Professional Work Experience" sub="My Career Overview" />
        
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, i) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6 relative">
                  <FancyCard card={card} >
                    <div className="flex justify-center">
                      <img src={card.imgPath} alt={card.title} />
                    </div>
                  </FancyCard>
                  <div className="timeline-logo top-4">
                    <img src={card.logoPath} alt="logo" />
                  </div>
                </div>
                <div className="timeline-wrapper">
                  <div className="timeline" />
                  <div className="gradient-line w-1 h-full" />
                </div>
                <div className="xl:w-4/6 relative z-20 ml-20 md:ml-0">
                  <div className="flex items-start">
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div>
                        <h4 className="font-semibold text-3xl">{card.title}</h4>
                        <p className="my-3 text-white-50">{card.date}</p>
                        <p className="text-[#839cb5] italic">Responsiblilies</p>
                        <ul className="list-dics ms-5 mt-5 flex flex-col gap-5 text-white-50 list-disc">
                          {card.responsibilities.map((responsibility) => (
                            <li key={responsibility} className="text-lg">
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
