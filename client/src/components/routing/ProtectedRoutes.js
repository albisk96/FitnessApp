import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts';

function ProtectedRoutes ({ routes }){
    const { session } = useAuth();
    return (
    <Fragment>
    { session ? 
      routes.filter(x => x.role === session.role).map((x, index) => 
        (<Route key={index} path={x.path} component={x.component} exact={x.exact} />))
    : <Redirect to='/' />
    }
    </Fragment>
    );
}

export default ProtectedRoutes


