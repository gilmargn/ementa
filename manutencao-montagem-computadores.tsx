import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#217a9e', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/transparent-computer-repair-logo-png.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type='title'>Montagem e manutenção de computadores!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type='subtitle'>EMENTA </ThemedText>
        <ThemedText>
          Montagem e configuração de um computador. Instalação da placa-mãe. Verificação 
de funcionamento do sistema completo.\nConfiguração do Sistema Básico de 
Inicialização. Manuseio com HD. CD-ROM.\nProcessadores. Memórias. Dispositivos 
de entrada e saída. 

          Press{' '}
          <ThemedText type='defaultSemiBold'>
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: '',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href='/modal'>
          <Link.Trigger>
            <ThemedText type='subtitle'>PERFIL PROFISSIONAL DO DOCENTE </ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title='Action' icon='cube' onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title='Share'
              icon='square.and.arrow.up'
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title='More' icon='ellipsis'>
              <Link.MenuAction
                title='Delete'
                icon='trash'
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
Ou Cursos Superiores de Tecnologia em: Redes de Computadores.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type='subtitle'>OBJETIVOS ESPECÍFICOS: </ThemedText>
        <ThemedText>
          {`1.Realizar manutenções preventiva e corretivas em microcomputadores. 
2.Compreender a necessidade de atuação profissional de acordo com as 
normas.  `}
          <ThemedText type='defaultSemiBold'></ThemedText> {' '}
          <ThemedText type='defaultSemiBold'></ThemedText>{' '}
          <ThemedText type='defaultSemiBold'></ThemedText> {' '}
          <ThemedText type='defaultSemiBold'></ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type='subtitle'>CONTEÚDO PROGRAMÁTICO  </ThemedText>
        <ThemedText></ThemedText>
        1. CONTEÚDO PROGRAMÁTICO. \n 1. Conceito básico sobre arquitetura do microcomputador.{'\n'} 1.2 Uma visão sobre Hardware (dispositivos de entrada e saída).{'\n1'}.4 Sistema binário aplicado a computação.\n1.5 Representação e unidade da informação.\n 1.6 Conexões externas (interface / portas) do computador.
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
    height: 250,
    width: 2000,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
