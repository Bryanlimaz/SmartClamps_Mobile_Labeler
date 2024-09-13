import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import logoImage from '../../../assets/SmartClamp1.png'

export const OpenLoading = () => {
  return (
    <View style={styles.mainContainer}>
      <Text></Text>
      <Image style={styles.logo} source={logoImage} />
      <Text style={styles.presentationTxt}>Smart Clamps</Text>
      <Text>Otimizando tempo e salvando vidas</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'colum',
    flex: 1, // Expressa a ocupação da tela inteira.
    // height: 850,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
    logo: {
      width: 215,
      height: 205
    },
    presentationTxt: {
      fontFamily: '',
      fontSize: 34,
      marginTop: 10
    }
});
