import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { homeStyles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function TelaHome({ navigation }: Props) {
  return (
    <View style={homeStyles.mainContainer}>
      <ScrollView contentContainerStyle={homeStyles.contentContainer}>
        {/* Espaço no topo */}
        <View style={homeStyles.topSpacing} />

        {/* Título */}
        <Text style={homeStyles.title}>Bem-vindo ao App do VoluntaRios</Text>

        {/* Seção "Sobre Nós" */}
        <View style={homeStyles.content}>
          <Text style={homeStyles.sectionTitle}>Sobre Nós</Text>
          <Text style={homeStyles.description}>
            O Projeto VoluntáRios foi criado para conectar voluntários com empresas parceiras, oferecendo benefícios para ambos. Nosso principal objetivo é limpar e conservar o Rio Itajaí-Açu, promovendo a conscientização ambiental e criando um movimento comunitário forte e engajado. Através do nosso aplicativo, voluntários podem se beneficiar de descontos em mercados, cinemas e outros estabelecimentos participantes, enquanto ajudam a preservar o meio ambiente.
          </Text>

          {/* Imagem ilustrativa */}
          <Image
                source={require('./../../assets/IMG_0481.png')} // Substitua pela URL ou caminho local da imagem
              style={homeStyles.image}
          />
        </View>

        {/* Botões de navegação */}
        <View style={homeStyles.buttonContainer}>
          <TouchableOpacity
            style={homeStyles.button}
            onPress={() => navigation.navigate('Financeiro')}
          >
            <Text style={homeStyles.buttonText}><b>FINANCEIRO</b></Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={homeStyles.button}
            onPress={() => navigation.navigate('Localizacao')}
          >
            <Text style={homeStyles.buttonText}><b>LOCALIZAÇÃO</b></Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={homeStyles.button}
            onPress={() => navigation.navigate('Historia')}
          >
            <Text style={homeStyles.buttonText}><b>HISTÓRIA</b></Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={homeStyles.button}
            onPress={() => navigation.navigate('Contato')}
          >
            <Text style={homeStyles.buttonText}><b>CONTATOS</b></Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Botão de Login reduzido e posicionado acima do rodapé */}
      <TouchableOpacity
        style={homeStyles.loginButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={homeStyles.loginButtonText}>Ir para Login</Text>
      </TouchableOpacity>

      {/* Rodapé fixado na parte inferior */}
      <View style={homeStyles.footer}>
        <Text style={homeStyles.contactText}>Entre em contato:</Text>
        <Text style={homeStyles.contactEmail}>contato@projetovoluntarios.org</Text>
        <Text style={homeStyles.contactPhone}>(47) 1234-5678</Text>
      </View>
    </View>
  );
}
