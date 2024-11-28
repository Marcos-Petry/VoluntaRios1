import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from './src/pages/login';
import TelaHome from './src/pages/home';
import TelaFinanceiro from './src/pages/financeiro';
import TelaLocalizacao from './src/pages/localizacao';
import TelaHistoria from './src/pages/historia';
import TelaContato from './src/pages/contato';
import TelaAtividade from './src/pages/atividade';

// Definindo o tipo RootStackParamList para as rotas
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Financeiro: undefined;
  Localizacao: undefined;
  Historia: undefined;
  Contato: undefined;
  Atividade: undefined;
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
        <Stack.Screen
          name="Financeiro"
          component={TelaFinanceiro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Localizacao"
          component={TelaLocalizacao}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Historia"
          component={TelaHistoria}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Contato"
          component={TelaContato}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Atividade"
          component={TelaAtividade}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );

}