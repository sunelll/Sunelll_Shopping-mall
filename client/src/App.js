import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App


function Home() {
  return (
    <div>
      <h2>Home 홈페이지 컴포넌트</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About 어바웃 컴포넌트</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard 대시보드 컴포넌트</h2>
    </div>
  );
}
