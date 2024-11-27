import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { financeiroStyles } from './styles';

export default function TelaFinanceiro() {
  return (
    <View style={financeiroStyles.mainContainer}>
      <ScrollView contentContainerStyle={financeiroStyles.contentContainer}>
        {/* Espaço no topo */}
        <View style={financeiroStyles.topSpacing} />

        {/* Título */}
        <Text style={financeiroStyles.title}>Seção Financeira</Text>

        {/* Conteúdo da página */}
        <View style={financeiroStyles.content}>
          <Text style={financeiroStyles.sectionTitle}>Transparência é prioridade</Text>
          <Text style={financeiroStyles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ex suscipit sed, voluptatum modi expedita est veniam ab facilis. Praesentium expedita ad quas fuga nemo ipsam beatae earum illum accusamus?
          </Text>

          {/* Imagem ilustrativa */}
          <Image
            source={require('../../assets/logo.png')} // Substitua pela URL ou caminho local da imagem
            style={financeiroStyles.image}
          />

          {/* Texto adicional */}
          <Text style={financeiroStyles.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus voluptatem beatae ducimus dolorem. Consequuntur in beatae error hic mollitia delectus. Eos dolorum nesciunt modi dolore quidem cum optio aliquid consequatur.
          </Text>
        </View>
      </ScrollView>

      {/* Rodapé fixado na parte inferior */}
      <View style={financeiroStyles.footer}>
        <Text style={financeiroStyles.contactText}>Entre em contato:</Text>
        <Text style={financeiroStyles.contactEmail}>financeiro@grandesite.com.br</Text>
        <Text style={financeiroStyles.contactPhone}>(12) 3456-7890</Text>
      </View>
    </View>
  );
}
