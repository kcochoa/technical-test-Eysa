// contexts/auth.js

import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import Router, { useRouter } from 'next/router'
import Home from 'pages/movies';



const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
            const username = Cookies.get('username')
            if (username) {
                console.log("Got a username in the cookies, let's see if it is valid")
                
                if (username === 'katia') setUser(user);
            }
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])

    const login = async (username, password) => {
        
        if (username === 'katia' && password === 'secret123') {
            console.log("Got token")
            Cookies.set('username', username, { expires: 60 })
            setUser(user)
            console.log("Got user", user)
        }
    }

    const logout = (username, password) => {
        Cookies.remove('username')
        setUser(null)
        Router.push("/")
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}



export const useAuth = () => useContext(AuthContext)

export const ProtectRoute = ({ children }) => {
    const router = useRouter()
    const { isAuthenticated, isLoading } = useAuth();
    // if (isLoading || (!isAuthenticated &&  router.route !== '/')){
    //   return ; 
    // }
    return children;
  };