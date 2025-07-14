import CountUp from 'react-countup';
import { counterItems } from '../data';
import { useRef, useState, useEffect } from 'react';

function AnimatedCounter({ counterRef }) {
  const [inView, setInView] = useState(false);
  const observerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // optional: only run once
        }
      },
      { threshold: 0.5 }
    );
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={(el) => {
        observerRef.current = el;
        if (counterRef) counterRef.current = el;
      }}
      id="counter"
      className="padding-x-lg lg:mt-14 md:mt-90 mt-64 mb-20"
    >
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center text-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              {inView ? (
                <CountUp suffix={item.suffix} end={item.value} duration={2} />
              ) : (
                0
              )}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedCounter;
