import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { AppButton } from './AppButton';
import { CharacterCard } from './CharacterCard';
import { Loading } from './Loading';
import { colors, spacing } from '../theme';

const renderCharacter = ({ item }) => (
  <CharacterCard
    description={item.description}
    image={item.image}
    name={item.name}
  />
);

const keyExtractor = (item) => String(item.id);

function MessageState({ message, onRetry }) {
  return (
    <View style={styles.messageState}>
      <Text selectable style={styles.messageTitle}>El portal no respondió</Text>
      <Text selectable style={styles.message}>{message}</Text>
      {onRetry && (
        <AppButton label="Intentar de nuevo" onPress={onRetry} variant="secondary" />
      )}
    </View>
  );
}

export function CharacterList({
  characters,
  error,
  isLoading,
  isRefreshing,
  onRefresh,
  onRetry,
}) {
  if (isLoading) {
    return <Loading />;
  }

  if (error && characters.length === 0) {
    return <MessageState message={error} onRetry={onRetry} />;
  }

  return (
    <FlatList
      contentContainerStyle={styles.content}
      contentInsetAdjustmentBehavior="automatic"
      data={characters}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      keyExtractor={keyExtractor}
      ListEmptyComponent={<MessageState message="No hay personajes disponibles." />}
      ListHeaderComponent={error ? (
        <Text selectable style={styles.inlineError}>{error}</Text>
      ) : null}
      refreshControl={(
        <RefreshControl
          colors={[colors.orange]}
          onRefresh={onRefresh}
          refreshing={isRefreshing}
          tintColor={colors.orange}
        />
      )}
      renderItem={renderCharacter}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    padding: spacing.md,
    paddingBottom: spacing.xxl,
  },
  separator: {
    height: spacing.md,
  },
  messageState: {
    alignItems: 'stretch',
    flex: 1,
    gap: spacing.md,
    justifyContent: 'center',
    padding: spacing.xl,
  },
  messageTitle: {
    color: colors.charcoal,
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
  },
  message: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  inlineError: {
    backgroundColor: colors.dangerSoft,
    borderRadius: 10,
    color: colors.danger,
    marginBottom: spacing.md,
    padding: spacing.md,
  },
});
