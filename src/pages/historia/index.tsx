import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { financeiroStyles } from './styles';

export default function TelaHistoria() {
  return (
    <View style={financeiroStyles.mainContainer}>
      <ScrollView contentContainerStyle={financeiroStyles.contentContainer}>
        {/* Espaço no topo */}
        <View style={financeiroStyles.topSpacing} />

        {/* Título */}
        <Text style={financeiroStyles.title}>História do Projeto VoluntáRios</Text>

        {/* Conteúdo da página */}
        <View style={financeiroStyles.content}>
          <Text style={financeiroStyles.sectionTitle}>O Início</Text>
          <Text style={financeiroStyles.description}>
            O Projeto VoluntáRios teve início durante a semana de Hackathon na Unidavi, com o objetivo de combater os problemas ambientais causados pelo Rio Itajaí-Açu, especialmente as cheias e a poluição. A ideia surgiu quando o grupo percebeu a necessidade urgente de envolver a comunidade local na preservação do meio ambiente.
          </Text>

          <Text style={financeiroStyles.sectionTitle}>A Evolução</Text>
          <Text style={financeiroStyles.description}>
            Desde sua criação, o projeto tem buscado formas inovadoras de incentivar a participação dos voluntários. A principal estratégia foi criar parcerias com empresas locais, oferecendo descontos e benefícios para aqueles que participam ativamente da limpeza do rio e de outras ações de preservação ambiental.
          </Text>

          <Text style={financeiroStyles.sectionTitle}>O Futuro</Text>
          <Text style={financeiroStyles.description}>
            O Projeto VoluntáRios pretende expandir sua atuação nos próximos anos, alcançando mais voluntários e criando uma rede de apoio ainda mais forte. A conscientização sobre a importância do rio e a preservação ambiental são as bases para o nosso crescimento contínuo.
          </Text>
        </View>
      </ScrollView>

      {/* Rodapé fixado na parte inferior */}
      <View style={financeiroStyles.footer}>
        <Text style={financeiroStyles.contactText}>Entre em contato:</Text>
        <Text style={financeiroStyles.contactEmail}>contato@projetovoluntarios.org</Text>
        <Text style={financeiroStyles.contactPhone}>(47) 1234-5678</Text>
      </View>
    </View>
  );
}
