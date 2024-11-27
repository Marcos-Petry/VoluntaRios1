import React from 'react';
import { View, Text } from 'react-native';
import { financeiroStyles } from './styles';

export default function TelaContato() {
  return (
    <View style={financeiroStyles.container}>
      <Text style={financeiroStyles.title}>Tela Contato</Text>
      <Text style={financeiroStyles.description}>
        Informações sobre como entrar em contato com o projeto VoluntaRios.
      </Text>
    </View>
  );
}
