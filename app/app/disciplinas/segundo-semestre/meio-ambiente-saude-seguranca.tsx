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
          source={require('@/assets/images/ifam.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Meio Ambiente, Saúde e Segurança </ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Ementa
           </ThemedText>
        <ThemedText>
           <ThemedText >Definições. Evolução Histórica. A consciência ambiental. Sustentabilidade; A sociedade; 
Impactos ambientais; Poluição do solo; Poluição das águas; Defesa do meio ambiente; 
Estocolmo 72; Modelo consumista de desenvolvimento; Legislação Ambiental; Noções 
sobre legislação Trabalhista e Previdenciária, Noções de Normas Regulamentadoras, 
Acidentes, Riscos Ambientais.</ThemedText> 
          {' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: '',
            })}
          </ThemedText>{''}
          
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">PERFIL PROFISSIONAL 
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
          {`Engenheiro em Segurança do Trabalho ou profissional com especialização em 
Segurança do Trabalho.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">ÁREAS DE INTEGRAÇÃO 
PROGRAMA 
OBJETIVO GERAL: 
 </ThemedText>
        <ThemedText>
          {`Interpretar, acompanhar e gerenciar as questões pertinentes à Segurança, Meio 
Ambiente e Saúde. `}
          <ThemedText type="subtitle">
            OBJETIVOS ESPECÍFICOS:

          </ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>.
        </ThemedText>
      </ThemedView>

     <ThemedText>1. Entender porque surge o Pensamento Ambiental no momento de grandes mudanças 
no mundo.  
2. Compreender as transformações históricas ocorridas no mundo a partir do 
surgimento do pensamento Ambiental a partir da Revolução Industrial.  
3. Diferenciar atividades conservacionista de preservacionistas.  
4. Conhecer as leis ambientais que regem o Brasil.  
5. Compreender a importância da ciência ergonomia em sua atividade de trabalho.  
6. Entender a necessidade de utilizar os equipamentos de segurança na prática de 
suas atividades cotidianas.  
7. Aprender a identificar situações de riscos e como evitá-las. </ThemedText>

<ThemedText type="subtitle">CONTEÚDO PROGRAMÁTICO </ThemedText>
{`
1. Histórico da Formação Ambiental a partir do marco histórico da Revolução Industrial 
1.1. A modernidade da revolução industrial à acumulação flexível 
1.2. O despertar da consciência ambiental planetária 
1.3. O desenvolvimento sustentável 
1.4. A justiça social 
2. Impactos ambientais em ecossistemas naturais e em ecossistemas agrícolas 
2.1. Impactos ambientais em sistemas urbanos; 
2.2. Poluição do solo: o problema do lixo sólido; 
2.3. Poluição das águas;
2.4. Lutas em defesa do meio ambiente; 
2.5. Estocolmo72: a tomada de consciência; 
3. A falência do modelo consumista de desenvolvimento 
3.1. Noções de legislação ambiental 
4. Noções sobre legislação Trabalhista e Previdenciária 
4.1. CLT- Consolidação das Leis do Trabalho 
Capítulo V – Da Segurança e da Medicina do Trabalho  
4.2. Lei 8.213/91- Acidente do Trabalho 
Comunicação de Acidente do Trabalho 
4.3. Portaria N.° 3.214/78- Normas Regulamentadoras  
5. Acidentes  
5.1. Como evitá-los 
5.2. Causa dos Acidentes 
5.3. Atos inseguros, Condições Inseguras; 
5.4. Doenças provocadas por acidente de trabalho. 
5.5. Equipamentos de Proteção Individual 
5.6. Equipamentos de Proteção Coletiva 
6. Riscos Ambientais 
6.1. Riscos Físicos 
6.2. Riscos Químicos 
6.3. Riscos Biológicos 
6.4. Riscos Ergonômicos 
6.5. Riscos Acidentes `}

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
