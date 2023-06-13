import React from 'react';

const FixingMaterialFrame = ({text}) => {
  return (
    <div className="flex items-center border-2 border-gray-300 rounded-lg p-4 my-3">
      <img src="https://czechbucket.s3.amazonaws.com/a2plus-icons/note.jpg" alt="Note" className="w-14 h-auto mr-3" />
      <p className="mb-0">
        <strong>{text}</strong>
      </p>
    </div>
  );
};

export default FixingMaterialFrame;
