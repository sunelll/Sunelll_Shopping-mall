import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RigisterPage from './components/views/RigisterPage/RigisterPage'
import MyPage from './components/views/MyPage/MyPage';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/rigister" component={RigisterPage}/>
      </Switch>
    </div>
  </Router>
  )
}

export default App

