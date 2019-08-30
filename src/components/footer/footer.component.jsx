import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

function FooterComponent(props) {
  console.log(props);
  return (
    <footer>
      In Footer
      <div>
        <button type="button" onClick={() => props.history.push('/user')}>User</button>
        <button type="button" onClick={() => props.history.push('/stocks')}>Stocks</button>
        <Link to="subroute">User</Link>

        <Route
          path="/subroute"
          render={() => <span>Inside Footer Subroute</span>}
        />
      </div>
    </footer>
  );
}

export default withRouter(FooterComponent);
