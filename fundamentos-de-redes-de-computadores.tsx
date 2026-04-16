import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { HeaderTitle } from '@react-navigation/elements';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#2f9ec0' }}
      headerImage={
        <Image
          source={require('@/assets/images/img_redes.png')}
          style={styles.reactLogo}
        />
      }>
     <ThemedText type="title" style={styles.title}>Fundamentos de Redes de Computadores</ThemedText>
      <ThemedView>
        <ThemedText>
          <b>Curso:</b> Técnico de Nível Médio em Informática.{'\n'}
          <b>Forma: </b>Subsequente.{'\n'}
          <b>Eixo Tecnológico:</b> Informação e Comunicação.{'\n'}
          <b>Módulo:</b> 1º.{'\n'}
          <b>CH Teórica:</b> 32h.{'\n'}
          <b>CH Prática:</b> 32h.{'\n'}
          <b>CH EAD:</b> 16h.{'\n'}
          <b>CH Semanal:</b> 4h.{'\n'}
          <b>CH Semestral:</b> 80h.{'\n'}{'\n'}
        </ThemedText>

      <ThemedText type="subtitle" style={styles.title}>Ementa</ThemedText>
        <ThemedText>
          {'\n'}
          Conceitos sobre redes de computadores. A estruturação da rede em camadas de protocolos. Principais aplicações e protocolos das camadas de aplicação e transporte.
          O endereçamento na camada de rede. Protocolos de enlace e redes locais. Arquitetura e topologia de redes de computadores.{'\n'}{'\n'}
        </ThemedText>

      <ThemedText type="subtitle" style={styles.title}>Perfil Profissional do Docente</ThemedText>
      <ThemedText>
        {'\n'}
        • Bacharelado em: Ciência da Computação ou Engenharia da Computação ou Engenharia de Software ou Sistemas de Informação;{'\n'}
        • Ou Licenciatura em: Informática ou Computação;{'\n'}
        • Ou Cursos Superiores de Tecnologia em: Redes de Computadores.{'\n'}{'\n'}
      </ThemedText>

      <ThemedText type="subtitle" style={styles.title}>Áreas de Integração</ThemedText>
      <ThemedText>
        {'\n'}
        <b>Linguagem de Programação Web:</b>{'\n'}{'\n'}
        Protocolos envolvidos em aplicações Web;{'\n'}
        Serviços para aplicações Web;{'\n'}
        Instalação e configuração de servidores para aplicações Web. {'\n'}{'\n'}
      </ThemedText>

      <ThemedText type="subtitle" style={styles.title}>Programa</ThemedText>
      <ThemedText>
        {'\n'}
        <b>Objetivos Gerais:</b>{'\n'}{'\n'}
        Entender os princípios básicos de funcionamento da comunicação de dados através 
        da  compreensão dos conceitos sobre redes de computadores, do conhecimento 
        sobre os mecanismos de gerenciamento de redes de computadores e da 
        demonstração prática da utilização e aplicação de sistemas operacionais de redes.{'\n'}{'\n'}
        <b>Objetivos Específicos:</b>{'\n'}{'\n'}
        1. Identificar e conceituar os principais componentes de uma rede de computadores;{'\n'} 
        2. Explicar a arquitetura em camadas das redes de computadores, seus principais protocolos, funcionamento e aplicações;{'\n'}
        3. Monitorar e acompanhar o funcionamento de uma rede de computadores;{'\n'}
        4. Demonstrar capacidade para utilização e aplicação de um sistema {'\n'}{'\n'}
      </ThemedText>

      <ThemedText type="subtitle" style={styles.title}>Conteúdo Programático</ThemedText>
      <ThemedText>
        {'\n'}
        <b>1. UNIDADE I</b>{'\n'}
        1.1. Histórico de redes de computadores e Internet{'\n'}
        1.2. A Borda e o núcleo da rede{'\n'}
        1.3. Comutação de pacotes{'\n'}
        1.4. Camadas de protocolos e Modelos de serviços{'\n'}{'\n'}

        <b>2. UNIDADE II</b>{'\n'}
        2.1. Princípios da camada de aplicação{'\n'}
        2.2. A Web e o protocolo HTTP{'\n'}
        2.3. O protocolo de Transferência de Arquivos: FTP{'\n'}
        2.4. O correio eletrônico e o protocolo SMTP{'\n'}
        2.5. O serviço de diretório da Internet: DNS{'\n'}{'\n'}

        <b>3. UNIDADE III</b>{'\n'}
        3.1. Introdução à camada de transporte{'\n'}
        3.2. Multiplexação e demultiplexação{'\n'}
        3.3. O protocolo UDP{'\n'}
        3.4. O protocolo TCP{'\n'}{'\n'}

        <b>4. UNIDADE IV</b>{'\n'}
        4.1. Introdução à camada de rede{'\n'}
        4.2. O protocolo IP: Encaminhamento e Endereçamento{'\n'}
        4.3. O protocolo DHCP: Configuração Dinâmica de Hospedeiros{'\n'}
        4.4. Configuração Básica dentro de uma rede Windows{'\n'}{'\n'}

        <b>5. UNIDADE V</b> {'\n'}
        5.1. Introdução à camada de enlace{'\n'}
        5.2. Redes Locais Comutadas{'\n'}
        5.3. Endereçamento na camada de Enlace MAC e ARP{'\n'}
        5.4. Ethernet{'\n'}
        5.5. Comutadores X Roteadores{'\n'}{'\n'}

        <b>6. UNIDADE VI</b> {'\n'}
        6.1. Cabeamento: cabo coaxial; par trançado; fibra óptica{'\n'}
        6.2. Prática – montagem de cabo par trançado.{'\n'}
        6.3. Redes sem-fio {'\n'}
        6.3.1. Configuração {'\n'}
        6.3.2. Segurança de rede sem-fio {'\n'}
        6.3.3. Prática – Configuração de rede sem-fio{'\n'}{'\n'}
      </ThemedText>

      <ThemedText type="subtitle" style={styles.title}>Bibliografia Básica:</ThemedText>
      <ThemedText>
        {'\n'}
        KUROSE, Jim; ROSS, Keith. Redes de Computadores e a Internet: Uma 
        Abordagem Top-Down. 6. ed. São Paulo: Pearson, 2014. ISBN: 9788581436777. 
        TANEMBAUM, Andrew S.; WETHERALL, David J. Redes de Computadores. 5. ed.
        São Paulo: Pearson, 2011. ISBN: 9788543008585
        TORRES, Gabriel. Redes de Computadores.
        2. ed. Rio de Janeiro: Nova Terra, 2014. ISBN: 9788561893682.{'\n'}{'\n'}
      </ThemedText>

      <ThemedText type="subtitle" style={styles.title}>Bibliografia Complementar:</ThemedText>
      <ThemedText>
        {'\n'}
        ALENCAR, Marcelo Sampaio de. Engenharia de Redes de Computadores. São 
        Paulo: Érica, 2012. ISBN: 9788536504117. 
        ANDERSON, Al; BENEDETTI, Ryan. Redes de Computadores: Use a Cabeça. 2. 
        ed. Rio de Janeiro: Alta Books, 2010. ISBN: 9788576084488. 
        FOROUZAN, Behrouz A. Comunicação de Dados e Redes de Computadores. 4. ed. 
        Porto Alegre: Mc Graw Hill, 2007. ISBN: 9788586804885. 
        MARIN, Paulo Sérgio. Cabeamento Estruturado: Série Eixos. São Paulo: Érica, 
        2014. ISBN: 9788536506098. 
        PETERSON, Larry L.; DAVIE, Bruce S. Redes de Computadores. 5. ed. Rio de 
        Janeiro: Elsevier, 2013. ISBN: 9788535248975.{'\n'}{'\n'}
      </ThemedText>

      <ThemedText type="subtitle" style={styles.title}>Elaboborado POR:</ThemedText>
      <ThemedText>
        {'\n'}
        PEDRO MELO DE AVILAR
      </ThemedText>

      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 250,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
    title: {
    backgroundColor:'#314152db',
    borderWidth:1,
    color:'#fffefe',
    borderColor:'#000',
    padding:8,
    marginBottom:10,
  },
});
