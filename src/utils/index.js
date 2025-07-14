export const handleClickBtn = (sectionRef, useOffset = false) => {
  if (sectionRef?.current) {
    const offset = useOffset ? window.innerHeight * 0.15 : 0;
    const top =
      sectionRef.current.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  }
};