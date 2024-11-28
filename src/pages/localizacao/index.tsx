import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { financeiroStyles } from './styles';

export default function TelaLocalizacao({ navigation }: { navigation: any }) {
  return (
    <View style={financeiroStyles.mainContainer}>
      <ScrollView contentContainerStyle={financeiroStyles.contentContainer}>
        {/* Espaço no topo */}
        <View style={financeiroStyles.topSpacing} />

        {/* Título */}
        <Text style={financeiroStyles.title}>Localização do Projeto VoluntaRios</Text>

        {/* Conteúdo da página */}
        <View style={financeiroStyles.contentContainer}>
          <Text style={financeiroStyles.sectionTitle}>Onde estamos?</Text>
          <Text style={financeiroStyles.description}>
            O Projeto VoluntaRios está situado no coração da cidade de Itajaí, ao longo das margens do Rio Itajaí-Açu. Nossa atuação se concentra nas áreas ribeirinhas, mas buscamos expandir nosso alcance para outras regiões do município e além.
          </Text>

          <Text style={financeiroStyles.sectionTitle}>Como Chegar?</Text>
          <Text style={financeiroStyles.description}>
            Acesse o mapa abaixo para saber como chegar até nós. Estamos sempre prontos para receber voluntários e apoiar ações de limpeza e conscientização ambiental.
          </Text>

          {/* Instruções ou Mapa (opcional) */}
          <Text style={financeiroStyles.description}>
            Em breve, você poderá visualizar um mapa interativo aqui, facilitando o acesso para todos que desejam contribuir com a causa.
          </Text>
        </View>
      </ScrollView>

      {/* Rodapé fixado na parte inferior */}
      <View style={financeiroStyles.footer}>
        <Text style={financeiroStyles.contactText}>Entre em contato:</Text>
        <Text style={financeiroStyles.contactEmail}>contato@voluntarios.com</Text>
        <Text style={financeiroStyles.contactPhone}>(12) 3456-7890</Text>
      </View>
    </View>
  );
}
