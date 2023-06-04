import React from 'react';

import Logo from './Logo';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Nav } from 'reactstrap';
import AnchorLink from './AnchorLink';

const Hero = () => {
  const { user, isLoading } = useUser();

  if (!isLoading && !user) {
    return (
      <div className="hero my-5 text-center" data-testid="hero">
        <div>
          <h1 className="mb-4 text-2xl">Курсы чешского языка</h1>

          <p className="lead my-4" data-testid="hero-lead">
            Это платформа для изучения чешского языка
          </p>

          <div className="flex justify-center">
            <AnchorLink
              href="/api/auth/login"
              className="btn btn-primary btn-block w-36"
              tabIndex={0}
              testId="navbar-login-mobile">
              Войти
            </AnchorLink>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Hero;
