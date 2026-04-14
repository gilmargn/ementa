import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ffffff', dark: '#314152db' }}
      headerImage={
        <Image
          source={require('@/assets/images/ifam.png')}
          style={styles.reactLogo}
        />
      }
    >

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="title" style={styles.title}>
          MATEMÁTICA APLICADA
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.title}>
          EMENTA
        </ThemedText>

        <ThemedText>
          • Operações aritméticas fundamentais{'\n'}
          • Expressões numéricas{'\n'}
          • Regra de três{'\n'}
          • Porcentagem{'\n'}
          • Médias{'\n'}
          • Geometria plana e espacial{'\n'}
          • Juros{'\n'}
          • Matrizes{'\n'}
          • Vetores{'\n'}
          • Raciocínio lógico
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.title}>
          PERFIL PROFISSIONAL DO DOCENTE
        </ThemedText>

        <ThemedText>
          Bacharelado ou Licenciado em Matemática.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.title}>
          PROGRAMA/OBJETIVOS
        </ThemedText>

        <ThemedText>
          Fornecer subsídios relacionados à Matemática para uso em disciplinas técnicas.
        </ThemedText>

        <ThemedText type="subtitle" style={styles.title}>
          OBJETIVOS ESPECÍFICOS
        </ThemedText>

        <ThemedText>
          1. Resolver expressões numéricas.{'\n'}
          2. Resolver problemas com regra de três e porcentagem.{'\n'}
          3. Calcular médias.{'\n'}
          4. Trabalhar trigonometria.{'\n'}
          5. Calcular área e volume.{'\n'}
          6. Resolver juros.{'\n'}
          7. Operar matrizes.{'\n'}
          8. Reconhecer vetores.{'\n'}
          9. Desenvolver raciocínio lógico.
        </ThemedText>

        <ThemedText type="subtitle" style={styles.title}>
          CONTEÚDO PROGRAMÁTICO
        </ThemedText>

        <ThemedText>
          1.  Conjuntos numéricos.{'\n'}
          2.  Operações aritméticas.{'\n'}
          3.  Expressões numéricas.{'\n'}
          4.  Regra de três.{'\n'}
          5.  Porcentagem.{'\n'}
          6.  Média aritmética.{'\n'}
          7.  Trigonometria.{'\n'}
          8.  Área.{'\n'}
          9.  Volume.{'\n'}
          10. Juros.{'\n'}
          11. Matrizes.{'\n'}
          12. Vetores.{'\n'}
          13. Raciocínio lógico.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.title}>
          BIBLIOGRAFIA
        </ThemedText>

        <ThemedText>
          GARCIA; SOUZA. Contato Matemática Vol.1{'\n'}
          GARCIA; SOUZA. Contato Matemática Vol.2{'\n'}
          GARCIA; SOUZA. Contato Matemática Vol.3
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.title}>
          BIBLIOGRAFIA COMPLEMENTAR
        </ThemedText>

        <ThemedText>
          DANTE. Matemática Vol.1{'\n'}
          DANTE. Matemática Vol.2{'\n'}
          DANTE. Matemática Vol.3{'\n'}
          PAIVA. Matemática Vol.1{'\n'}
          PAIVA. Matemática Vol.2{'\n'}
          PAIVA. Matemática Vol.3
        </ThemedText>
      </ThemedView>
      <ThemedText type="subtitle" 
       style={styles.title}>
          CONTEÚDO PROGRAMÁTICO
        </ThemedText>
        <ThemedText>
          Comissão de Harmonização dos Cursos da EPTNM
        </ThemedText>


    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    marginBottom: 12,
  },
  title: {
    backgroundColor:'#314152db',
    borderWidth:1,
    color:'#fffefe',
    borderColor:'#000',
    padding:8,
    marginBottom:10,
  },
  reactLogo: {
    height: 600,
  },
});