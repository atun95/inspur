import React from 'react';

// Render hero title with an optional blue accent segment
const HeroTitle = ({ text, accent }) => {
  if (!text) return null;
  if (!accent) return <>{text}</>;
  const idx = text.indexOf(accent);
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-[#0056b3]">{accent}</span>
      {text.slice(idx + accent.length)}
    </>
  );
};

export default HeroTitle;
