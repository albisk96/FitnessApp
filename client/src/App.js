import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Routes from './components/routing/Routes';
import Navbar from './components/layout/navbar.component';
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import './App.css';

const App = () => {  
  const alert = useSelector(state => state.alert)

    return (
      <div className='background'>
      <Navbar />
      {alert.msg && <Alert variant={alert.type}>
      {alert.type === 'success' ? <i className="fa fa-check" style={{ margin: '5%' }} aria-hidden="true"></i> :
       alert.type === 'error' ? <i style={{ margin: '5%' }} className="fas fa-exclamation-circle"></i> : ''}
      {alert.msg}
      </Alert>}
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
            <Route component={Routes} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
        
      </div>
    );
}

export default App;