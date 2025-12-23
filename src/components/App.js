import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import "../styles/App.css";

const Home = () => {
  return <div>Index</div>;
};

const Item = ({ match }) => {
  return <div>{match.params.item}</div>;
};

const Women = ({ match }) => {
  return (
    <div>
      <p>Women Items:</p>
      <ul>
        <li>
          <Link to={`${match.url}/Grooming`}>Grooming</Link>
        </li>
        <li>
          <Link to={`${match.url}/Shirt`}>Shirt</Link>
        </li>
        <li>
          <Link to={`${match.url}/Trouser`}>Trouser</Link>
        </li>
        <li>
          <Link to={`${match.url}/Jewellery`}>Jewellery</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:item`} component={Item} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <main>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/women">Women</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/women" component={Women} />
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default App;
