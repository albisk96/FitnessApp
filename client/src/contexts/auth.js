import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});

export function useAuth(){
    return useContext(AuthContext)
}

export function ProvideAuth({children}){
    const auth = useProvideAuth()
    return (<AuthContext.Provider value={auth}>{children}</AuthContext.Provider>)
}

function useProvideAuth(){
    const [session, setSession] = useState(JSON.parse(sessionStorage.getItem('session')) || null)

    function createSession(session){
        sessionStorage.setItem('session', JSON.stringify(session))

        setSession(session)
        window.location.replace(`/${session.role}`)
    }

    function removeSession(){
        sessionStorage.removeItem('session')
        setSession(null)
    }

    return {session, createSession, removeSession}
}