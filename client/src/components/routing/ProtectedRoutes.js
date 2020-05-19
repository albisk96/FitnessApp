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
    : routes.filter(x => !x.role).map((x, index) => 
      <Route key={index} path={x.path} component={x.component} exact={x.exact} />
    )
    }
    </Fragment>
    );
}

export default ProtectedRoutes


