import React from 'react';
import HomeScreen from './../screens/HomeScreen';
import LoginScreen from './../screens/LoginScreen';
import {TransitionPresets} from '@react-navigation/stack';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
