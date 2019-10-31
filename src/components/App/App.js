import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../Header/Header'
import Home from '../../routes/Home/Home'
import Footer from '../Footer/Footer'

const SiteContainer = styled.div`
  max-width: 80%;
  padding: 20px;
  margin: auto;
`


function App() {
  return (
    <SiteContainer>
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
      <Footer />
    </SiteContainer>
  );
}

export default App;
