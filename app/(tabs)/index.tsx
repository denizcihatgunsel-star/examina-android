import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/theme';
import { stats, categories, featured } from '@/data/mock';

export default function ForYouScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.brandRow}>
          <View style={styles.logoMark}>
            <Text style={styles.logoMarkText}>E</Text>
          </View>
          <Text style={styles.brand}>Examina</Text>
        </View>

        <View style={styles.statsCard}>
          <View style={styles.statsTop}>
            <View style={{ flex: 1 }}>
              <Text style={styles.statsLabel}>Streak</Text>
              <View style={styles.streakRow}>
                <Text style={{ fontSize: 16 }}>🔥</Text>
                <Text style={styles.streakValue}>{stats.streakDays} day</Text>
              </View>
            </View>
            <View style={{ flex: 1.4 }}>
              <Text style={styles.statsLabel}>Your growth this week</Text>
              <View style={styles.growthRow}>
                <View>
                  <Text style={[styles.metric, { color: colors.blue }]}>{stats.questions}</Text>
                  <Text style={styles.metricLabel}>questions</Text>
                </View>
                <View>
                  <Text style={[styles.metric, { color: colors.green }]}>{stats.minutes}</Text>
                  <Text style={styles.metricLabel}>minutes</Text>
                </View>
                <View>
                  <Text style={[styles.metric, { color: colors.orange }]}>{stats.quizzes}</Text>
                  <Text style={styles.metricLabel}>quizzes</Text>
                </View>
              </View>
            </View>
          </View>
          <Pressable style={styles.missionBtn} onPress={() => router.push('/create')}>
            <Text style={styles.missionText}>YOUR DAILY MISSION</Text>
            <Ionicons name="chevron-forward" size={18} color="#fff" />
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>Categories you're interested in</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.hRow}>
          {categories.map((c) => (
            <Pressable key={c.id} style={[styles.catCard, { backgroundColor: c.tint }]} onPress={() => router.push('/explore')}>
              <Text style={{ fontSize: 28 }}>{c.emoji}</Text>
              <Text style={styles.catTitle}>{c.title}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>To get you started</Text>
        <Text style={styles.sectionSub}>Popular quizzes we picked just for you.</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.hRow}>
          {featured.map((f) => (
            <Pressable key={f.id} style={[styles.cover, { backgroundColor: f.color }]} onPress={() => router.push('/create')}>
              <Text style={styles.coverTitle}>{f.title}</Text>
              <Text style={styles.coverSub}>{f.subtitle}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <Pressable style={styles.diceBar} onPress={() => router.push('/create')}>
          <Text style={{ fontSize: 18 }}>🎲</Text>
          <Text style={styles.diceText}>Roll the dice: Get a random quiz</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  scroll: { paddingBottom: 28 },
  brandRow: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 20, paddingTop: 8, paddingBottom: 16 },
  logoMark: { width: 28, height: 28, borderRadius: 8, backgroundColor: colors.ink, alignItems: 'center', justifyContent: 'center' },
  logoMarkText: { color: '#fff', fontWeight: '800', fontSize: 14 },
  brand: { fontSize: 22, fontWeight: '800', color: colors.ink },
  statsCard: { marginHorizontal: 20, backgroundColor: colors.card, borderRadius: 20, padding: 16, borderWidth: 1, borderColor: colors.border },
  statsTop: { flexDirection: 'row', gap: 12, marginBottom: 14 },
  statsLabel: { fontSize: 13, color: colors.muted, marginBottom: 6, fontWeight: '500' },
  streakRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  streakValue: { fontSize: 18, fontWeight: '700', color: colors.ink },
  growthRow: { flexDirection: 'row', justifyContent: 'space-between' },
  metric: { fontSize: 22, fontWeight: '800' },
  metricLabel: { fontSize: 11, color: colors.muted, marginTop: 2 },
  missionBtn: { backgroundColor: colors.blue, borderRadius: 12, paddingVertical: 14, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  missionText: { color: '#fff', fontWeight: '800', letterSpacing: 0.6, fontSize: 13 },
  sectionTitle: { marginTop: 28, marginHorizontal: 20, fontSize: 22, fontWeight: '800', color: colors.ink },
  sectionSub: { marginHorizontal: 20, marginTop: 6, color: colors.muted, fontSize: 14 },
  hRow: { paddingHorizontal: 20, paddingTop: 14, gap: 12 },
  catCard: { width: 140, height: 120, borderRadius: 18, padding: 14, justifyContent: 'space-between' },
  catTitle: { fontSize: 15, fontWeight: '700', color: colors.ink },
  cover: { width: 160, height: 210, borderRadius: 18, padding: 14, justifyContent: 'flex-end' },
  coverTitle: { fontSize: 18, fontWeight: '800', color: '#111' },
  coverSub: { marginTop: 4, fontSize: 12, fontWeight: '600', color: 'rgba(0,0,0,0.55)' },
  diceBar: { marginTop: 22, marginHorizontal: 20, backgroundColor: colors.card, borderRadius: 16, paddingVertical: 14, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', gap: 10, borderWidth: 1, borderColor: colors.border },
  diceText: { fontSize: 14, fontWeight: '600', color: colors.ink },
});
