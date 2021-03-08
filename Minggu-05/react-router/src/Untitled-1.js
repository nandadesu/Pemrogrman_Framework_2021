import React from "react";
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
  
  export default function AuthExample() {
    return (
      <Router>
        <div>
          <AuthButton />
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/private">Private Page</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/public">
              <PublicPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/private">
              <ProtectedPage />
            </PrivateRoute>
            </Switch>
        </div>
      </Router>
      );
    }
  
    const fakeAuth = {
      isAuthenticated: false,
      authenticated(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100);
      },
      signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
      }
    };
  
    function AuthButton() {
      let history = useHistory();
  
      return fakeAuth.isAuthenticated ? (
        <p>
          Welcome!{" "}
          <button
            onClick={() => {
              fakeAuth.signout(() => history.pushState("/"));
            }}
          >
            Sign Out
          </button>
        </p>
      ) : (
        <p>You are not logged in.</p>
      );
    }
  
    function PrivateRoute({ children, ...rest }) {
      return (
        <Route
        {...rest}
        render={({ location}) =>
          fakeAuth.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
              />
          )
      }
      />
      );
    }
    function PublicPage(){
      return <h3>Public</h3>
    }
  
    function ProtectedPage() {
      return <h3>Private</h3>;
    }
  
    function LoginPage(){
      let history = useHistory();
      let location = useLocation();
  
      let { from } = location.state || { from: { psthname: "/"} };
      let login = () => {
        fakeAuth.authenticated(() => {
          history.replace(from);
        });
      };
  
      return (
        <div>
          <p>You must log in to view the page at {from.pathname}</p>
          <button onClick={login}>Log in</button>
        </div>
      );
    }