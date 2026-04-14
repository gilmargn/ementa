import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
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
          source={require('@/assets/images/pro.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Projeto Integradores II</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Ementa</ThemedText>
        <ThemedText>
          Desenvolvimento de projeto contemplando a integração entre as <ThemedText type="defaultSemiBold">disciplinas 
cursadas,</ThemedText>  através da resolução de um projeto-problema proposto.
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: ' ',
            })}
          </ThemedText>{' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">Perfil Profissional do Docente</ThemedText>
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
Engenharia de Software ou Sistemas de Informação; Ou Licenciatura em: 
Informática ou Computação; Ou Cursos Superiores de Tecnologia em: Sistemas 
para Internet, Análise e Desenvolvimento de Sistemas, Banco de Dados, Sistemas 
Embarcados ou Redes de Computadores. `}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Áreas de Integração</ThemedText>
        <ThemedText>
          {`A disciplina possui integração com todas as disciplinas estudadas no 3º módulo.`}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Programa</ThemedText>
        <ThemedText type="defaultSemiBold">OBJETIVO GERAL: {'\n'}</ThemedText>
        <ThemedText>
          Despertar no discente a importância de se elaborar um projeto em informática. {'\n'}
        </ThemedText>
        <ThemedText type="defaultSemiBold">OBJETIVOS ESPECÍFICOS: {'\n'}</ThemedText>
        <ThemedText>
          1. Elaborar um projeto que integre as disciplinas do 3º módulo do Curso. {'\n'} 2. Elaborar um projeto seguindo as normas técnicas.{'\n'} 
3. Acompanhar a execução de um projeto.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Conteúdo Programático</ThemedText>
        <ThemedText>
          Conteúdo programático a critério do professor, desde que apresente o roteiro e 
critérios para a elaboração de um projeto envolvendo os conhecimentos adquiridos 
ao longo do curso.</ThemedText>
        <ThemedText>1. Elaboração de Projeto {'\n'} </ThemedText>
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
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
