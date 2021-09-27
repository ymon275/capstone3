import React, { useContext, useEffect, useState, children } from 'react';
import { auth } from '../firebase'

const AuthContext = React.createContext({ children });

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider() {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false)
        })
        return unsubscribe
}, [])

    auth.onAuthStateChanged(user => {
        setCurrentUser(user);
    })

    const value = {
        currentUser,
        signup
    }

    return (
        <AuthContext.Provider>
            {!loading && children}
        </AuthContext.Provider>
    )
}