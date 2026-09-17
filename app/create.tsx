import { View, Pressable, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/theme';

/** Opens the live website — does not modify examina.ink */
export default function CreateScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.bar}>
        <Pressable onPress={() => router.back()} hitSlop={12}>
          <Ionicons name="close" size={24} color={colors.ink} />
        </Pressable>
        <Text style={styles.barTitle}>Create quiz</Text>
        <View style={{ width: 24 }} />
      </View>
      <WebView source={{ uri: 'https://www.examina.ink/' }} style={{ flex: 1 }} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.card },
  bar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: colors.border },
  barTitle: { fontWeight: '700', fontSize: 16, color: colors.ink },
});
