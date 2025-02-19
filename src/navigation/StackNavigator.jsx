import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import MyDrawer from './MyDrawer';
import PersonalDetailsScreen from '../screens/PersonalDetailsScreen';
import KYCDetailsScreen from '../screens/KYCScreen';
import PropertyDetailsScreen from '../screens/PropertyDetailsScreen';
import UploadScreen from '../screens/UploadScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={MyDrawer} options={{ headerShown: false }} />
          <Stack.Screen name="LogIn" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="PersonalDetails" component={PersonalDetailsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="KYCDetails" component={KYCDetailsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="PropertyDetails" component={PropertyDetailsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="UploadScreen" component={UploadScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default AppNavigator;