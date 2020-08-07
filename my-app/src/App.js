import React from 'react';
import './App.css';
import Register from './pages/Register';
//import Draft from './pages/Draft';
import Profile from './pages/Profile';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';



function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route exact path='/RouterTest' component={RouterTest} /> */}
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path={`/Profile/:userName`} render={(props) =>
            <Profile {...props} />
          }>         
          </Route>

        </Switch>

      </Router>
      <Contact/>
    </div>

  );
}

export default App;
