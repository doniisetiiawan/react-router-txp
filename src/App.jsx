import React from 'react';
import { Route } from 'react-router-dom';
import HomeComponent from './components/home/home.component';
import DashboardComponent from './components/dashboard/dashboard.component';
import './App.css';

function App() {
  return (
    <div className="container">
      <Route
        path="/home"
        component={HomeComponent}
      />
      <Route
        path="/dashboard"
        component={DashboardComponent}
      />
    </div>
  );
}

export default App;
