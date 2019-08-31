import React from 'react';
import { Redirect } from 'react-router-dom';

function HomeComponent(props) {
  const { match } = props;
  return (
    <div>
      {/*<Redirect to="/dashboard" push />*/}
      <Redirect
        to={{
          pathname: '/dashboard',
          search: '?q=1',
          hash: '#hash',
          state: { from: match.url },
        }}
        exact
      />
    </div>

  );
}

export default HomeComponent;
