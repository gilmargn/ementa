import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Programação Orientada a Objetos</ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">EMENTA </ThemedText>
        <ThemedText>
         Paradigma de Programação Orientada a Objetos (POO). {"\n"} Conceitos de classes, objetos, herança, encapsulamento, polimorfismo, Interfaces e exceções. {"\n"}Padrões de Projetos. Implementação utilizando linguagem de programação orientada a objetos. 
          {' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: '',
            })}
          </ThemedText>{' '}
          
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">PERFIL PROFISSIONAL DO DOCENTE</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>
          {`Bacharelado em: Ciência da Computação ou Engenharia da Computação ou 
Engenharia de Software ou Sistemas de Informação; 
Ou Licenciatura em: Informática ou Computação; 
Ou Cursos Superiores de Tecnologia em: Sistemas para Internet, Análise e 
Desenvolvimento de Sistemas, Banco de Dados, Sistemas Embarcados ou Redes 
de Computadores.  `}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">PROGRAMA : OBJETIVO GERAL </ThemedText>
        <ThemedText>
          {`Desenvolver competências e habilidades no aluno, de tal forma que compreenda e aplique os principais conceitos envolvidos com a modelagem e programação orientada a objetos (linguagem de modelagem, objetos, classes, atributos, métodos, encapsulamento, herança, polimorfismo) tornando-o apto à interpretar e criar modelos, manter e desenvolver programas orientado a objetos para resolver problemas computacionais, desde de científicos a empresarias, seguindo esse paradigma e independentemente da linguagem de programação. `}
          
        </ThemedText>
      </ThemedView>


 <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">PROGRAMA : OBJETIVO GERAL </ThemedText>
        <ThemedText></ThemedText>
        {'1. Conhecer conceitos centrais da programação orientada a objetos.\n 2. Compreender os pagadigmas da programação orientada a objetos. \n 3. Conhecer os conceitos básicos de linguagem de programação orientada a objetos. \n4. Desenvolver sistemas baseados nos conceitos formais da Orientação a Objetos. '}
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 488,
    width: 1300,
    bottom: -100,
    left: -22,
    position: 'absolute',
  },
});
