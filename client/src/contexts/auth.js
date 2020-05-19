import React, { createContext, useContext, useState } from 'react';
import Spinner from '../components/spinner/spinner.component';
import { Route, Redirect, useHistory } from 'react-router-dom';

const AuthContext = createContext({});

export function useAuth(){
    return useContext(AuthContext)
}

export function ProvideAuth({children}){
    const auth = useProvideAuth()
    return (<AuthContext.Provider value={auth}>{children}</AuthContext.Provider>)
}

function useProvideAuth(){
    const history = useHistory();
    const [session, setSession] = useState(JSON.parse(sessionStorage.getItem('session')) || null)

    const createSession = session => {
        sessionStorage.setItem('session', JSON.stringify(session))
        setSession(session)
        history.push(`/${session.role}`)
        
    }

    const removeSession = () => {
        sessionStorage.removeItem('session')
        setSession(null)
        history.push(`/`)
    }

    return {session, createSession, removeSession}
}