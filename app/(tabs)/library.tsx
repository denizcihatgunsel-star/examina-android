import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/constants/theme';

export default function LibraryScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.title}>Library</Text>
      <Text style={styles.sub}>Saved quizzes will show up here.</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg, padding: 20 },
  title: { fontSize: 28, fontWeight: '800', color: colors.ink },
  sub: { marginTop: 8, color: colors.muted, fontSize: 15 },
});
