import React from 'react';
import './App.css';
import UsersList from './UsersList';
import AddForm from './AddForm'
import {FormProvider} from './FormContext'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <FormProvider>
    <div className="wrapper">
    <Router>
      
      <Route path="/" exact>
      <AddForm/>
      <Link style={{color:"#34495E"}} to="/details">
      
      <h1 style={{color:'white'}}>Click here to see registration details</h1>
      </Link>
      
      </Route>
      <Route path="/details" exact component={UsersList}/>
      </Router>
      </div>

    </FormProvider>
  );
}

export default App;
