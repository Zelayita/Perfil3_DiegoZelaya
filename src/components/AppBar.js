import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '../theme';

const masterBall = require('../../assets/master-ball-icon.png');

export function AppBar() {
  return (
    <View style={styles.container}>
      <View style={styles.orbitLarge} />
      <View style={styles.orbitSmall} />
      <Image
        accessibilityLabel="Master Ball"
        source={masterBall}
        style={styles.logo}
      />
      <View style={styles.copy}>
        <Text selectable style={styles.title}>Portal de personajes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.charcoal,
    borderBottomLeftRadius: radius.lg,
    borderBottomRightRadius: radius.lg,
    minHeight: 270,
    overflow: 'hidden',
    padding: spacing.lg,
    paddingTop: spacing.xxl,
  },
  orbitLarge: {
    borderColor: colors.orange,
    borderRadius: radius.full,
    borderWidth: 22,
    height: 240,
    opacity: 0.28,
    position: 'absolute',
    right: -90,
    top: -70,
    transform: [{ rotate: '-18deg' }],
    width: 240,
  },
  orbitSmall: {
    backgroundColor: colors.amber,
    borderRadius: radius.full,
    height: 24,
    opacity: 0.8,
    position: 'absolute',
    right: 45,
    top: 175,
    width: 24,
  },
  logo: {
    borderColor: colors.orange,
    borderRadius: radius.md,
    borderWidth: 2,
    height: 72,
    width: 72,
  },
  copy: {
    gap: spacing.sm,
    marginTop: spacing.lg,
    maxWidth: 310,
  },
  eyebrow: {
    color: colors.amber,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.8,
  },
  title: {
    color: colors.white,
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: -0.6,
  },
  subtitle: {
    color: colors.orangeSoft,
    fontSize: 15,
    lineHeight: 22,
  },
});
