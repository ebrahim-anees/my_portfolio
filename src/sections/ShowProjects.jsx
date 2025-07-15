import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { thirdContainerURL } from '../data';

gsap.registerPlugin(ScrollTrigger);
function ShowProjects({ sectionRef }) {
  const pj1Ref = useRef(null);
  const pj2Ref = useRef(null);
  const pj3Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
    const projects = [pj1Ref.current, pj2Ref.current, pj3Ref.current];

    gsap.fromTo(
      projects,
      {
        x: (i) => (i === 0 ? -75 : 75),
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: () =>
            window.innerWidth < 640 ? 'top 90%' : 'top bottom-=150',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);
  return (
    <section ref={sectionRef} id="work" className="app-showprojects">
      <div className="w-full">
        <div className="showprojectslayout">
          <div ref={pj1Ref} className="first-project-wrapper">
            <div className="w-full green-pink-gradient p-[2px] rounded-xl">
              <div className="image-wrapper bg-coal rounded-3xl">
                <a
                  href="https://thread-lab-front.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-3 right-1/2 sm:right-0 top-1/2 sm:top-0 translate-x-1/2 sm:-translate-x-10 -translate-y-1/2 sm:translate-y-10"
                >
                  <img
                    src="/images/projects/threadLab/userThreadLab.png"
                    alt="userThreadLab"
                  />
                </a>
                <a
                  href="https://thread-lab-front.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:block z-1 left-1/2 sm:left-0 -bottom-1/2 sm:bottom-0 -translate-x-[50%] sm:translate-x-10 -translate-y-1/2 sm:-translate-y-10"
                >
                  <img
                    src="/images/projects/threadLab/adminThreadLab.png"
                    alt="adminThreadLab"
                  />
                </a>
              </div>
            </div>
            <div className="text-content">
              <h3>
                <a
                  href="https://github.com/ebrahim-anees/ThreadLab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block transition-all duration-300"
                >
                  <span className="block relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:bg-coal after:w-0 after:h-[1px] after:bg-accent after:transition-all after:duration-500 group-hover:after:w-full">
                    ThreadLab — Modern E-Commerce Platform
                  </span>
                </a>
              </h3>
              <p className="text-white md:text-lg text-center">
                Full-stack web app for fashion shopping with user-friendly
                browsing and checkout. Admins can manage products and homepage
                banners from a secure dashboard. Built using the MERN stack.
              </p>
            </div>
          </div>
          <div className="project-list-wrapper">
            <div ref={pj2Ref} className="project">
              <div className="w-full green-pink-gradient p-[1.5px] rounded-xl">
                <div className="image-wrapper second-container bg-coal rounded-3xl">
                  <a
                    href="https://lms-frontend-gray-seven.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="z-3 right-1/2 sm:right-0 top-1/2 sm:top-0 translate-x-[50%] translate-y-[-50%] sm:-translate-x-6 sm:translate-y-4"
                  >
                    <img
                      src="/images/projects/edemy/darkEdemy.png"
                      alt="darkEdemy"
                    />
                  </a>
                  <a
                    href="https://lms-frontend-gray-seven.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:block z-1 left-0 bottom-0 translate-x-6 -translate-y-4"
                  >
                    <img
                      src="/images/projects/edemy/lightEdemy.png"
                      alt="lightEdemy"
                    />
                  </a>
                </div>
              </div>
              <h3>
                <a
                  href="https://github.com/ebrahim-anees/LMS"
                  target="_blank"
                  className="group relative transition-all duration-300"
                  rel="noopener noreferrer"
                >
                  <span className="block relative after:content-[''] after:absolute after:right-0 after:-bottom-1 after:bg-coal after:w-0 after:h-[1px] after:bg-accent after:transition-all after:duration-500 group-hover:after:w-full">
                    Edemy — Online Course Platform with Light/Dark Mode
                  </span>
                </a>
              </h3>
            </div>
            <div ref={pj3Ref} className="project">
              <div className="hidden sm:block w-full green-pink-gradient p-[1.5px] rounded-xl">
                <div className="image-wrapper third-container bg-coal rounded-3xl">
                  <a
                    href="https://5-harmonious-color-scheme-website.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="z-3 right-0 top-0 -translate-x-3 translate-y-3"
                  >
                    <img
                      src="/images/projects/mini-pjs/mini-pj-1.png"
                      alt="mini-pj-1"
                    />
                  </a>
                  <a
                    href="https://8-light-dark-mode-dashboard-vlhh-ijy6hsitp.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <img
                      src="/images/projects/mini-pjs/mini-pj-2.png"
                      alt="mini-pj-2"
                    />
                  </a>
                  <a
                    href="https://9-web-app-using-pug-sass.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="z-1 left-0 bottom-0 translate-x-3 -translate-y-3"
                  >
                    <img
                      src="/images/projects/mini-pjs/mini-pj-3.png"
                      alt="mini-pj-3"
                    />
                  </a>
                </div>
              </div>
              <div className="relative group inline-block text-center w-full">
                <h3 className="cursor-default relative w-fit mx-auto font-semibold text-violet transition-all duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-[1.5px] hover:before:w-full hover:before:bg-coal before:transition-all before:duration-300 before:ease-in-out">
                  DevBits — Practical Mini Projects
                </h3>

                <div className="absolute left-1/2 -translate-x-1/2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 translate-y-2 flex gap-3 bg-coal p-2 rounded-lg shadow-lg shadow-violet/10 z-10 transition-all duration-500 ease-in-out transform">
                  {thirdContainerURL.map((url, index) => (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent text-white px-3 py-1 rounded-lg hover:bg-violet hover:text-accent transition-all duration-300 text-sm"
                    >
                      {index + 1}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowProjects;
