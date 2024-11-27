import React from 'react';
import { View, Text } from 'react-native';
import { financeiroStyles } from './styles';

export default function TelaLocalizacao() {
  return (
    <View style={financeiroStyles.container}>
      <Text style={financeiroStyles.title}>Tela Localização</Text>
      <Text style={financeiroStyles.description}>
        Informações sobre a localização do projeto VoluntaRios.
      </Text>
    </View>
  );
}
