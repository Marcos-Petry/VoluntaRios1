import { StyleSheet } from 'react-native';

export const atividadeStyles = StyleSheet.create({
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
    color: '#e85858', // Cor primária (verde, associado a atividades ecológicas)
    marginBottom: 20,
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
  image: {
    width: '100%',
    height: 200, // Diminuindo a altura da imagem para se ajustar melhor ao layout mobile
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 10, // Bordas arredondadas na imagem
  },
  buttonContainer: {
    marginBottom: 20,
    alignItems: 'center', // Centraliza os botões
  },
  button: {
    backgroundColor: '#e85858', // Cor do botão (verde)
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#e85858', // Cor do rodapé (verde)
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
});