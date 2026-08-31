'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchGraphQL } from '@/lib/wordpress';

type User = {
  id: string;
  username: string;
  email: string;
};

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if token exists on mount
    const checkAuth = async () => {
      const token = localStorage.getItem('wp_jwt_token');
      if (token) {
        try {
          const query = `
            query GetViewer {
              viewer {
                id
                username
                email
              }
            }
          `;
          const res = await fetchGraphQL(query);
          if (res?.data?.viewer) {
            setUser(res.data.viewer);
          } else {
            // Invalid token
            localStorage.removeItem('wp_jwt_token');
          }
        } catch (e) {
          console.error(e);
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const login = async (username: string, password: string) => {
    setLoading(true);
    try {
      const mutation = `
        mutation LoginUser($username: String!, $password: String!) {
          loginWithCookies(input: { login: $username, password: $password }) {
            status
            viewer {
              id
              username
              email
            }
          }
          login(input: { username: $username, password: $password }) {
            authToken
            user {
              id
              username
              email
            }
          }
        }
      `;
      const variables = { username, password };
      const res = await fetchGraphQL(mutation, variables);
      
      if (res?.errors) {
        setLoading(false);
        return { success: false, error: res.errors[0].message };
      }

      const token = res?.data?.login?.authToken;
      if (token) {
        localStorage.setItem('wp_jwt_token', token);
        setUser(res.data.login.user);
        setLoading(false);
        return { success: true };
      }
      
      setLoading(false);
      return { success: false, error: 'Login failed' };
    } catch (e: any) {
      setLoading(false);
      return { success: false, error: e.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('wp_jwt_token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
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