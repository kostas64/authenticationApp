import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import Router from './src/router/Router';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/components/AuthProvider';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from './src/reducers/reducers';

const store = createStore(reducers, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </NavigationContainer>
    </Provider>
  );
}
