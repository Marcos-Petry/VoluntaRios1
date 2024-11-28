import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';
import { atividadeStyles } from './styles';

const TelaAtividade = [
  {
    id: 1,
     image: require('../../assets/img_coleta_lixo.png'),
    title: 'Coleta de lixo e concientização',
    description: 'Ajude a limpar a floresta e preservar o meio ambiente ao coletar o lixo, e ao mesmo tempo você ganha benefícios.',
    whatsappMessage: 'Olá! Gostaria de participar da atividade de coleta de lixo na floresta.',
  },
  {
    id: 2,
    image: require('../../assets/logo.png'),
    title: 'Plantio de árvores em áreas desmatadas',
    description: 'Participe do plantio de árvores em áreas afetadas pelo desmatamento, e ao mesmo tempo você ganha benefícios.',
    whatsappMessage: 'Olá! Gostaria de participar do plantio de árvores.',
  },
];

export default function ActivityScreen() {
  const handleJoin = (message: string) => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    Linking.openURL(whatsappUrl);
  };

  return (
    <View style={atividadeStyles.mainContainer}>
      <ScrollView contentContainerStyle={atividadeStyles.contentContainer}>
        {/* Espaço no topo */}
        <View style={atividadeStyles.topSpacing} />

        {/* Título */}
        <Text style={atividadeStyles.title}>Participe das Atividades!</Text>

        {/* Conteúdo das atividades */}
        {TelaAtividade.map((atividade) => (
          <View key={atividade.id} style={atividadeStyles.contentContainer}>
            <Image source={atividade.image} style={atividadeStyles.image} />
            <Text style={atividadeStyles.sectionTitle}>{atividade.title}</Text>
            <Text style={atividadeStyles.description}>{atividade.description}</Text>

            <View style={atividadeStyles.buttonContainer}>
              <TouchableOpacity
                style={atividadeStyles.button}
                onPress={() => handleJoin(atividade.whatsappMessage)}
              >
                <Text style={atividadeStyles.buttonText}>Participar</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Rodapé fixado na parte inferior */}
      <View style={atividadeStyles.footer}>
        <Text style={atividadeStyles.contactText}>Entre em contato para mais informações!</Text>
        <Text style={atividadeStyles.contactEmail}>contato@voluntarios.com</Text>
        <Text style={atividadeStyles.contactPhone}>(12) 3456-7890</Text>
      </View>
    </View>
  );
}