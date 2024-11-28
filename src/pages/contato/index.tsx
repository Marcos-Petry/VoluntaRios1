import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { financeiroStyles } from './styles';

export default function TelaContato() {
  return (
    <View style={financeiroStyles.mainContainer}>
      <ScrollView contentContainerStyle={financeiroStyles.contentContainer}>
        {/* Espaço no topo */}
        <View style={financeiroStyles.topSpacing} />

        {/* Título */}
        <Text style={financeiroStyles.title}>Entre em Contato Conosco</Text>

        {/* Conteúdo da página */}
        <View style={financeiroStyles.contentContainer}>
          <Text style={financeiroStyles.sectionTitle}>Estamos aqui para ajudar!</Text>
          <Text style={financeiroStyles.description}>
            Caso tenha alguma dúvida ou queira saber mais sobre o Projeto VoluntaRios, não hesite em entrar em contato conosco.
            Nosso time está sempre disponível para esclarecer qualquer questão e ajudá-lo a fazer parte dessa causa tão importante.
          </Text>

          <Text style={financeiroStyles.sectionTitle}>Informações de Contato</Text>
          <Text style={financeiroStyles.description}>
            E-mail: <Text style={financeiroStyles.contactInfo}>contato@voluntarios.com</Text>
          </Text>
          <Text style={financeiroStyles.description}>
            Telefone: <Text style={financeiroStyles.contactInfo}>(12) 3456-7890</Text>
          </Text>
          
          <View style={financeiroStyles.buttonContainer}>
            {/* Botões para redirecionamento */}
            <TouchableOpacity
              style={financeiroStyles.button}
              onPress={() => alert('Redirecionando para o WhatsApp')}
            >
              <Text style={financeiroStyles.buttonText}>Fale Conosco no WhatsApp</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={financeiroStyles.button}
              onPress={() => alert('Abrindo o formulário de contato')}
            >
              <Text style={financeiroStyles.buttonText}>Preencha o Formulário de Contato</Text>
            </TouchableOpacity>
          </View>
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
