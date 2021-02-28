import React from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import{
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
  import Academics from './pages/Academics';
  import Athletics from './pages/Athletics';
  import Other from './pages/Other';
  import Admissions from './pages/Admissions';
  import Community from './pages/Community';
  import ContactUs from './pages/ContactUs';

// I got help with exact / links from youtube//
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <body className="page">
          <Switch>
            <Route path = '/academics' exact component={Academics} />
            <Route path = '/athletics' component={Athletics} />
            <Route path = '/community' component={Community} />
            <Route path = '/other' component={Other} />
            <Route path = '/admissions' component={Admissions} />
            <Route path = '/contactus' component={ContactUs} />
          </Switch> 
        </body>
       
          
         
        </Router>
    </div>
  );
}

export default App;
