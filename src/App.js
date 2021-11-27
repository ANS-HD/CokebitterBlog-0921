import { Component } from 'react';
import {Redirect,Route,Switch} from 'react-router-dom'
import Login from "./containers/login/login"
import Admin from "./containers/admin/admin"
import leftNav from "./containers/leftNav/leftNav"
import Register from './containers/register/register'
class App extends Component {
  render(){
    return (
      <div className='App'>
        <Switch>
          <Route path='/login' component={Login}  exact/>
          <Route path='/register' component={Register}/>
          <Route path='/' component={Admin} />
          {/* <Route path='/admin/main' component={leftNav} /> */}
          <Redirect to='/admin'/>

        </Switch>
      </div>
  );
}
}
export default App;
