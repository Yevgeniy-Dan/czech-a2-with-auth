import React from 'react';

const GreenBox = ({ text }) => {
  return (
    <div className="bg-green-400 font-bold p-2 my-2 rounded-md">
      <p className="p-0 m-0">{text}</p>
    </div>
  );
};

export default GreenBox;
