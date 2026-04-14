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
          source={require('@/assets/images/figura.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Fundamentos de Sistemas Operacionais </ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">ementa: </ThemedText>
        <ThemedText>
          Histórico; Classificação; Estrutura dos S.O.; Mono e multiprogramação; Processos; 
Técnicas de escalonamento de processos; Gerência de memória em sistemas 
multiprogramados; Técnicas de gerência de memória real; Estudo de um sistema 
operacional real. 
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
            <ThemedText type="subtitle">PERFIL PROFISSIONAL DO DOCENTE : </ThemedText>
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
        <ThemedText type="subtitle">ÁREAS DE INTEGRAÇÃO : </ThemedText>
        <ThemedText>
          {` Informática Básica, Redes de Computadores e Projeto Integrador I`}
          
        </ThemedText>
      </ThemedView>


<ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">PROGRAMA : </ThemedText>
        <ThemedText>
          {` OBJETIVO GERAL: 
Proporcionar ao aluno conhecimento sobre os diversos sistemas operacionais 
existentes, seu funcionamento e suas aplicabilidades nos sistemas computacionais. 
OBJETIVOS ESPECÍFICOS: 
1. 
Capacitar o aluno a ter visão sistêmica de funcionamento do sistema 
operacional. 
2. 
Capacitar o aluno a entender a relação usuário-sistema operacional
hardware; 
3. 
Capacitar o aluno a visualizar a influência do tipo de sistema operacional na 
programação de aplicativos; 
4. 
Capacitar o aluno a entender as técnicas utilizadas para que o sistema 
operacional funcione de maneira sincronizada.  `}
          
        </ThemedText>
      </ThemedView>


<ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">CONTEÚDO PROGRAMÁTICO : </ThemedText>
        <ThemedText>
          {` 1.HISTÓRICO 
1.1. A primeira geração (1945-1955) – Válvulas;  
1.2. A segunda geração (1955-1965) – transistores e sistemas em lote (batch); 
1.3. A terceira geração (1965-1980) – CIs e multiprogramação;  
1.4. A quarta geração (1980-presente) – computadores pessoais. 
2.CLASSIFICAÇÃO  
2.1. Sistemas operacionais de computadores de grande porte;  
2.2. Sistemas operacionais de servidores;  
2.3. Sistemas operacionais multiprocessadores;  
2.4. Sistemas operacionais de computadores pessoais;  
2.5. Sistemas operacionais de computadores portáteis;  
2.6. Sistemas operacionais embarcados;  
2.7. Sistemas operacionais de nós de sensores (sensor node);  
2.8. Sistemas operacionais de tempo real;  
2.9. Sistemas operacionais de cartões inteligentes (smart cards). 
3.MONO E MULTIPROGRAMAÇÃO 
3.1. Sistemas Monoprogramáveis/Monotarefa; 
3.2. Sistemas Multiprogramáveis/Multitarefa  
3.2.1.Sistemas batch; 
3.2.2.Sistemas de tempo compartilhado; 
3.2.3.Sistemas de tempo real; 
3.2.4.Sistemas com múltiplos processadores. 
3.3. Sistemas com Múltiplos Processadores (sistemas fortemente acoplados, 
sistemas fracamente acoplados). 
4.PROCESSOS 
4.1. Estrutura do Processo;  
4.2. Estados do Processo;  
4.3. Mudanças de Estado do Processo;  
4.4. Processos CPU-BOUND e I/O-BOUND;  
4.5. Processos Independentes, Subprocessos. 
5.TÉCNICAS DE ESCALONAMENTO DE PROCESSOS 
5.1. Critérios de escalonamento;  
5.2. Escalonamentos não preemptivos e preemptivos;  
5.3. Escalonamento First-In-First-Out (FIFO);  
5.4. Escalonamento Circular;  
5.5. Escalonamento por prioridades; 
5.6. Escalonamento circular com prioridades. 
6.GERÊNCIA DE MEMÓRIA EM SISTEMAS MULTIPROGRAMADOS 
6.1. Hierarquia de Memórias;  
6.2. Gerenciador de Memória. 
7.TÉCNICAS DE GERÊNCIA DE MEMÓRIA REAL 
7.1. Alocação (Estática, Dinâmica, Local);  
7.2. Swapping. 
8.ESTUDO DE UM SISTEMA OPERACIONAL REAL 
8.1. Sistema Operacional Privado ou Gratuito Open Source. `}
          
        </ThemedText>
      </ThemedView>

 <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">BIBLIOGRAFIA BÁSICA: </ThemedText>
        <ThemedText>
          {` MACHADO, Francis B. Arquitetura de sistemas operacionais. 5a ed. – Rio de 
Janeiro: Editora LCT, 2013. 
SILBERSCHARZ, Abraham. Sistemas operacionais com java, São Paulo: 
Elservier,2008 
SILBERSCHATZ, Abraham. Fundamentos de sistemas operacionais. Rio de 
Janeiro: Editora LTC, 2013. `}
          
        </ThemedText>
      </ThemedView>


<ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">BIBLIOGRAFIA COMPLEMENTAR: </ThemedText>
        <ThemedText>
          {` FLYNN, Ida M., 1942. Introdução aos sistemas operacionais. – São Paulo: Editora 
Cengage Learning, 2008. 
MACHADO, Francis Berenger; MAIA, Luiz Paulo. Fundamentos de Sistemas 
Operacionais. Rio de Janeiro: LTC, 2011. 
STUART, Brian L. Princípios de sistemas operacionais: projetos e aplicações. São 
Paulo: Editora Cengage Learning, 2011. 
TANENBAUM, Andrews S. Sistemas Operacionais, Projetos e Implementação. 3a 
ed. - Porto Alegre: Editora Bookman, 2008. 
Wehrs,C. R.; Marques, J. A.; Veiga, l.; Rodrigues, r.. Sistemas Operacionais. Rio de 
Janeiro: LTC, 2011. ISBN: 978852161807 `}
          
        </ThemedText>
      </ThemedView>


 <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">elaborado por LUCIANO </ThemedText>
        <ThemedText>
          {` Comissão de Harmonização dos Cursos da EPTNM `}
          
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
    width: '100%',
    height:180,
    resizeMode:'cover'
    
  },
});
