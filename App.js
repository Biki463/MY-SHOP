import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Main from './navigation/Main';
import { Provider } from 'react-redux';
import { mystore, store } from './redux/Store';


const App = () => {
  return (
   <Provider store ={mystore}><Main/></Provider>
  );
};

export default App;
