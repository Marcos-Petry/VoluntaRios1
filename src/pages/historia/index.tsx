import React from 'react';
import { View, Text } from 'react-native';
import { financeiroStyles } from './styles';

export default function TelaHistoria() {
  return (
    <View style={financeiroStyles.container}>
      <Text style={financeiroStyles.title}>Tela História</Text>
      <Text style={financeiroStyles.description}>
        Informações sobre a história do projeto VoluntaRios.
      </Text>
    </View>
  );
}
