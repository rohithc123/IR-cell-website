'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: async () => {},
  logout: async () => {},
  loading: true
});

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // DEMO MODE - Always allow access for demonstration
    const checkAuth = async () => {
      try {
        // Check if there's a demo token or just allow access
        const hasToken = document.cookie.includes('token=');
        setIsAuthenticated(hasToken || true); // Always true for demo
      } catch (error) {
        setIsAuthenticated(true); // Always allow for demo
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    // DEMO MODE - Simplified login for demonstration
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
      throw error;
    }
  };

  const logout = async () => {
    // DEMO MODE - Simplified logout for demonstration
    try {
      // Clear demo token cookie
      document.cookie = 'token=; Max-Age=0; path=/';
      setIsAuthenticated(false);
      
      // Navigate to home page instead of login for demo
      window.location.href = '/';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const contextValue: AuthContextType = {
    isAuthenticated,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 