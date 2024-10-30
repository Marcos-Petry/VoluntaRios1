import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fef7f6',
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 32,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  input: {
    width: width - 48, // Ajusta largura do input para se adequar à tela
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: '#fff', // Fundo branco para inputs
    color: '#333',
  },
  button: {
    width: width - 48,
    height: 50,
    backgroundColor: '#e85858',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#e85858',
    fontSize: 16,
    marginTop: 16,
    textDecorationLine: 'underline', // Destaque para o link de cadastro
  },
});

export default styles;
