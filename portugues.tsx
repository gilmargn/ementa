import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/livro.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Português Aplicado</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">EMENTA</ThemedText>
        <ThemedText>
          Leitura, análise e produção textual.{`\n`}
          Conceitos linguísticos: variedade linguística, linguagem falada e
          linguagem escrita, níveis de linguagem.{`\n`}
          Habilidades linguísticas básicas de produção textual oral e escrita.
          {`\n`}A argumentação oral e escrita Habilidades básicas de produção
          textual.{`\n`}
          Análise linguística da produção textual. Noções
          linguístico-gramaticais aplicadas ao texto.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">PERFIL PROFISSIONAL</ThemedText>
          </Link.Trigger>
        </Link>

        <ThemedText>
          {`Bacharelado ou Licenciado em Letras - Língua Portuguesa.`}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">ÁREAS DE INTEGRAÇÃO</ThemedText>
        <ThemedText>Inglês Aplicado e Informática Básica.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">OBJETIVO GERAL:</ThemedText>
        <ThemedText>
          Aperfeiçoar os conhecimentos linguísticos e as habilidades de leitura
          e produção de textos orais e escritos.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">OBJETIVOS ESPECÍFICOS:</ThemedText>
        <ThemedText>
          1. Desenvolver linguagem técnica para construção de relatórios e
          documentos em geral.{`\n`}
          2. Conhecer as mudanças mais significativas ocorridas na
          correspondência comercial/oficial.{`\n`}
          3. Utilizar técnicas para obtenção de clareza, coerência e coesão na
          elaboração dos textos.{`\n`}
          4. Rever questões gramaticais que mais provocam dúvidas na redação.
          {`\n`}
          5. Recuperar, pelo estudo de texto literário, as formas instituídas de
          construção do imaginário{`\n`}
          coletivo, patrimônio representativo da cultura e as classificações
          preservadas e divulgadas, no eixo temporal e espacial.{`\n`}
          6. Demonstrar o domínio básico da norma culta.{`\n`}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">CONTEÚDO PROGRAMÁTICO</ThemedText>

        <ThemedText type="defaultSemiBold"></ThemedText>
        <ThemedText>
          1. Importância da comunicação;{`\n`}
          2. Elementos essenciais do processo de comunicação;{`\n`}
          3. Intertextualidade;{`\n`}
          4. Ortografia;{`\n`}
          5. Pontuação;{`\n`}
          6. Concordância nominal e verbal;{`\n`}
          7. Qualidade do estilo técnico: harmonia, clareza, concisão e
          coerência;{`\n`}
          8. Frase e estrutura frasal;{`\n`}
          9. Parágrafo (estruturação);{`\n`}
          10. Correspondência e redação técnica: artigo, memorando, ofício,
          requerimento,{`\n`}
          curriculum vitae, relatório, abaixo-assinado, monografia e projeto.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">BIBLIOGRAFIA BÁSICA:</ThemedText>
        <ThemedText>
          BELTRÃO, Odacir & BELTRÃO, Maria. Correspondência, linguagem e
          comunicação. 24 ed São Paulo: Atlas, 2011.{`\n`}
          CARVALHO, A. M. P. Ensino de Língua Portuguesa. São Paulo: Cengage
          Learning, 2014.{`\n`}
          GARCIA, Othon M. Comunicação em prosa moderna. 26 ed Rio de Janeiro:
          Fundação Getúlio Vargas, 2006.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">BIBLIOGRAFIA COMPLEMENTAR:</ThemedText>
        <ThemedText>
          BENEMAN, J. M. Estudo Dirigido de Português. Ática.{`\n`}
          CARVALHO, A. M. P. Ensino de Língua Portuguesa. São Paulo: Cengage
          Learning, 2014.{`\n`}
          HOUAISS, A. Dicionário Houaiss da Língua Portuguesa. Rio de Janeiro:
          Objetiva, 2011.{`\n`}
          MARTINS, Dileta Silveira & ZILBERKNOP, Lê S. Português Instrumental.
          Porto Alegre: Sagra, 1993.{`\n`}
          TUFANO, Douglas. Estudos de Redação. São Paulo: Moderna, 1980.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">PROGRAMADO POR:</ThemedText>
        <ThemedText>Ana Beatriz Alves Porto da Silva</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 12,
  },
  reactLogo: {
    height: 300,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
