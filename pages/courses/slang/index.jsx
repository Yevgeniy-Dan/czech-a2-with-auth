import React from 'react';
import PageLink from '../../../components/PageLink';
import TrainingCard from '../../../components/UI/TrainingCard';
import useAuth from '../../../hooks/useAuth';
import { useUser } from '@auth0/nextjs-auth0/client';

const Slang = () => {
  const isAuth = useAuth();

  if (!isAuth) {
    return <>{isAuth}</>;
  }

  return (
    <div className="w-full">
      <div>
        <PageLink href={'/'} className="text-lg">
          Тренинги
        </PageLink>
        <h2 className="mb-5 mt-4 text-3xl font-semibold">Ваш эффективный курс чешского языка Slang. 2023</h2>
      </div>

      <div>
        <PageLink href="/courses/slang/instructions" className="text-xl">
          Инструкция к урокам
        </PageLink>
      </div>

      <div>
        <TrainingCard
          title="Эффективный курс чешского A2+"
          subtitle="26 уроков. Дарья Мацак. Видеолекции и упражнения для подготовки к урокам со 100% практикой."
          courseName="slang/a2-plus"
        />
      </div>
    </div>
  );
};

export default Slang;
