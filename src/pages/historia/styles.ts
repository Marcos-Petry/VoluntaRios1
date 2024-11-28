import { StyleSheet } from 'react-native';

export const financeiroStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Cor de fundo padrão
  },
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  topSpacing: {
    height: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#e85858', // Cor primária
    marginBottom: 20,
  },
  content: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 20, // Adicionando espaço entre a seção e o rodapé
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
    lineHeight: 22,
  },
  footer: {
    backgroundColor: '#e85858',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  contactText: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 5,
  },
  contactEmail: {
    color: '#ffffff',
    fontSize: 14,
  },
  contactPhone: {
    color: '#ffffff',
    fontSize: 14,
  },
  backButton: {
    backgroundColor: '#ff6347', // Cor do botão de voltar
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
