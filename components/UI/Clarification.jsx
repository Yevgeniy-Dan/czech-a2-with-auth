import React from 'react';

const Clarification = ({ text }) => {
  return (
    <div
      style={{
        backgroundColor: '#fff5b4'
      }}
      className="p-4 rounded-lg">
      <p className="font-bold">Уточнение от Дарьи.</p>
      <p className="italic text-red-600">{text}</p>
    </div>
  );
};

export default Clarification;
