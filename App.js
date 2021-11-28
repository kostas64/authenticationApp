import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import Router from './src/router/Router';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/components/AuthProvider';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from './src/reducers/rootReducer';
const store = createStore(rootReducer, applyMiddleware(thunk));

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
