import { StyleSheet, View } from 'react-native';
import { CharacterList } from '../components/CharacterList';
import { useCharacters } from '../hooks/useCharacters';
import { colors } from '../theme';

export function CharactersScreen() {
  const {
    characters,
    error,
    isLoading,
    isRefreshing,
    refreshCharacters,
    retry,
  } = useCharacters();

  return (
    <View style={styles.screen}>
      <CharacterList
        characters={characters}
        error={error}
        isLoading={isLoading}
        isRefreshing={isRefreshing}
        onRefresh={refreshCharacters}
        onRetry={retry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.cream,
    flex: 1,
  },
});
