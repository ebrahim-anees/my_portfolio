import { useRef, useState } from 'react';
import Title from '../components/Title';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useCallback } from 'react';
import ContactFormCard from '../components/ContactFormCard';
import EarthContact from '../components/models/contact/EarthModel';
import StarsCanvas from '../components/models/contact/Stars';

function Contact({ sectionRef }) {
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

  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUPBLIC_KEY
      );
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      toast.success('Successful sending email');
    } catch (error) {
      console.error('email error', error);
      toast.error('Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section
      ref={combinedRef}
      className="flex-center section-padding mb-20 relative"
    >
      <div className="w-full h-full md:px-10 px-5">
        <Title title={'get in touch with me'} sub={'contact information'} />
        <div className="mt-16 grid-12-cols">
          <div className="xl:col-span-5">
            <ContactFormCard
              formRef={formRef}
              formData={formData}
              isLoading={isLoading}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="relative z-10 w-full h-full bg-contact-computer cursor-grab active:cursor-grabbing rounded-3xl overflow-hidden">
              <EarthContact />
            </div>
          </div>
        </div>
      </div>
      <StarsCanvas />
    </section>
  );
}

export default Contact;
