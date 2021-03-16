import React from 'react'
import './Home.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";

export default function Header() {
    return (
        <Router>
        <div>
            <div className="header">
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
        
                    <li>
                    <Link to="/topics">Topics</Link>
                    </li>
                </ul>
            </div>

          
            <Switch>
              <Route exact path="/">
                <Dashboard/>
              </Route>
  
              <Route path="/topics">
                <Topics/>
              </Route>
            </Switch>
        </div>
      </Router>
    );
  }
  
  function Dashboard() {
    return(
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  function Topics() {
    // `path` untuk membuat jalur <Route> yang terhadap rute induk,
    //  sedangkan `url` untuk membuat link.
    let {path,url} = useRouteMatch();
    return(
      <div>
        <h2>Topics</h2>
        <ul>
            <li>
              <Link to={`${url}/Sate, Nasi Goreng`}>Kuliner</Link>
            </li>
  
            <li>
              <Link to={`${url}/Wisata Alam, Museum`}>Travelling</Link>
            </li>
  
            <li>
              <Link to={`${url}/Ibis, JW Marriot`}>Review Hotel</Link>
            </li>
          </ul>
  
          <Switch>
              <Route exact path="{path}">
                <h3>Please Select a Topic.</h3>
              </Route>
  
              <Route path={`${path}/:topicId`}>
                <Topic/>
              </Route>
  
          </Switch>
  
      </div>
    );
  }
  
  function Topic() {
    let{topicId} = useParams();
  
    return(
      <div>
        <h3>{topicId}</h3>
      </div>
    );
}
