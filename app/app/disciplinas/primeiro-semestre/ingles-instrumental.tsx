import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

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
          source={require('@/assets/images/ifam.png')}
          style={styles.reactLogo}
        />
      }>
        

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Inglês Aplicado</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Ementa</ThemedText>
        <ThemedText>
          Leitura e compreensão de textos técnico-científicos. Gramática aplicada. Redação 
          básica e técnica. Expressão oral.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">Perfil Profissional</ThemedText>
          </Link.Trigger>
        </Link>

        <ThemedText>
          {`Bacharelado ou Licenciado em Letras - Língua Inglesa ou Letras - Língua Estrangeira 
com influência em Inglês.`}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Áreas de Integração</ThemedText>
        <ThemedText>
          A disciplina pode ser integrada com todas as demais disciplinas do curso, visto que o 
          Inglês é considerado como a principal língua na área da Informática.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Objetivo Geral</ThemedText>
        <ThemedText>
          Capacitar o aluno a ler textos da área de informática.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Objetivos Específicos</ThemedText>
        <ThemedText>
          1. Orientar sobre a utilização de estratégias de leitura e noções da estrutura da língua inglesa.{"\n"}
          2. Propor aquisição de vocabulário técnico.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Conteúdo Programático</ThemedText>

        <ThemedText type="defaultSemiBold">1. Atividade de conscientização</ThemedText>
        <ThemedText>
          1.1. Contexto da área técnica{"\n"}
          1.2. Conceito, identificação e função de gêneros textuais{"\n"}f
          1.3. Cognatos e falsos cognatos; estrangeirismos{"\n"}
          1.4. Informação não verbal (marcas tipográficas)
        </ThemedText>

        <ThemedText type="defaultSemiBold">2. Reading Strategies</ThemedText>
        <ThemedText>
          2.1. Skimming{"\n"}
          2.2. Scanning{"\n"}
          2.3. Leitura para reconhecimento de tema central, ideia central e keywords
        </ThemedText>

        <ThemedText type="defaultSemiBold">3. Aspectos léxico-gramaticais</ThemedText>
        <ThemedText>
          3.1. Marcadores discursivos{"\n"}
          3.2. Vocabulário{"\n"}
          3.3. Formação de palavras (afixos){"\n"}
          3.4. Grupos nominais, siglas e acrônimos{"\n"}
          3.5. Referência pronominal
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Bibliografia Básica</ThemedText>
        <ThemedText>
          CRUZ, D. T. Inglês Instrumental para informática. São Paulo, Disal, 2013.{"\n"}
          DREY, R; SELISTRE, I. C. T.; AIUB, T. (Org.) Inglês: práticas de leitura e escrita. Porto Alegre: Penso, 2015.{"\n"}
          GALLO, L. R. Inglês Instrumental para Informática: módulo I. 2a ed. São Paulo: Ícone, 2014.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Bibliografia Complementar</ThemedText>
        <ThemedText>
          DAVIES, Bem P. Inglês em 50 aulas: O Guia definitivo para você aprender Inglês. 2. ed. Rio de Janeiro: LTC, 2017.{"\n"}
          GALLO, L. R. Inglês Instrumental para Informática: módulo I. 2. ed. São Paulo: Ícone, 2011.{"\n"}
          MARTINEZ, Ron. Como Dizer Tudo em Inglês. Rio de Janeiro: LTC, 2015.{"\n"}
          SOUZA, Adriana Grade Fiori, et al. Leitura em Língua Inglesa: uma abordagem instrumental – São Paulo. Disal, 2005.{"\n"}
          WOODS, Geraldine. Exercícios de Gramática Inglesa para Leigos. Rio de Janeiro: Alta Books, 2016.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Progamado por</ThemedText>
        <ThemedText>
          José Vitor Silva da Cruz
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
    marginBottom: 12,
  },
  reactLogo: {
    height: 250,
    width: 290,
    bottom: 0,
    left: 500,
    position: 'absolute',
  },
});
