import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './pages/Register';
import Draft from './pages/Draft';
import Profile from './pages/Profile';
import Login from './pages/Login';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
        {/* <Route exact path='/RouterTest' component={RouterTest} /> */}
        <Route exact path='/' component={Register}/>
        <Route exact path='/login' component={Login}/>
        <Route path={`/Profile/:userName`} render={(props) =>
            <Profile {...props} />
          } />
      </Router>
    </div>

  );
}

export default App;
