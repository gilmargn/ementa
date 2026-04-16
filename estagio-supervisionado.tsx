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
        <ThemedText type="title">Estágio Profissional Supervisionado </ThemedText>
      </ThemedView>

      {/* História do Curso */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          Técnico de nível médio em Informática na forma subsequente
        </ThemedText>
        <ThemedText style={styles.text}>
          O Estágio Profissional Supervisionado, conforme a Lei Nº 11.788/2008, é 
considerado uma atividade educativa, desenvolvida no ambiente de trabalho com 
o intuito de preparar os educandos do ensino regular em instituições de Educação 
Superior, de Educação Profissional, de Ensino Médio, da Educação Especial e dos 
anos finais do Ensino Fundamental, na modalidade profissional da Educação de 
Jovens e Adultos, para o trabalho produtivo.  
De acordo com o parecer CNE/CEB Nº 11/2012, o Estágio Profissional 
Supervisionado previsto na formação do aluno é uma estratégia de integração 
teórico-prática, representando uma grande oportunidade para consolidar e 
aprimorar conhecimentos adquiridos durante o desenvolvimento da formação dos 
alunos e possibilitando-os atuarem diretamente no ambiente profissional por meio 
da demonstração de suas competências laborais. 
Os procedimentos de Estágio Profissional Supervisionado são 
regulamentados pela Resolução Nº. 96 - CONSUP/IFAM, de 30 de dezembro de 
2015, criada para sistematizar o processo de realização do Estágio Profissional 
Supervisionado do Instituto Federal de Educação, Ciência e Tecnologia do 
Amazonas, em consonância com as legislações pertinentes. {'\n'} O Setor de Estágio e 
Egresso ligado a Coordenação de Extensão do Campus Avançado Boca do Acre 
fica responsável pela identificação das oportunidades de estágio, da facilitação e 
ajuste das condições de estágio oferecido, do encaminhamento dos estudantes, 
da preparação da documentação legal e da formalização de convênios entre as concedentes de estágio e a Instituição de Ensino visando a integração entre as 
partes e o estudante. A identificação de locais de estágio e a sua supervisão 
deverá ser realizada em conjunto com as Coordenações de Eixo Tecnológico e 
com os Professores Orientadores de Estágio. 
{'\n'} Ao cumprir a carga horária do Estágio Profissional Supervisionado 
Obrigatório o aluno deverá elaborar um Relatório Final e apresentá-lo em banca 
examinadora de acordo com as normas estabelecidas pela instituição de ensino, 
reunindo elementos que comprovem o aproveitamento e a capacidade técnica 
durante o período da prática profissional supervisionada. O discente/estagiário 
será aprovado ao atingir nota igual ou superior a 6,0 (seis), onde 40% dessa nota 
será atribuída pelo supervisor de estágio na empresa e 60% pela banca 
examinadora. Portanto, mesmo após a defesa, faz-se necessário a entrega da 
versão final do Relatório com as adequações sugeridas pela banca, conforme o 
aceite do professor orientador.
        </ThemedText>
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