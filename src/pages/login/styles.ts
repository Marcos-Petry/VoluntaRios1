import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 32,
  },
  inputContainer: {
    width: 400, // Largura fixa para o container dos inputs
    paddingHorizontal: 16, // Adiciona espaçamento nas bordas esquerda e direita
    paddingVertical: 16,
  },
  input: {
    width: width - 32,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16, // Espaçamento entre os inputs
    marginTop: 8, // Adiciona espaçamento acima de cada input
  },
  button: {
    width: 400,
    height: 50,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  registerText: {
    color: '#3498db',
    fontSize: 16,
    marginTop: 16,
  },
});

export default styles;
