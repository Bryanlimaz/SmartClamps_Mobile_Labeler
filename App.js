import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer1}>
        <Text>Hello World!!</Text>
      </View>
      <View style={styles.subContainer2}>
      <Text>Hello World 2!!</Text>
      </View>
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
  },
  subContainer1: {
    display: 'flex',
    flex: 1/4,
    // width: 100,
    // height: 100,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer2: {
    display: 'flex',
    flex: 1/4,
    // width: 100,
    // height: 100,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
