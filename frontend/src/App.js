import React, { Component } from 'react'
import { BrowserRouter as Router , Route,Switch } from 'react-router-dom';
import Register from "./components/Register";
import View from "./components/View";
import Customerprofileview from "./components/Customerprofileview";

class App extends Component {
  render () {


    return (
      <Router>
        <div>
          <switch>
            <Route exact path="/" component={Register}/>
            <Route exact path="/view" component={View}/>
            <Route exact path="/customer/profile/:id" component={Customerprofileview}/>
            
          </switch>
        </div>
      </Router>
    )
  }
}

export default App
