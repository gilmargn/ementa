import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedView } from '@/components/themed-view';
import { HeaderTitle } from '@react-navigation/elements';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#2f9ec0' }}
      headerImage={
        <Image
          source={require('@/assets/images/ifam.png')}
          style={styles.reactLogo}
        />
      }>
      <HeaderTitle className='title'>Fundamentos de Redes de Computadores</HeaderTitle>
      <ThemedView>
        
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 250,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
