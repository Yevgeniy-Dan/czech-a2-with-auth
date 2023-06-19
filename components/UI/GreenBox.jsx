import React from 'react';

const GreenBox = ({ text, subtitle }) => {
  return (
    <div className="bg-green-400 p-2 my-2 rounded-md">
      <p className="p-0 m-0 font-bold">{text}</p>
      <p className="m-0">{subtitle}</p>
    </div>
  );
};

export default GreenBox;
