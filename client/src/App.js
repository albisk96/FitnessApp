import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Landing from './components/layout/landing.component';
import Routes from './components/routing/Routes';
import Navbar from './components/layout/navbar.component';

const App = () => {  
    return (
      <div>
      <Navbar />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
}

export default App;