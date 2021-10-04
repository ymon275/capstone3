import React, { useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
const DBContext = React.createContext();

export function useDB() {
  return useContext(DBContext);
}

export function AuthProvider({ children }) {
  const [currentCollection, setCurrentCollection] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
      return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}