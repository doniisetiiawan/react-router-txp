import React, { Component } from 'react';
import { Route } from 'react-router-dom';

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
  componentDidMount() {
    console.log('Inside StockList component\'s componentWillMount fn');
  }

  componentWillUnmount() {
    console.log('Inside User component\'s componentWillUnmount fn');
  }

  render() {
    const { match } = this.props;

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
      </div>
    );
  }
}

export default StockListComponent;
