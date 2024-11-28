import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
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
            No Projeto VoluntáRios, prezamos pela transparência em todas as nossas ações. Acreditamos que cada voluntário e parceiro merece saber como os recursos são administrados e aplicados para o benefício da nossa causa. Trabalhamos com seriedade e comprometimento para garantir que todas as contribuições sejam utilizadas de forma eficiente e responsável.
          </Text>

          {/* Texto adicional */}
          <Text style={financeiroStyles.description}>
            Nossos relatórios financeiros são disponibilizados regularmente, detalhando todas as receitas e despesas do projeto. Dessa forma, garantimos que todos possam acompanhar de perto a nossa evolução e os impactos positivos gerados pelo projeto VoluntáRios.
          </Text>
        </View>

        {/* Botão Voltar para a Home */}
        <TouchableOpacity
          style={financeiroStyles.backButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={financeiroStyles.buttonText}>Voltar para a Home</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Rodapé fixado na parte inferior */}
      <View style={financeiroStyles.footer}>
        <Text style={financeiroStyles.contactText}>Entre em contato:</Text>
        <Text style={financeiroStyles.contactEmail}>financeiro@projetovoluntarios.org</Text>
        <Text style={financeiroStyles.contactPhone}>(47) 1234-5678</Text>
      </View>
    </View>
  );
}
