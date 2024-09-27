'use client';
import React, { ReactNode, useContext } from 'react';
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

interface GlobalContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const GlobalContext = createContext<GlobalContextType | null>(null);

interface GlobalProviderProps {
  children: ReactNode;
}

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <GlobalContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobal must be used within a GlobalProvider');
  }
  return context;
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
