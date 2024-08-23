import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './components/home/index'

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1, // Expressa a ocupação da tela inteira.
    // height: 850,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});