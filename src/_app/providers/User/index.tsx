'use client';
import { JWTPayload } from '@entities/interfaces';
import type { ReactNode } from 'react';
import { UserContext } from '@entities/context'

interface Props {
  children: ReactNode;
  user?: JWTPayload;
}

export const UserProvider = ({ children, user }: Props) => {
  return (
    <UserContext.Provider value={{ user }} >
      {children}
    </UserContext.Provider>
  );
};
