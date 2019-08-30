import React, { Component } from 'react';
import { Prompt, Route } from 'react-router-dom';

const StatsComponent = () => (
  <div> Showing Stats </div>
);

const NewsComponent = () => (
  <div> Showing News </div>
);

const TrendingComponent = () => (
  <div> Showing Trends </div>
);

const STOCK_ROUTES = [
  {
    path: 'stats',
    component: StatsComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'trending',
    component: TrendingComponent,
  },
];

class StockListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormSubmitted: false,
    };
  }

  componentDidMount() {
    console.log('Inside StockList component\'s componentWillMount fn');
  }

  componentWillUnmount() {
    console.log('Inside User component\'s componentWillUnmount fn');
  }

  handleFormSubmit = () => {
    // event.prevenDefault();
    this.setState({ isFormSubmitted: true });
  };

  handleInputChange = (event) => {
    console.log(event.target.value);
  };

  render() {
    const { match } = this.props;
    const { isFormSubmitted } = this.state;

    return (
      <div>
          Inside Stocks, try /stocks/stats or /stocks/news or /stocks/trending
        {
            STOCK_ROUTES.map((route) => (
              <Route
                key={route.path}
                path={`${match.url}/${route.path}`}
                component={route.component}
              />
            ))
        }
        <div className="form-group">
          <label>Username</label>
          <input id="username" type="text" onChange={this.handleInputChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input id="password" type="password" onChange={this.handleInputChange} />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input id="confirm-password" type="password" onChange={this.handleInputChange} />
        </div>
        <button onClick={this.handleFormSubmit} type="submit">
          Submit
        </button>
        {/* <Prompt message="Are you sure?" /> */}
        {/* <Prompt */}
        {/*  when={isFormSubmitted} */}
        {/*  message="Are you sure?" */}
        {/* /> */}
        <Prompt
          when={isFormSubmitted}
          message={
            (location) => `Are you sure you want to ${location.pathname}?`
          }
        />
      </div>
    );
  }
}

export default StockListComponent;
