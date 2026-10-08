import { memo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, radius, shadows, spacing } from '../theme';

export const CharacterCard = memo(function CharacterCard({
  name,
  image,
  description,
}) {
  return (
    <View style={styles.card}>
      <Image
        accessibilityLabel={`Retrato de ${name}`}
        resizeMode="cover"
        source={{ uri: image }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>DIMENSIÓN</Text>
        </View>
        <Text selectable numberOfLines={2} style={styles.name}>{name}</Text>
        <Text selectable style={styles.description}>{description}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderCurve: 'continuous',
    borderRadius: radius.lg,
    borderWidth: 1,
    boxShadow: shadows.card,
    flexDirection: 'row',
    minHeight: 138,
    overflow: 'hidden',
  },
  image: {
    backgroundColor: colors.orangeSoft,
    width: 132,
  },
  content: {
    flex: 1,
    gap: spacing.sm,
    justifyContent: 'center',
    padding: spacing.md,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.charcoal,
    borderRadius: radius.full,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  badgeText: {
    color: colors.amber,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },
  name: {
    color: colors.charcoal,
    fontSize: 18,
    fontWeight: '900',
    lineHeight: 22,
  },
  description: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 19,
  },
});
