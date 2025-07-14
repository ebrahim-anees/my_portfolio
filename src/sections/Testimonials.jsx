import React from 'react';
import Title from '../components/Title';
import { testimonials } from '../data';
import FancyCard from '../components/FancyCard';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Testimonials({ sectionRef }) {
  useGSAP(() => {
    gsap.utils
      .toArray('.testimonial-section .timeline-card')
      .forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            filter: 'blur(10px)',
            scale: 0.8,
          },
          {
            opacity: 1,
            filter: 'blur(0px)',
            scale: 1,
            duration: 1,
            stagger: 0.3,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: card,
              start: 'top 70%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      });
  });
  return (
    <section
      ref={sectionRef}
      className="testimonial-section flex-center section-padding mb-20"
    >
      <div className="w-full h-full md:px-10 px-5">
        <Title
          sub={'client feedback highlights'}
          title={'what people say about me?'}
        />
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map(({ imgPath, name, mentions, review }) => (
            <FancyCard key={name} card={review}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={imgPath} alt={name} />
                </div>
                <div>
                  <p className="font-bold">{name}</p>
                  <p className="text-white-50">{mentions}</p>
                </div>
              </div>
            </FancyCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
