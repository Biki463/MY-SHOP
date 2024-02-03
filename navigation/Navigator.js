import {View, Text} from 'react-native';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import Splash from './Splash';

import Home from '../screen/Home';
import Cart from '../screen/Cart';

import Search from '../screen/Search';
import Profile from '../screen/Profile';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
       
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="Cart"
          component={Cart}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="Search"
          component={Search}
        />
         
        <Stack.Screen
        options={{headerShown: false}}
        name="Profile"
        component={Profile}
      />
       
      
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
