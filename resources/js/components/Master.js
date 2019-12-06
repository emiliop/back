import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import CreateService from './CreateService';
import DisplayService from './DisplayService';
import UpdateService from './UpdateService';


function Master () {
  
    return (
      
            <BrowserRouter>
                <Switch>
                  <Route path="/" exact component={DisplayService}/>
                  <Route path="/create" exact component={CreateService}/>
                  <Route path="/edit/:id" component={UpdateService}/> 
                </Switch>
            </BrowserRouter>
         
    
          
    )
  }

export default Master;
if (document.getElementById('master')) {
  ReactDOM.render(<Master />, document.getElementById('master'));
}