import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#55ade9', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/ifam.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Estrutura de Dados</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">EMENTA</ThemedText>
        <ThemedText>Introdução à Estrutura de Dados. Estruturas de Dados Homogêneas e 
Heterogêneas. Ordenação e busca. Listas Lineares. Listas Encadeadas. Pilhas. 
Filas. Árvores Binárias.  Implementação das estruturas em uma linguagem de 
programação.</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">PERFIL PROFISSIONAL DO DOCENTE</ThemedText>
        <ThemedText>Bacharelado em: Ciência da Computação ou Engenharia da Computação ou 
Engenharia de Software ou Sistemas de Informação; 
Ou Licenciatura em: Informática ou Computação; 
Ou Cursos Superiores de Tecnologia em: Sistemas para Internet, Análise e 
Desenvolvimento de Sistemas, Banco de Dados, Sistemas Embarcados ou Redes 
de Computadores. </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">ÁREAS DE INTEGRAÇÃO </ThemedText>
        <ThemedText>Matemática e Algoritmo e Lógica de Programação </ThemedText>
      </ThemedView>
         <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">PROGRAMA</ThemedText>
        <ThemedText>OBJETIVO GERAL: 
Conhecer e entender os conceitos das estruturas de dados básicas para utilização 
adequada na implementação de soluções computacionais. 
OBJETIVOS ESPECÍFICOS: 
1. 
Identificar e descrever as estruturas de dados básicas e suas 
características; 
2. 
Explicar como e em que situações utilizar tais estruturas; 
3. 
Implementar soluções computacionais utilizando estruturas de dados 
básicas em uma linguagem de programação.</ThemedText>
      </ThemedView>
         <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">CONTEÚDO PROGRAMÁTICO</ThemedText>
        <ThemedText></ThemedText>
      </ThemedView>
         <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText></ThemedText>
      </ThemedView>
         <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText></ThemedText>
      </ThemedView>
         <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText></ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 150,
    width: 150,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
