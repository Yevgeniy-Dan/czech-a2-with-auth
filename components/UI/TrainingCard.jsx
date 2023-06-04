import React from 'react';
import PageLink from '../PageLink';

const TrainingCard = ({ title, subtitle, courseName }) => {
  return (
    <div>
      <PageLink href={`/courses/${courseName}`} className="hover:bg-gray-100 my-3 w-full">
        <p className="text-lg">{title}</p>
        <p className="font-semibold">{subtitle}</p>
      </PageLink>
    </div>
  );
};

export default TrainingCard;
