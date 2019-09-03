import { connect } from 'react-redux';
import React from 'react';

const Dashboard = ({
  pathname, search, hash, state,
}) => (
  <div>
    <h4>In Dashboard</h4>
    <div> Pathname : {pathname} </div>
    <div> Search   : {search} </div>
    <div> Hash     : {hash} </div>
    <div> State-Key: {state ? state.key : null} </div>
  </div>
);

const mapStateToProps = (state) => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash,
  state: state.router.location.state,
});

export default connect(mapStateToProps)(Dashboard);
