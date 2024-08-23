import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/SmartLogo.png';

export default function Home() {
  const navigation = useNavigation();

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        Alert.alert('Sucesso', 'Você saiu com sucesso.');
        navigation.navigate('Login'); // Navega para a tela de login
      })
      .catch((error) => {
        console.error('Erro ao fazer logout:', error);
        Alert.alert('Erro', 'Erro ao fazer logout: ' + error.message);
      });
  };

  const handleTutorialsClick = () => {
    navigation.navigate('Tutorial'); // Navega para a tela de tutoriais
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoIconContainer}>
        <Image source={Logo} style={styles.logo} />
        <FontAwesome name="user" style={styles.userIcon} />
        <View style={styles.line}></View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <FontAwesome name="sign-out" style={styles.icon} />
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>

      <View style={styles.navbar}>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Navegar para Cadastro')}>
          <Text style={styles.buttonText}>Cadastro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Navegar para Relatórios')}>
          <Text style={styles.buttonText}>Relatórios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleTutorialsClick}>
          <FontAwesome name="book" style={styles.icon} />
          <Text style={styles.buttonText}>Tutoriais</Text>
        </TouchableOpacity>
        <Text style={styles.linkText}>Sem saber para onde ir? Acesse</Text>
      </View>

      <TouchableOpacity style={styles.supportLink} onPress={() => navigation.navigate('Suporte')}>
        <Text style={styles.buttonText}>Suporte</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>SmartClamps</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logoIconContainer: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  userIcon: {
    position: 'absolute',
    top: 10,
    right: 20,
    fontSize: 72,
    color: '#5271FF',
  },
  line: {
    width: '80%',
    height: 2,
    backgroundColor: '#314290',
    marginTop: 30,
  },
  logoutButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5271FF',
    padding: 10,
    borderRadius: 5,
  },
  icon: {
    marginRight: 10,
    color: '#fff',
    fontSize: 18,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  navbar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#5271FF',
    padding: 15,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linkText: {
    color: '#7B7B7B',
    marginTop: 20,
    textAlign: 'center',
  },
  supportLink: {
    marginBottom: 20,
  },
  footerText: {
    position: 'absolute',
    bottom: 30,
    fontSize: 24,
    color: '#7B7B7B',
    textAlign: 'center',
  },
});