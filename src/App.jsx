import React from 'react';
import { BrowserRouter as Router,Route ,Switch} from 'react-router-dom';
import Home from './home';
import Detail from './detail';
import Navbar from './navbar';

const Routing = ()=>{

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

const App = () => {

  return (
    <div data-testid="app">
       <Router>
          <Navbar/>
          <Routing/>
       </Router>
    </div>
  );
}

export default App;
