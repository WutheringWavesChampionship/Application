'use client';
import { JWTPayload } from '../../interfaces';
import { createContext } from 'react';

interface Props {
  user?: JWTPayload
}

export const UserContext = createContext<Props>({});
