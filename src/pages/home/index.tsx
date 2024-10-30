import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
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
          <Text style={homeStyles.sectionTitle}>Sobre nós</Text>
          <Text style={homeStyles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>

          <View style={homeStyles.buttonContainer}>
            <TouchableOpacity style={homeStyles.button}>
              <Text style={homeStyles.buttonText}>financeiro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyles.button}>
              <Text style={homeStyles.buttonText}>local</Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyles.button}>
              <Text style={homeStyles.buttonText}>história</Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyles.button}>
              <Text style={homeStyles.buttonText}>contatos</Text>
            </TouchableOpacity>
          </View>
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
        <Text style={homeStyles.contactEmail}>ola@grandesite.com.br</Text>
        <Text style={homeStyles.contactPhone}>(12) 3456-7890</Text>
      </View>
    </View>
  );
}
