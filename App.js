import React from 'react';
import Router from './src/router/Router';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
