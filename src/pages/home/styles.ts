import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const homeStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fef7f6',
  },
  contentContainer: {
    padding: 16,
    flexGrow: 1,
  },
  topSpacing: {
    height: 30, // Espaço no topo da tela
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    alignItems: 'center',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 28,
    color: '#e85858',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#e85858',
    paddingVertical: 15,
    borderRadius: 10,
    margin: 8,
    width: (screenWidth - 64) / 2, // Ajusta largura para 2 botões por linha com espaçamento
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loginButton: {
    alignSelf: 'center',
    backgroundColor: '#e85858',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10, // Margin to separate from footer
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#fef7f6',
    alignItems: 'center',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  contactText: {
    fontWeight: 'bold',
    color: '#333',
  },
  contactEmail: {
    color: '#333',
  },
  contactPhone: {
    color: '#333',
  },
});
