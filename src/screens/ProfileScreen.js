import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppBar } from '../components/AppBar';
import { AppButton } from '../components/AppButton';
import { useProfileNavigation } from '../hooks/useProfileNavigation';
import { colors, radius, shadows, spacing } from '../theme';

export function ProfileScreen() {
  const { openCharacters } = useProfileNavigation();

  return (
    <ScrollView
      contentContainerStyle={styles.page}
      contentInsetAdjustmentBehavior="automatic"
    >
      <AppBar />

      <View style={styles.content}>
        <View style={styles.heading}>
          <Text selectable style={styles.kicker}>EXPLORADOR ASIGNADO</Text>
          <Text selectable style={styles.title}>Información del estudiante</Text>
        </View>

        <View style={styles.profileCard}>
          <View style={styles.initials}>
            <Text style={styles.initialsText}>DL</Text>
          </View>

          <View style={styles.detail}>
            <Text selectable style={styles.label}>Nombre</Text>
            <Text selectable style={styles.value}>Diego Alberto López Zelaya</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <View style={styles.detail}>
              <Text selectable style={styles.label}>Carnet</Text>
              <Text selectable style={styles.value}>20240181</Text>
            </View>
            <View style={styles.detail}>
              <Text selectable style={styles.label}>Grupo y sección</Text>
              <Text selectable style={styles.value}>2A</Text>
            </View>
          </View>
        </View>

        <AppButton label="Explorar personajes" onPress={openCharacters} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.cream,
    flexGrow: 1,
    paddingBottom: spacing.xxl,
  },
  content: {
    gap: spacing.lg,
    padding: spacing.lg,
  },
  heading: {
    gap: spacing.xs,
  },
  kicker: {
    color: colors.orangeDark,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.4,
  },
  title: {
    color: colors.charcoal,
    fontSize: 24,
    fontWeight: '900',
  },
  profileCard: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderCurve: 'continuous',
    borderRadius: radius.lg,
    borderWidth: 1,
    boxShadow: shadows.card,
    gap: spacing.md,
    padding: spacing.lg,
  },
  initials: {
    alignItems: 'center',
    backgroundColor: colors.orange,
    borderRadius: radius.full,
    height: 58,
    justifyContent: 'center',
    width: 58,
  },
  initialsText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '900',
  },
  row: {
    flexDirection: 'row',
    gap: spacing.lg,
  },
  detail: {
    flex: 1,
    gap: spacing.xs,
  },
  label: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  value: {
    color: colors.charcoal,
    fontSize: 17,
    fontWeight: '800',
    lineHeight: 24,
  },
  divider: {
    backgroundColor: colors.border,
    height: 1,
  },
});
