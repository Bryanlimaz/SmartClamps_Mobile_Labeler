import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
    return (
    <View style={styles.mainContainer}>
      <Image source={require('../../assets/SmartClamps_1.png')} />
      <Image source={require('../../assets/Loader_icon.png')} />
      <StatusBar style="auto" />
    </View>
    );
}