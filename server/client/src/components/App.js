import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
