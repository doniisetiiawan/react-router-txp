import { connect } from 'react-redux';
import { push, replace } from 'connected-react-router';
import React from 'react';

const Dashboard = ({
  pathname, search, hash, state, push, replace,
}) => (
  <div>
    <h4>In Dashboard</h4>
    <div> Pathname : {pathname} </div>
    <div> Search   : {search} </div>
    <div> Hash     : {hash} </div>
    <div> State-Key: {state ? state.key : null} </div>
    <button
      type="button"
      onClick={() => {
        push('/');
      }}
    >
      HOME
    </button>
    <button
      type="button"
      onClick={() => {
        replace('/counter');
      }}
    >
      COUNTER
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash,
  state: state.router.location.state,
});

const mapDispatchToProps = (dispatch) => ({
  push: (path) => dispatch(push(path)),
  replace: (path) => dispatch(replace(path)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
