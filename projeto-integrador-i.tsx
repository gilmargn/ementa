import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1e5566' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.reactCapa}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">               PROJETO INTEGRADOR I</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">EMENTA</ThemedText>
        <ThemedText><b>INTRODUÇÃO:</b></ThemedText>
         <ThemedText type="defaultSemiBold">
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
            })}
          </ThemedText>{''}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText>Métodos e técnicas de pesquisa. Elaboração e apresentação do trabalho técnico
científico. Principais normas dos trabalhos acadêmicos, conforme as normas 
vigentes da ABNT. Desenvolvimento de projeto contemplando a integração entre as 
disciplinas cursadas, através da resolução de um projeto-problema proposto. </ThemedText>
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
          <b>MÓDULO: 2°</b>
           {`
CH Teórica: 20h
CH Prática: 20h
CH EAD: -
CH Semanal: 2h
CH Semestral: 40h `}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">CONTEÚDO PROGRAMADO</ThemedText>
        <ThemedText>
          {`1. Introdução à Metodologia Científica 
1.1. O que é método científico 
1.2. Principais técnicas de pesquisa 
1.3. A pesquisa na Computação 
2. Elaboração de Projeto 
2.1. Definição do Projeto 
2.2. Elaboração do tema e dos objetivos do Projeto 
2.3. Definição do cronograma de atividades 
2.4. Revisão da literatura 
2.5. A importância de gerenciar as etapas de desenvolvimento do projeto 
3. Normas Acadêmicas 
3.1. Principais normas da ABNT para elaboração de projetos e relatórios 
3.2. Artigos científico 
4. Desenvolvimento e Apresentação do Projeto 
4.1. Acompanhamento das etapas do projeto `}
          <ThemedText type="defaultSemiBold">
            </ThemedText>{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {''}
          <ThemedText type="defaultSemiBold"></ThemedText>.
        </ThemedText>
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
  reactCapa: {
    height: 100,
    width: 990,
    bottom: 0,
    left: 0,
    position: 'relative',
  },
});
