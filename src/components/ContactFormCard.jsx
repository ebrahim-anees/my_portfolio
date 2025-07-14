import { useRef } from 'react';

export default function ContactFormCard({
  formRef,
  formData,
  handleChange,
  handleSubmit,
  isLoading,
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty('--start', angle + 60);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative z-10 group rounded-2xl p-10 bg-white/15 hover:bg-white/20 backdrop-blur-xs transition-all duration-500"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-400/5 via-transparent to-indigo-600/10 opacity-90 rounded-2xl blur-sm" />
      {/* Contact Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-5 z-10 relative"
      >
        {/* Name */}
        <div className="relative">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="peer"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="resize-none"
            rows="5"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className={`contact-btn group w-3/4 flex-center mx-auto transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-xl ${
            isLoading ? 'opacity-25 pointer-events-none' : ''
          }`}
        >
          {!isLoading ? (
            <span className="relative">
              Send <span className="letter-m">M</span>essage
              <span className="dot absolute -right-3 top-0 animate-ping text-coal text-xs">
                •
              </span>
            </span>
          ) : (
            <span className="hover:text-black">Sending...</span>
          )}
        </button>
      </form>
    </div>
  );
}
