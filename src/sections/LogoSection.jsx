import { logoIconsList } from '../data';

function LogoSection() {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />
      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon, i) => (
            <div key={i} className="flex-none flex-center marquee-item">
              <img
                src={icon.imgPath}
                alt={icon.imgPath.match(/\/logos\/(.*?)\.png/)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoSection;
