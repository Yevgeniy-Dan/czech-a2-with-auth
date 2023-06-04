import React from 'react';

import Logo from './Logo';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Nav } from 'reactstrap';
import AnchorLink from './AnchorLink';

const Hero = () => {
  const { user, isLoading } = useUser();

  return (
    <div className="hero my-5 text-center" data-testid="hero">
      <h1 className="mb-4 text-2xl">Курсы чешского языка</h1>

      <p className="lead my-4" data-testid="hero-lead">
        Это платформа для изучения чешского языка, начиная от А2+
      </p>

      <div className="flex justify-center">
        {!isLoading && !user && (
          <AnchorLink
            href="/api/auth/login"
            className="btn btn-primary btn-block w-36"
            tabIndex={0}
            testId="navbar-login-mobile">
            Log in
          </AnchorLink>
        )}
      </div>
    </div>
  );
};

export default Hero;
