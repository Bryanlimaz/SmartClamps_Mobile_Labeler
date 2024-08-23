import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Animated, Easing } from 'react-native';
import { useEffect, useRef } from 'react';
import Logo from '../../assets/SmartClamps_1.png';
import LoadIcon from '../../assets/Loader_icon.png';

export default function Loading() {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spinAnimation = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    spinAnimation.start();

    return () => spinAnimation.stop();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.mainContainer}>
      <Image source={Logo} alt='Logo' style={styles.logo} />
      <Animated.Image
        source={LoadIcon}
        alt='Spin_Icon'
        style={[styles.animation, { transform: [{ rotate: spin }] }]}
      />
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
  logo: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  animation: {
    width: 50,
    height: 50,
  },
});