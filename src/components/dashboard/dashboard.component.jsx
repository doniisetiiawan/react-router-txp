import React from 'react';

const DashboardComponent = (props) => (
  <div className="dashboard">
    Inside Dashboard route
    <button type="button" onClick={() => props.history.push('/user')}>
      User
    </button>
  </div>
);

export default DashboardComponent;
