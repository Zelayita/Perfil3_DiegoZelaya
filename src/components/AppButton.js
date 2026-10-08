import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, radius, shadows, spacing } from '../theme';

export function AppButton({ label, onPress, variant = 'primary' }) {
  const isSecondary = variant === 'secondary';

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isSecondary && styles.secondary,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.label, isSecondary && styles.secondaryLabel]}>
        {label}
      </Text>
      {!isSecondary && <Text style={styles.arrow}>→</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.orange,
    borderCurve: 'continuous',
    borderRadius: radius.md,
    boxShadow: shadows.raised,
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: 56,
    paddingHorizontal: spacing.lg,
  },
  secondary: {
    backgroundColor: colors.white,
    borderColor: colors.orange,
    borderWidth: 1,
    boxShadow: 'none',
  },
  pressed: {
    opacity: 0.72,
    transform: [{ scale: 0.99 }],
  },
  label: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '800',
  },
  secondaryLabel: {
    color: colors.orangeDark,
  },
  arrow: {
    color: colors.white,
    fontSize: 24,
    marginLeft: spacing.sm,
  },
});
