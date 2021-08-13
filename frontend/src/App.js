import React from 'react';
// import HomePage from './components/home/HomePage';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import { Header, FooterComponent as Footer } from './components/Layout';
const App = () => {
  return (
    <div className='App'>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
