import React, {useState} from 'react';
import HomeScreen from './../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import {useSelector} from 'react-redux';
import {TransitionPresets} from '@react-navigation/stack';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from './../screens/SignUpScreen.js';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

export default function Router() {
  const [isLoading, setIsLoading] = useState(false);
  const {userToken} = useSelector(state => state.userReducer);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      {userToken == null ? (
        <>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
