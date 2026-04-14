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
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Relações Interpessoais e Ética.</ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Ementa:</ThemedText>
        <ThemedText>
         <ThemedText type="defaultSemiBold">Ética e Moral. Ética no Mundo Contemporâneo. Liberdade, Consciência e 
Responsabilidade. Ética e Direito. Ética Profissional no âmbito das Tecnologias da 
Informação. Tendências Contemporâneas em Ética. Noções de Direito 
Constitucional. Noções de Direito Administrativo.</ThemedText>
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
            <ThemedText type="subtitle">PROGRAMA: 
              OBJETIVO GERAL.
            </ThemedText>
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
          {`Desenvolver projetos de pesquisa na área de informática.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">CONTEÚDO PROGRAMÁTICO:</ThemedText>
        <ThemedText>
          {``}
          <ThemedText type="defaultSemiBold"></ThemedText>{`1. Introdução à Metodologia Científica 
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
         
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
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
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
