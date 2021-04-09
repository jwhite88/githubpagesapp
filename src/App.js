import { BrowserRouter as Router, Switch, Route, Link, HashRouter} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </HashRouter>

// Multiple 'Route' tags must always be wrapped
// in a 'div' tag OR a 'Switch' tag.
  );
}

export default App;
