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
      headerBackgroundColor={{ light: '#f4f1f1', dark: '#0e7a00' }}
      headerImage={
        <Image
          source={require('@/assets/images/IMAGEM.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Programação Web!
        </ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">EMENTA: </ThemedText>
        <ThemedText>
          Introdução à Web. O modelo cliente e servidor. O protocolo HTTP e sua relação com a 
Web.  Arquiteturas de desenvolvimento de aplicações para Web. Tecnologias de 
programação de aplicações para Web. Desenvolvimento de uma aplicação Web utilizando 
linguagens de programação e ambiente de desenvolvimento de software/sistema para 
Web. 
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">PERFIL PROFISSIONAL DO DOCENTE:</ThemedText>
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
          {`Bacharelado em: Ciência da Computação ou Engenharia da Computação ou Engenharia de Software ou Sistemas de Informação; Ou Licenciatura em: Informática ou Computação; Ou Cursos Superiores de Tecnologia em: Sistemas para Internet, Análise e 
Desenvolvimento de Sistemas, Banco de Dados.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">ÁREAS DE INTEGRAÇÃO:</ThemedText>
        <ThemedText>
          {`Todas as disciplinas por meio da construção de um website cujo conteúdo seja de algumas 
disciplinas do curso ou um sistema proposto em comum acordo entre docente e discentes.  

`}
         
        </ThemedText>
      </ThemedView>
       <ThemedText type="subtitle">PROGRAMA:</ThemedText>
        <ThemedText>
          {`OBJETIVO GERAL:  Demonstrar capacidade para desenvolver aplicações Web pelo conhecimento prático sobre  
tecnologias Web e o entendimento sobre como é construída e funciona uma aplicação 
Web.

OBJETIVOS ESPECÍFICOS: 
1. Explicar a arquitetura de uma aplicação Web e seu funcionamento baseado no 
protocolo HTTP; 
2. Identificar e utilizar tecnologias de software para desenvolvimento de aplicações 
Web; 
3. Implementar uma aplicação Web. 

`}
        </ThemedText>
        <ThemedText type="subtitle">CONTEÚDO PROGRAMÁTICO:</ThemedText>
        <ThemedText>
          {`1. Introdução ao paradigma cliente/servidor 
2. Programação Front-End 
2.1. Linguagem de Marcação: blocos de montagem de páginas HTML, trabalhando com arquivos de páginas Web, Estrutura básica do HTML, Texto, Imagens, Links. 
2.2. Linguagem de Estilo: blocos de montagem do CSS, trabalhando com folhas de estilo, 
definindo seletores, formatação de textos com estilos, layout com estilos, folhas de 
estilo de portáteis e desktop, fontes web. 
2.3. Linguagem de Script: introdução, operações aritméticas, desvios condicionais, 
estruturas de repetição, arrays, funções, validação de dados de entrada de 
formulários. 
2.4. Especificações Web Standard e Padrões de Acessibilidade 
3. Programação Back-End 
3.1. Desenvolvimento de Aplicações Web 
3.2. Manipulação de dados de formulários 
3.3. Integração com banco de dados 
3.4. Gerenciamento de Sessões 
4. Desenvolvimento de Projeto Web Fullstack

`}
        </ThemedText>
         <ThemedText type="subtitle">BIBLIOGRAFIA BÁSICA:</ThemedText>
        <ThemedText>
          {`GILMORE, W. Jason. Dominando PHP e MySQL – Do Iniciante ao Profissional. 3ª Ed. 
Rio de Janeiro: Alta Books, 2008.  
NIEDERST, Jennifer.  Aprenda Web Design. – Rio de Janeiro: Editora Ciência Moderna 
Ltda, 2002. 
SOARES, Bruno Augusto lobo. Aprendendo a Linguagem PHP. – Rio de Janeiro: Editora 
Ciência Moderna Ltda, 2007. 

`}
        </ThemedText>
         <ThemedText type="subtitle">BIBLIOGRAFIA COMPLEMENTAR:</ThemedText>
        <ThemedText>
          {`TONSIG, S. Luiz. Recursos Visuais na Web com PHP.  1ª Ed. Rio de Janeiro: Ciência 
Moderna, 2009.
ROBBINS, J. Niederst. Aprendendo Web Design: Guia para iniciantes. 3ª Ed. Bookman: 
Porto Alegre, 2010. 
SILVA, Maurício Samy. Fundamentos de HTML5 e CSS3. Novatec, 2015.
SILVA, M. Samy. HTML 5. 1ª Ed. Novatec: São Paulo, 2011.
TANSLEY, David. Como criar Web Pages rápidas e eficientes usando PHP e MySQL.
Rio de Janeiro: Editora Ciência Moderna Ltda, 2002.

`}
        </ThemedText>
        <ThemedText type="subtitle">PROGRAMADO POR: </ThemedText>
        <ThemedText>
          {`PAULO JORGE LIMA DA SILVA `}
        </ThemedText>
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
    width: 180,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
