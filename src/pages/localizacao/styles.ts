import { StyleSheet } from 'react-native';
export const financeiroStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
  },
  topSpacing: {
    height: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#006151',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
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
    fontSize: 16,
    color: '#fff',
  },
  footer: {
    backgroundColor: '#e85858',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  contactText: {
    fontSize: 14,
    color: '#333',
  },
  contactEmail: {
    fontSize: 14,
    color: '#006151',
  },
  contactPhone: {
    fontSize: 14,
    color: '#006151',
  },
});
