import React from 'react';
import a2PlusCards from '../../../../utils/lectures-menu-cards/slang/a2-plus';
import MenuCard from '../../../../components/UI/MenuCard';

const Index = () => {
  return (
    <div>
      {a2PlusCards.map(card => (
        <MenuCard key={card.id} title={card.title} subtitle={card.desc} />
      ))}
    </div>
  );
};

export default Index;
