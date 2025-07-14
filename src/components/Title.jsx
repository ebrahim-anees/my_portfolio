import React from 'react';

function Title({ title, sub }) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge">
        <p className="sub capitalize">{sub}</p>
      </div>
      <div className="font-semibold md:text-5xl text-3xl text-center capitalize">
        {title}
      </div>
    </div>
  );
}

export default Title;
