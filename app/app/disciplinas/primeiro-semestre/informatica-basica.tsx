import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';


export default function InformaticaBasicaScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ThemedText style={styles.backText}>← Voltar</ThemedText>
        </TouchableOpacity>
        <ThemedText type="title">Informática Básica</ThemedText>
        <ThemedText style={styles.semester}>1º Semestre | 80 horas</ThemedText>
      </ThemedView>

      <ThemedView style={styles.content}>
        <ThemedText>Conteúdo da disciplina em breve...</ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { padding: 20, backgroundColor: '#fff' },
  backButton: { marginBottom: 10 },
  backText: { fontSize: 16, color: '#007bff' },
  semester: { fontSize: 14, color: '#666', marginTop: 5 },
  content: { padding: 20 },
});