import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';
import Navigation from './Navigation/navigation';
import store from './redux/store';

export default function App() {
  return (
    <Provider style={{ flex: 1 }} store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}