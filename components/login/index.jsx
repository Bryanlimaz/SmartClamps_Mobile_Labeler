import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';
import { useNavigation } from '@react-navigation/native'; // Para navegação no React Native
import { FontAwesome } from '@expo/vector-icons'; // Pacote de ícones compatível com o React Native

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState(null);
  const navigation = useNavigation();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const handleSignIn = () => {
    signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential.user) {
          Alert.alert('Sucesso', 'Login bem-sucedido!');
          navigation.navigate('Home'); // Navega para a tela "Home"
        } else {
          Alert.alert('Erro', 'Erro ao fazer login: Usuário não encontrado.');
        }
      })
      .catch((error) => {
        Alert.alert('Erro', 'Erro ao fazer login: ' + error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleKeyPress = (e) => {
    if (e.nativeEvent.key === 'Enter') {
      handleSignIn();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.formContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <FontAwesome name="user" style={styles.icon} />

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Senha"
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!showPassword}
            onKeyPress={handleKeyPress}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.passwordToggle}>
            <FontAwesome name={showPassword ? "eye-slash" : "eye"} size={20} color="gray" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Recuperacao')} style={styles.forgotPassword}>
          <Text style={styles.link}>Esqueceu a senha? Recuperar agora</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Deseja adquirir uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Suporte')}>
          <Text style={styles.link}>Contacte nosso suporte.</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  formContainer: {
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 40,
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: 15,
    fontSize: 20,
    color: 'gray',
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordToggle: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotPassword: {
    alignItems: 'center',
    marginBottom: 20,
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    marginBottom: 5,
  },
});