import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#1f8188e3', dark: '#d8111186' }}
      headerImage={
        <Image
          source={require('@/assets/images/homem.img.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"><b>Interação Homem-Computador!</b></ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"><b>EMENTA:</b></ThemedText>
        <ThemedText>Fatores humanos em software interativo. Padrões e estilos de interação. Atributos 
de qualidade em IHC. Métodos e técnicas de análise, projeto, implementação e 
avaliação em IHC. 
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
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
            <ThemedText type="subtitle">PERFIL PROFISSIONAL DO DOCENTE</ThemedText>
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
          {`Bacharelado em: Ciência da Computação ou Engenharia da Computação ou 
Engenharia de Software ou Sistemas de Informação; 
Ou Licenciatura em: Informática ou Computação; 
Ou Cursos Superiores de Tecnologia em: Sistemas para Internet, Análise e 
Desenvolvimento de Sistemas, Banco de Dados, Sistemas Embarcados ou Redes 
de Computadores. `}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">ÁREAS DE INTEGRAÇÃO</ThemedText>
        <ThemedText>
          {`Pode ser integrada com as demais disciplinas do curso, permitindo a 
interdisciplinaridade para melhoria na perspectiva visual. `}

        </ThemedText>Pode ser integrada com as demais disciplinas do curso, permitindo a 
interdisciplinaridade para melhoria na perspectiva visual.
      </ThemedView>
      <ThemedText type="subtitle">PROGRAMA</ThemedText>
      <ThemedText>OBJETIVO GERAL: 
Permitir aos alunos o desenvolvimento de interfaces computacionais de fácil 
utilização, atraentes, intuitivas e que respeitam regras essenciais de interação 
com o usuário.

OBJETIVOS ESPECÍFICOS: 

1.Adquirir fundamentos teórico-práticos para refletir, avaliar e conceber 
interfaces de qualidade para diferentes tipos de aplicações.

2. 
Criar interfaces amigáveis para os usuários de sistemas computacionais. 

</ThemedText>
 <ThemedText type="subtitle">CONTEÚDO PROGRAMÁTICO</ThemedText>
 <ThemedText>1.Fundamentos da Interação Homem-Computador 
2.O Impacto das Tecnologias de Informaç ão e Comunicaç ão no cotidiano.  

3.Histórico da IHC. 

4.IHC como área Multidisciplinar.  
5.Diferentes Visões sobre a Construção de Sistemas Interativos.  
6.Fatores Humanos na Construção de Software. 
7.Interface com o usuário 
8.Importância de um bom projeto de interface. 
9.Possíveis causas de interfaces ruins. 
10.Características dos usuários. 
11.Implicações para o projeto de interface. 
12.Princípios de Design 
13.Características de uma boa interface. 
14.Visibilidade, affordance, feedback, modelos conceituais, consistência, 
tolerância a erros, consistência. 
15.Diagramação. 
16.Teoria das cores. 
17.Representação gráfica da Interface 
18.Modelagem e codificação gráfica. 
19.Mapeamento arbitrário e direto, código de cores e ícones. 
20.Implicações de Multitarefa.
21.Noções de Usabilidade, Ergonomia e Semiótica 
22.A importância da Usabilidade em projetos de Interação. 
23.Ergonomia na IHC. 
24.A Engenharia Semiótica em IHC. 
25.Avaliação e Projetos de IHC 
26.Avaliação por Inspeção. 
27.Avaliação por Observação. 
28.Testes de Usabilidade. 
29.Construção e avaliação de protótipos funcionais.
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
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
