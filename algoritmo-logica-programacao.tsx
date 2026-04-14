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
          source={require('@/assets/images/algoritmo.avif')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Disciplina: Algoritmo e Lógica de Programação </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Ementa:</ThemedText>
        <ThemedText>
        <ThemedText>
          {`Definições. Linguagem algorítmica. Variáveis e expressões aritméticas. Entrada e saída. Estruturas de controle sequencial, condicional e repetitiva. Processamento de cadeias de caracteres. Modularização. Mecanismos de passagem de parâmetros. 
Linguagem de programação estruturada. `}
        </ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">PERFIL PROFISSIONAL </ThemedText>
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
          {`Bacharelado em: Ciência da Computação ou Engenharia da Computação ou Engenharia de Software ou Sistemas de Informação; Ou Licenciatura em: Informática ou Computação; 
Ou Cursos Superiores de Tecnologia em: Sistemas para Internet, Análise e Desenvolvimento de Sistemas, Banco de Dados, Sistemas Embarcados ou Redes de Computadores.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">ÁREAS DE INTEGRAÇÃO </ThemedText>
        <ThemedText>
          {`Definições. Linguagem algorítmica. Variáveis e expressões aritméticas. Entrada e saída. Estruturas de controle sequencial, condicional e repetitiva. Processamento de cadeias de caracteres. Modularização. Mecanismos de passagem de parâmetros. 
Linguagem de programação estruturada. `}
        </ThemedText>
      </ThemedView>
      <ThemedText type="subtitle">PROGRAMA:</ThemedText>
      <ThemedText type="subtitle">OBJETIVO GERAL: </ThemedText>
       <ThemedText>
          {`Proporcionar o contato com os principais conceitos de Lógica de Programação, identificando e desenvolvendo modelos matemáticos para resolução de problemas através da implementação e consolidação da lógica algorítmica.  `}
        </ThemedText>
      <ThemedText type="subtitle">OBJETIVO ESPECÍFICOS: </ThemedText>
      <ThemedText>
        {`1. Desenvolver raciocínio lógico. \n2. Resolver problemas utilizando linguagem de descrição narrativa, fluxogramas e pseudo linguagem.\n3. Implementar algoritmos utilizando a linguagem de programação estruturada.   `}
        </ThemedText>
        <ThemedText type="subtitle">CONTEÚDO PROGRAMÁTICO</ThemedText>
        <ThemedText>
          {`1. Noções de Raciocínio Lógico \n2. Noção de algoritmo \n3. Estrutura de um programa \n4. Representação da Informação: \n     4.1. Tipos primitivos: Constantes e variáveis; formação de identificadores; declaração de variáveis. \n     4.2.Comentários. \n     4.3. Comando de atribuição; \n     4.4. Expressões aritméticas; operadores aritméticos; funções matemáticas; precedência de operadores. \n     4.5. Expressões lógicas; operadores relacionais; operadores lógicos tabela verdade; precedência de operadores. \n     4.6. Blocos \n5. Entrada e saída de dados. \n6. Estruturas e comandos de seleção simples e composta. \n7. Estrutura e comandos de repetição. \n8. Estruturas de controle: \n      8.1. Sequencial; \n      8.2. Seleção; \n      8.3. Repetição. \n9. Modularização: conceitos; refinamento; funções e procedimentos; variáveis públicas e locais; parâmetros. \n10. Implementação de algoritmos em uma linguagem de programação estruturada. `}
        </ThemedText>
        <ThemedText type="subtitle">BIBLIOGRAFIA BÁSICA: </ThemedText>
        <ThemedText>{`FORBELLONE, A. L. V.; EBERSPÄCHER, H. F. Lógica de Programação: A construção de algoritmos e estruturas de dados. 3ª ed. São Paulo: Makron Books, 2005. \nMANZANO, José Augusto N. G.; OLIVEIRA, Jayr Figueiredo de. Algoritmos: Lógica Para Desenvolvimento de Programação de Computadores. 26ª ed. São Paulo: Erica, 2010. \nXAVIER, Gley F. C. Lógica de Programação. 12ª ed São Paulo: Senac, 2011.`}</ThemedText>
        <ThemedText type="subtitle">BIBLIOGRAFIA COMPLEMENTAR:</ThemedText>
        <ThemedText>{`BARRY, P.; GRIFFITHS, D. Use a cabeça: Programação. Rio de Janeiro: Alta Books, 2010. ISBN: 9788576084730. \nMENEZES, Nilo Ney C. Introdução à Programação com Python: Algoritmos e lógica de programação para iniciantes. 2. ed. São Paulo: Novatec, 2014. ISBN: 9788575224083. \nDEITEL, P. DEITEL, H. C: como programar. 6. ed. São Paulo: Pearson Prentice Hall, 2011. ISBN: 9788576059349. \nVAREJÃO, Flavio Miguel. Introdução à programação: Uma Nova Abordagem Usando C. Rio de Janeiro: Elsevier, 2015. SOUZA, João. Lógica Para Ciência da Computação e Áreas Afins. 3. ed. Rio de Janeiro, Campus, 2014. ISBN: 9788535278248.`}</ThemedText>
        <ThemedText type="subtitle">ELABORADO POR:</ThemedText>
        <ThemedText>{`Ryan Souza da Silva`}</ThemedText>
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
    width: 1900,
    position: 'absolute',
  },
});
