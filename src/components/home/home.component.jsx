import React from 'react';
import { Redirect } from 'react-router-dom';

function HomeComponent() {
  return (
    <Redirect to="/dashboard" />
  );
}

export default HomeComponent;
