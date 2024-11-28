import { StyleSheet } from 'react-native';

export const financeiroStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8', // Cor de fundo mais clara
    padding: 20,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  topSpacing: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e85858', // Mantém a cor do título
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 10,
  },
  contactInfo: {
    color: '#e85858', // Destacar informações de contato
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#e85858', // Cor de fundo do botão
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#e85858', // Rodapé com cor personalizada
    paddingVertical: 10,
    alignItems: 'center',
  },
  contactText: {
    color: '#fff',
    fontSize: 16,
  },
  contactEmail: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  contactPhone: {
    color: '#fff',
    fontSize: 16,
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
});
