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
          source={require('@/assets/images/banco-de-dados.webp')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Fundamentos e Modelagem de Banco de Dados</ThemedText>
      
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">  Ementa: </ThemedText>
        <ThemedText type="subtitle">
         <ThemedText type="defaultSemiBold"> </ThemedText > 
          {'Introdução a Banco de Dados:  '}
          <ThemedText type="defaultSemiBold"> 
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: ' ',
            })}
          </ThemedText>{' '}
        </ThemedText> 
 </ThemedView>
  Projeto e Ciclo de Vida de um Banco de Dados.
Modelagem de Dados. Modelo Entidade Relacionamento. Modelo Relacional. Modelo
Físico. Sistemas de Gerenciamento de Banco de Dados. Tipos de dados.
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle"> 
PERFIL PROFISSIONAL
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
          {''}
        </ThemedText>Bacharelado em: Ciência da Computação ou Engenharia da Computação ou
Engenharia de Software ou Sistemas de Informação;
Ou Licenciatura em: Informática ou Computação;
Ou Cursos Superiores de Tecnologia em: Sistemas para Internet, Análise e
Desenvolvimento de Sistemas, Banco de Dados, Sistemas Embarcados ou Redes de
Computadores.
      </ThemedView>
      <ThemedView style={styles.stepContainer}> ÁREAS DE INTEGRAÇÃO:
Projeto Integrador 1
        <ThemedText type="subtitle">PROGRAMA
</ThemedText>
<ThemedText type="subtitle">OBJETIVO GERAL:</ThemedText>
        <ThemedText>
</ThemedText>
        <ThemedText>
{`1. Fornecer aos alunos conceitos iniciais de banco de dados.
2. Capacitar o aluno para modelar dados no intuito de desenvolver um sistema de
banco de dados utilizando um sistema gerenciador de banco de dados. 
`}
<ThemedText type="subtitle">CONTEÚDO PROGRAMÁTICO:</ThemedText>

{`
1. Introdução a Banco de Dados.
2. Projeto e Ciclo de Vida de um Banco de Dados.
3. Modelagem de Dados.
4. Modelo Entidade Relacionamento.
5. Modelo Relacional.
6. Modelo Físico.
7. Ferramentas de Modelagem de Dados 
`}

          <ThemedText type="defaultSemiBold"> </ThemedText> {' '}
          <ThemedText type="defaultSemiBold">  </ThemedText> {' '}
          <ThemedText type="defaultSemiBold"> </ThemedText> {' '}
          <ThemedText type="defaultSemiBold"> </ThemedText>
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
    height: 200,
    width: 2050,
    bottom: 0,
    left: 0,
    position: 'absolute',
  }
});
