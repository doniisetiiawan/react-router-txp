import React from 'react';

function DashboardComponent(props) {
  const { location } = props;
  return (
    <div>
      In DashboardComponent <br />
      {/* From : {location.state.from} */}
    </div>
  );
}

export default DashboardComponent;
