import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.headerImageContainer}>
        <Image
          source={require('@/assets/images/cabecalho-subsequente.png')}
          style={styles.headerImage}
          contentFit="cover"
        />
      </ThemedView>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('/explore')}>
        <ThemedText style={styles.buttonText}>
          Disciplinas e Atividades →
        </ThemedText>
      </TouchableOpacity>

      {/* Título Principal */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">PROJETO PEDAGÓGICO DE CURSO</ThemedText>
      </ThemedView>

      {/* História do Curso */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          Técnico de nível médio em Informática na forma subsequente
        </ThemedText>
        <ThemedText style={styles.text}>
          O Campus Avançado Boca do Acre também objetiva promover educação 
          profissional com qualidade e excelência, alicerçado pelo tripé Ensino, 
          Pesquisa e Extensão, visando formar profissionais para atuar nos 
          diversos setores da economia com responsabilidade socioambiental para 
          o desenvolvimento da mesorregião do Sul do Amazonense e da Microrregião 
          do Purus. Nessa perspectiva, o Campus Avançado Boca do Acre prepara-se 
          para articular conhecimentos científicos, tecnológicos e de suporte aos 
          arranjos produtivos locais às necessidades educacionais, culturais, 
          econômicas e sociais das comunidades do entorno onde o Campus está 
          inserido, mas considerando as características e vocações da região.
        </ThemedText>
      </ThemedView>

      {/* Objetivos Específicos */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Objetivos Específicos</ThemedText>
        <ThemedView style={styles.objectivesContainer}>
          {[
            'Formar profissionais aptos ao mundo do trabalho',
            'Trabalhar com desenvolvimento, reparos de sistemas e banco de dados',
            'Desenvolver documentação e relatórios técnicos',
            'Realizar manutenção de computadores de uso geral',
            'Trabalhar com instalação e configuração de redes de computadores local de pequeno porte',
            'Utilizar recursos na operação de aplicativos para automação de escritório e Internet',
            'Prestar suporte e realizar treinamento a usuários de recursos de informática',
            'Instalar e configurar os componentes e periféricos de computador, sistemas operacionais e aplicativos',
            'Conhecer técnicas de análise de sistemas a fim de auxiliar as organizações de controle e gerenciamento',
            'Desenvolver softwares que possibilitam o tratamento automático da informação'
          ].map((objetivo, index) => (
            <ThemedView key={index} style={styles.objectiveItem}>
              <ThemedText style={styles.bulletPoint}>●</ThemedText>
              <ThemedText style={styles.objectiveText}>{objetivo}</ThemedText>
            </ThemedView>
          ))}
        </ThemedView>
      </ThemedView>

      {/* Rodapé com logo do IFAM */}
      <ThemedView style={styles.footer}>
        <Image
          source={require('@/assets/images/logo-if.png')}
          style={styles.footerLogo}
          contentFit="contain"
        />
        <ThemedText style={styles.footerText}>
          Instituto Federal do Amazonas - Campus Avançado Boca do Acre
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerImageContainer: {
    height: 300,
    backgroundColor: '#A1CEDC',
  },
  headerImageContainer: {
    width: '100%',
    height: 220,  // Altura confortável para mobile
    backgroundColor: '#A1CEDC',  // Cor de fundo que combina
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  stepContainer: {
    gap: 12,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    color: '#34495e',
  },
  objectivesContainer: {
    gap: 12,
    marginTop: 8,
  },
  objectiveItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff0000',
    marginTop: 2,
  },
  objectiveText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    color: '#34495e',
  },
  footer: {
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  footerLogo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});