import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './style';

export default function TelaLogin({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      
      {/* Campos de entrada */}
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Login" 
          style={styles.input} 
          placeholderTextColor="#999" // Cor do placeholder
        />
        <TextInput 
          placeholder="Senha" 
          secureTextEntry 
          style={styles.input} 
          placeholderTextColor="#999" // Cor do placeholder
        />
      </View>

      {/* Botão de Login */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} 
            onPress={() => navigation.navigate('Home')}>Entrar</Text>
      </TouchableOpacity>

      {/* Link para Cadastro */}
      <TouchableOpacity>
        <Text style={styles.registerText}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}
