import { forwardRef } from 'react';

const OverviewCard = forwardRef(({ title, description, icon, isLast }, ref) => {
  return (
    <div
      ref={ref}
      className="w-full h-full green-pink-gradient p-[1.5px] rounded-xl shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-coal/98 w-full h-full rounded-3xl py-4 px-5 min-h-[230px] flex items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain mb-2 animate-spin-slow" />
        <h3 className="text-violet text-[23px] font-bold text-center whitespace-nowrap mb-4 px-3">
          {title}
        </h3>
        <p className="text-white text-[20px] text-center">{description}</p>
      </div>
    </div>
  );
});

export default OverviewCard;
