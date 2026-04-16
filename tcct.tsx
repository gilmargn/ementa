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
        </ThemedText>
      </TouchableOpacity>

      {/* Título Principal */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Projeto de Conclusão de Curso Técnico - PCCT </ThemedText>
      </ThemedView>

      {/* História do Curso */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          Sobre o PCCT
        </ThemedText>
        <ThemedText style={styles.text}>
          A elaboração do Projeto de Conclusão de Curso Técnico - PCCT é uma 
alternativa para o discente substituir a atividade de Estágio Profissional 
Supervisionado Obrigatório. Os projetos de natureza prática ou teórica serão 
desenvolvidos a partir de temas relacionados com a formação profissional do 
discente e de acordo com as normas estabelecidas pelo IFAM Campus 
Manaus Centro. Poderão ser inovadores em que pese a coleta e a aplicação de 
dados, bem como suas execuções ou ainda constituir-se de ampliações de 
trabalhos já existentes. Assim como o estágio, poderá ser realizado a partir do 
2º semestre do curso e tem como finalidade complementar o processo de 
ensino aprendizagem e habilitar legalmente o discente a conclusão do curso. 
A regulamentação dessa atividade visa orientar a operacionalização dos 
Projetos de Conclusão de Curso de Nível Médio, considerando sua natureza, 
área de atuação, limites de participação, orientação, normas técnicas, recursos 
financeiros, defesa e publicação. Após a conclusão do Projeto, os dados 
deverão ser dispostos em um relatório científico e apresentados em banca 
examinadora para atribuição da nota e aprovação desta atividade. Seguindo 
assim, o disposto no artigo 173 da Resolução Nº 94 - CONSUP/IFAM, onde o 
PCCT principia-se da construção de um projeto, do seu desenvolvimento e da 
sistematização dos resultados sob a forma de um relatório científico de acordo 
com as normas da Associação Brasileira de Normas Técnicas (ABNT). 
Serão aceitos até 03 (três) discentes como autores do projeto, com 
participação efetiva de todos, comprovadas por meio de aferições do professor 
orientador. Além disso, as atividades do projeto deverão cumprir carga horária 
de 300 horas, podendo ser aplicadas da seguinte forma: 20 (vinte) horas 
presenciais e 280 (duzentos e oitenta) horas dedicadas à livre pesquisa. 
A avaliação do PCCT será realizada em uma apresentação pública do 
trabalho, perante banca examinadora composta por 03 (três) membros, sendo 
presidida pelo professor orientador. Os alunos terão 20 (vinte) minutos para 
apresentação, os examinadores até 30 (trinta) minutos e mais 10 (dez) minutos 
para comentários e divulgação do resultado. Cada examinador atribuirá uma 
nota de 0 (zero) a 10 (dez) ao aluno, considerando o trabalho escrito e a defesa 
oral, sendo aprovado os discentes que atingirem nota igual ou superior a 6,0 
(seis), calculada pela média aritmética das notas atribuídas pelos 
examinadores, e cumprimento da carga horária exigida.
A partir da nota, a banca examinadora atribuirá conceitos de Aprovado e 
Recomendado para Ajustes, quando a nota for igual ou superior a 6,0 (seis), ou 
Reprovado, em caso de nota inferior a 6,0 (seis). Se Recomendado para 
Ajustes, o aluno deverá reapresentar o relatório de PCCT com as 
recomendações da banca examinadora, em um prazo de até 30 (trinta) dias 
após a data de defesa. Se considerado Reprovado, o discente deverá efetuar 
nova matrícula no componente curricular de PCCT ou Estágio Profissional 
Supervisionado. Em todos os casos os discentes aprovados deverão 
apresentar uma via do relatório final pós-defesa num prazo máximo de 30 
(trinta) dias para arquivo na pasta do aluno e disponibilização para consulta na 
biblioteca do Campus. 
O IFAM Campus Manaus Centro não é obrigado oferecer nenhuma 
contrapartida pecuniária aos discentes, orientadores ou co-orientadores, mas 
fica comprometido a disponibilizar a estrutura existente, conforme a demanda,
O IFAM Campus Manaus Centro não é obrigado oferecer nenhuma 
contrapartida pecuniária aos discentes, orientadores ou co-orientadores, mas 
fica comprometido a disponibilizar a estrutura existente, conforme a demanda,
para o desenvolvimento das atividades do projeto. Do mesmo modo, quando 
houver necessidade de atividades externas, essas deverão ser apresentadas e 
justificadas no pré-projeto, cabendo ao IFAM Campus Manaus Centro 
disponibilizar transporte para esse fim conforme disponibilidade. 
        </ThemedText>
      </ThemedView>

      {/* Objetivos Específicos */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedView style={styles.objectivesContainer}>
          {[''].map((objetivo, index) => (
            <ThemedView key={index} style={styles.objectiveItem}>
              <ThemedText style={styles.bulletPoint}></ThemedText>
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