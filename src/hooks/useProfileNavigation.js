import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

export function useProfileNavigation() {
  const navigation = useNavigation();

  const openCharacters = useCallback(() => {
    navigation.navigate('Characters');
  }, [navigation]);

  return { openCharacters };
}
