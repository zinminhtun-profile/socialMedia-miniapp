import React from 'react';
import { BrowserRouter as Router,Route ,Switch} from 'react-router-dom';
import Home from './home';
import Detail from './detail';
import Navbar from './navbar';

function Routing() {

  return (
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`}>
            <Home/>
          </Route>
          <Route exact path={`${process.env.PUBLIC_URL}/home`}>
            <Home />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/detail/:slug`}>
            <Detail />
          </Route>
          <Route path="*">404</Route>
        </Switch>
  )
  
}

function App() {

  return (
    <>
       <Router>
          <Navbar/>
          <Routing/>
       </Router>
    </>
  );
}

export default App;
