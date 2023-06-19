import React from 'react';

const PdfFrame = ({ title, href }) => {
  return (
    <div className="flex items-center border-y-2 border-gray-200  p-4 my-3">
      <img src="https://czechbucket.s3.amazonaws.com/a2plus-icons/pdf-icon.png" alt="Note" className="h-auto mr-3" />
      <a className="mb-0" href={href} target="blank">
        {title}
      </a>
    </div>
  );
};

export default PdfFrame;
