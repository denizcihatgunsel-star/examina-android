import { Text, StyleSheet, Pressable, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/constants/theme';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.sub}>Manage your Examina account on the web.</Text>
      <Pressable onPress={() => Linking.openURL('https://www.examina.ink/auth/login')}>
        <Text style={styles.link}>Sign in on examina.ink →</Text>
      </Pressable>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg, padding: 20 },
  title: { fontSize: 28, fontWeight: '800', color: colors.ink },
  sub: { marginTop: 8, color: colors.muted, fontSize: 15 },
  link: { marginTop: 20, color: colors.blue, fontWeight: '700', fontSize: 16 },
});
