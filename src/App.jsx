import React, { Component } from 'react';
import {
  Link, NavLink, Route, Switch,
} from 'react-router-dom';
import HomeComponent from './components/home/home.component';
import DashboardComponent from './components/dashboard/dashboard.component';
import GitHubComponent from './components/github/github.component';
import CategoryComponent from './components/category/category.component';
import StockListComponent from './components/stock-list/stock-list.component';
import Footer from './components/footer/footer.component';
import UserComponent from './components/User/user.component';
import LoginComponent from './components/Login/login.component';
import './App.css';

class App extends Component {
  // refCallback = (node) => {
  //   node.onmouseover = () => {
  //     node.focus();
  //   };
  // };

  render() {
    return (
      <div className="container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          {/* <Link */}
          {/*  to="/" */}
          {/*  innerRef={this.refCallback} */}
          {/* > */}
          {/*  Home */}
          {/* </Link> */}
          {/* <Link */}
          {/*  to="/dashboard" */}
          {/*  innerRef={this.refCallback} */}
          {/* > */}
          {/*  Dashboard */}
          {/* </Link> */}
          <Link
            to={{
              pathname: '/user',
              search: '?id=1',
              hash: '#hash',
              state: { isAdmin: true },
            }}
          >
            User
          </Link>
          <NavLink
            to="/"
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard/"
            activeClassName="selectedLink"
            strict
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/user"
            activeStyle={{
              background: 'red',
              color: 'white',
            }}
          >
            User
          </NavLink>
          <NavLink
            to={{
              pathname: '/user',
              search: '?id=1',
              hash: '#hash',
              state: { isAdmin: true },
            }}
            activeStyle={{
              background: 'red',
              color: 'white',
            }}
            isActive={(match, location) => {
              if (!match) {
                return false;
              }
              const searchParams = new URLSearchParams(location.search);
              return match.isExact && searchParams.has('id');
            }}
          >
            User
          </NavLink>
          <NavLink
            to="/user"
            activeStyle={{
              background: 'red',
              color: 'white',
            }}
            location={{
              search: '?id=2',
            }}
            isActive={(match, location) => {
              if (!match) {
                return false;
              }
              const searchParams = new URLSearchParams(location.search);
              return match.isExact && searchParams.has('id');
            }}
          >
            User
          </NavLink>
        </nav>
        <Route
          path="/"
          component={HomeComponent}
          exact
        />
        <Route
          path="/dashboard/"
          component={DashboardComponent}
          strict
        />
        <Route
          path="/Dashboard"
          component={DashboardComponent}
          sensitive
        />
        <Route
          path="/dashboard"
          component={DashboardComponent}
          sensitive
        />
        {/* <Route */}
        {/*  path="/user" */}
        {/*  render={() => ( */}
        {/*    <div> Inside User Route </div> */}
        {/*  )} */}
        {/* /> */}
        <Route
          path="/sidenav"
          children={() => (
            <div> Inside Sidenav route </div>
          )}
        />
        {/* <Route */}
        {/*  path="/user" */}
        {/*  render={({ location }) => { */}
        {/*    const { */}
        {/*      pathname, search, hash, state, */}
        {/*    } = location; */}
        {/*    return ( */}
        {/*      <div> */}
        {/*        Inside User route */}
        {/*        <h5>Pathname: {pathname}</h5> */}
        {/*        <h5>Search: {search}</h5> */}
        {/*        <h5>Hash: {hash}</h5> */}
        {/*        <h5>State: {'{'} */}
        {/*          {Object.keys(state).map((element, index) => ( */}
        {/*            <span key={index}> */}
        {/*              {element}: {state[element].toString()} */}
        {/*            </span> */}
        {/*          ))} */}
        {/*          {'}'} */}
        {/*        </h5> */}
        {/*      </div> */}
        {/*    ); */}
        {/*  }} */}
        {/* /> */}
        <Route
          path="/sidenav"
          children={({ match }) => {
            console.log(match);
            return (
              <div> Inside Sidenav route </div>
            );
          }}
        />
        <Route
          path="/github/:githubID/:twitterID?"
          component={GitHubComponent}
        />
        <Route
          path="/github/:githubID(\w+)"
          component={GitHubComponent}
        />
        <Route
          path="/user/:userID(\d+)"
          component={GitHubComponent}
        />
        <Route
          path="/category"
          component={CategoryComponent}
        />
        <Route
          path="/stocks"
          component={StockListComponent}
        />
        <Route
          path="/user"
          component={UserComponent}
        />
        <Route
          path="/login"
          component={LoginComponent}
        />
        <Switch>
          <Route
            path="/login"
            component={LoginComponent}
          />
          <Route
            path="/:id"
            render={({ match }) => <div> Route with path {match.url}</div>}
          />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
