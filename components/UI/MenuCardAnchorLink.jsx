import React from 'react';

const MenuCardAnchorLink = ({ children, href }) => {
  const anchorClass = 'hover:no-underline hover:text-inherit';

  return (
    <a href={href} className={anchorClass}>
      {children}
    </a>
  );
};

export default MenuCardAnchorLink;
