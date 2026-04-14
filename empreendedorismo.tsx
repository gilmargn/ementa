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
          source={require('@/assets/images/ddd.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Empreendedorismo</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">EMENTA </ThemedText>
        <ThemedText>
          Visão geral sobre empreendedorismo.{'\n'} Perfil do empreendedor.{'\n'} Identificando
          oportunidades de negócio.{'\n'} Empreendimentos de base tecnológica.{'\n'} Plano de
          negócios.{'\n'} Ferramentas de Planos de Negócios. <ThemedText type="defaultSemiBold">
          </ThemedText> {' '}
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
            <ThemedText type="subtitle">PERFIL PROFISSIONAL DO DOCENTE </ThemedText>
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
          {`Profissional graduado na área de Administração, Economia ou Computação, com 
conhecimento em empreendedorismo de base tecnológica.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">ÁREAS DE INTEGRAÇÃO </ThemedText>
        <ThemedText>São área de integração o Projeto de Informática, Relações Interpessoais e Ética.
          {`\n`}
          <ThemedText type="subtitle">PROGRAMA </ThemedText> {'\n'}
          OBJETIVO GERAL:{'\n'}
          Fornecer uma visão geral sobre empreendedorismo de base tecnológica. Despertar
          o espírito empreendedor dos discentes.{'\n'} OBJETIVO ESPECIFICO:{'\n'} 1.Fornecer aos discentes conceitos sobre empreendedorismo.{'\n'}
          2.Capacitar os alunos sobre o processo de elaboração do plano de negócio
          de uma empresa de base tecnológica.{'\n'}
          3.Identificar oportunidades de negócios na sua região.{'\n'}
          <ThemedText type="subtitle">CONTEÚDO PROGRAMÁTICO</ThemedText> {'\n'}
          1. Por que estudar administração{'\n'}
          1.1.
          Conceitos de gestão {'\n'}
          1.2.{'\n'}
          1.3.{'\n'}
          As funções do Administrador
          Finalidades e importância da administração para os empreendimentos
          humanos {'\n'}
          1.4.{'\n'}
          Importância do Relacionamento Interpessoal para as empresas {'\n'}
          1.5.{'\n'}
          1.6.{'\n'}
          O processo de Comunicação
          Liderança e Motivação  {'\n'} </ThemedText>
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
