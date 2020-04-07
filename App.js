import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoApp from './src/TodoApp';
import store from './src/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>

  );
}


