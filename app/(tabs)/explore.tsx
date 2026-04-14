import Collapsible from '@/components/Collapsible';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function ExploreScreen() {
  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <ThemedView style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ThemedText style={styles.backText}>← Voltar</ThemedText>
        </TouchableOpacity>
        <ThemedText type="title">Disciplinas e Atividades</ThemedText>
        <ThemedText style={styles.subtitle}>
          Clique em cada disciplina para ver os detalhes
        </ThemedText>
      </ThemedView>

      {/* Primeiro Semestre */}
      <Collapsible title="Primeiro Semestre">
        <TouchableOpacity 
          style={styles.linkItem}
          onPress={() => handleNavigate('/app/disciplinas/primeiro-semestre/informatica-basica')}>
          <ThemedText style={styles.linkText}>Informática Básica</ThemedText>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.linkItem}
          onPress={() => handleNavigate('/app/disciplinas/primeiro-semestre/algoritmo-logica-programacao')}>
          <ThemedText style={styles.linkText}>Algoritmo & Lógica de Programação</ThemedText>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.linkItem}
          onPress={() => handleNavigate('/app/disciplinas/primeiro-semestre/ingles-instrumental')}>
          <ThemedText style={styles.linkText}>Inglês Instrumental</ThemedText>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.linkItem}
          onPress={() => handleNavigate('/app/disciplinas/primeiro-semestre/matematica-aplicada')}>
          <ThemedText style={styles.linkText}>Matemática Aplicada</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.linkItem}
          onPress={() => handleNavigate('/app/disciplinas/primeiro-semestre/portugues')}>
          <ThemedText style={styles.linkText}>Português</ThemedText>
        </TouchableOpacity>
      </Collapsible>

      {/* Segundo Semestre */}
      <Collapsible title="Segundo Semestre">
        <TouchableOpacity 
          style={styles.linkItem}
          onPress={() => handleNavigate('/app/disciplinas/segundo-semestre/estrutura-dados')}>
          <ThemedText style={styles.linkText}>Estrutura de Dados</ThemedText>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.linkItem}
          onPress={() => handleNavigate('/app/disciplinas/segundo-semestre/fundamentos-banco-dados')}>
          <ThemedText style={styles.linkText}>Fundamentos de Banco de Dados</ThemedText>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.linkItem}
          onPress={() => handleNavigate('/app/disciplinas/segundo-semestre/fundamentos-redes-computadores')}>
          <ThemedText style={styles.linkText}>Fundamentos de Redes de Computadores</ThemedText>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.linkItem}
          onPress={() => handleNavigate('/app/disciplinas/segundo-semestre/meio-ambiente-saude-seguranca')}>
          <ThemedText style={styles.linkText}>Meio Ambiente, Saúde e Segurança</ThemedText>
        </TouchableOpacity>
      </Collapsible>

      {/* Terceiro Semestre */}
      <Collapsible title="Terceiro Semestre">
        <ThemedText style={styles.comingSoon}>
          Conteúdo em breve...
        </ThemedText>
      </Collapsible>

      {/* Atividades Complementares */}
      <Collapsible title="Atividades Complementares e Relatórios">
        <ThemedText style={styles.comingSoon}>
          Conteúdo em breve...
        </ThemedText>
      </Collapsible>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backButton: {
    marginBottom: 10,
  },
  backText: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  comingSoon: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    padding: 20,
    fontStyle: 'italic',
  },
  linkItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginVertical: 4,
  },
  linkText: {
    fontSize: 16,
    color: '#007bff',
  },
});