import React from 'react';
import './App.css';
import Register from './pages/Register';
//import Draft from './pages/Draft';
import Profile from './pages/Profile';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import ContactForm from './pages/ContactForm';



function App() {
  return (
    <div>
      <Home/>
      <Router>
        <Switch>
          {/* <Route exact path='/RouterTest' component={RouterTest} /> */}
          
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
          <Route path={`/Profile/:userName`} render={(props) =>
            <Profile {...props} />
          }>         
          </Route>
          <Route path ="/contactform" component ={ContactForm}/>
        </Switch>
        <Contact/>
      </Router>
      
    </div>

  );
}

export default App;
