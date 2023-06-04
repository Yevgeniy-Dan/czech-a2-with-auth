import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contentData from '../utils/contentData';
import TrainingCard from './UI/TrainingCard';
import { useUser } from '@auth0/nextjs-auth0/client';

const Content = () => {
  const { user } = useUser();
  if (user) {
    return (
      <div className="my-5" data-testid="content">
        <hr />
        <h2 className="text-2xl my-4">Доступные тренинги</h2>
        <TrainingCard
          title={'Ваш эффективный курс чешского языка Slang. 2023'}
          subtitle={'74 урока'}
          courseName={'slang'}
        />
        <TrainingCard
          title={'Чисто по-чешски 27.02.2023'}
          subtitle={' 15 уроков. Yana Shevchenko. Курс по произношению'}
          courseName={'purely-in-cz'}
        />
      </div>
    );
  }

  return null;
};

export default Content;
