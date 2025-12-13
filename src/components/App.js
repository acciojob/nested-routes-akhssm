import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import "../styles/App.css";

const Home = () => {
  return <div>Index</div>;
};

const Women = () => {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <p>Women Items:</p>
      <ul>
        <li>
          <Link to={`${url}/grooming`}>Grooming</Link>
        </li>
        <li>
          <Link to={`${url}/shirt`}>Shirt</Link>
        </li>
        <li>
          <Link to={`${url}/trouser`}>Trouser</Link>
        </li>
        <li>
          <Link to={`${url}/jewellery`}>Jewellery</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/:item`}>
          <Item />
        </Route>
      </Switch>
    </div>
  );
};

const Item = () => {
  const { item } = useParams();
  return <div>{item}</div>;
};

function App() {
  return (
    <Router>
      <div className="main-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/women">
            <Women />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
