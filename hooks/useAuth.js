import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';

const useAuth = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) {
    // Optional: Show a loading indicator while authentication is in progress
    return <div>Loading...</div>;
  }

  if (!user) {
    // If the user is not authenticated, redirect to the root path
    router.push('/');
    return null; // Prevent rendering the component
  }

  if (user) {
    return true;
  }

  return false;
};

export default useAuth;
