import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from './src/pages/login';
import TelaHome from './src/pages/home';

// Definindo o tipo RootStackParamList para as rotas
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

// Criando o Stack Navigator
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={TelaHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={TelaLogin}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
