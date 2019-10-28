import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Home from '../../routes/Home/Home'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>

        </Route>
        <Route path='/shop'>

        </Route>
      </Switch>
    </div>
  );
}

export default App;
