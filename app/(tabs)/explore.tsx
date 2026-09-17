import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { colors } from '@/constants/theme';

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.title}>Explore</Text>
      <Text style={styles.sub}>Browse topics, then generate a quiz on Examina.</Text>
      <Pressable style={styles.btn} onPress={() => router.push('/create')}>
        <Text style={styles.btnText}>Open Examina generator</Text>
      </Pressable>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg, padding: 20 },
  title: { fontSize: 28, fontWeight: '800', color: colors.ink },
  sub: { marginTop: 8, color: colors.muted, fontSize: 15 },
  btn: { marginTop: 24, backgroundColor: colors.blue, padding: 16, borderRadius: 14, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: '700' },
});
