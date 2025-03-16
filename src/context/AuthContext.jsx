// File: src/context/AuthContext.jsx

import React, { createContext, useState, useEffect, useContext } from 'react';

// Create context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check for saved user in localStorage when app starts
    const savedUser = localStorage.getItem('casinoUser');
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('casinoUser');
      }
    }
    setLoading(false);
  }, []);

  // Mock login function (in a real app, this would call an API)
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    
    try {
      // In a real app, you'd make an API call here
      // For demo, we'll simulate a successful login after a delay
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Mock validation
          if (email === 'demo@example.com' && password === 'password123') {
            const user = { 
              id: '1', 
              email: email, 
              username: 'demo_user',
              balance: 1000.00,
              vipLevel: 'Silver',
              created: new Date().toISOString()
            };
            
            // Save user to state and localStorage
            setCurrentUser(user);
            localStorage.setItem('casinoUser', JSON.stringify(user));
            setLoading(false);
            resolve(user);
          } else {
            const error = new Error('Invalid email or password');
            setError(error.message);
            setLoading(false);
            reject(error);
          }
        }, 1000); // Simulate network delay
      });
    } catch (err) {
      setError(err.message);
      setLoading(false);
      throw err;
    }
  };

  // Mock registration function
  const register = async (userData) => {
    setLoading(true);
    setError(null);
    
    try {
      // In a real app, you'd make an API call here
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate validation
          if (userData.email === 'demo@example.com') {
            const error = new Error('Email already in use');
            setError(error.message);
            setLoading(false);
            reject(error);
            return;
          }
          
          // Create new user
          const user = {
            id: Math.random().toString(36).substr(2, 9), // Generate random ID
            email: userData.email,
            username: userData.username,
            balance: 1000.00, // Welcome bonus
            vipLevel: 'Bronze',
            created: new Date().toISOString()
          };
          
          // Save user to state and localStorage
          setCurrentUser(user);
          localStorage.setItem('casinoUser', JSON.stringify(user));
          setLoading(false);
          resolve(user);
        }, 1000);
      });
    } catch (err) {
      setError(err.message);
      setLoading(false);
      throw err;
    }
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('casinoUser');
  };

  // Value to be provided to consumers of this context
  const value = {
    currentUser,
    login,
    register,
    logout,
    loading,
    error
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = () => {
  return useContext(AuthContext);
};