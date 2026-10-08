import { useCallback, useEffect, useRef, useState } from 'react';

const CHARACTERS_URL = 'https://rickandmortyapi.com/api/character';

const normalizeCharacter = (character) => ({
  id: character.id,
  name: character.name,
  image: character.image,
  description: `${character.status} · ${character.species}\nOrigen: ${character.origin.name}`,
});

export function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const activeRequest = useRef(null);

  const fetchCharacters = useCallback(async ({ refreshing = false } = {}) => {
    activeRequest.current?.abort();
    const controller = new AbortController();
    activeRequest.current = controller;

    setError(null);
    if (refreshing) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }

    try {
      const response = await fetch(CHARACTERS_URL, {
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`La API respondió con el estado ${response.status}.`);
      }

      const payload = await response.json();
      const results = Array.isArray(payload.results) ? payload.results : [];
      setCharacters(results.map(normalizeCharacter));
    } catch (requestError) {
      if (requestError.name !== 'AbortError') {
        setError('No fue posible cargar los personajes. Revisa tu conexión e inténtalo otra vez.');
      }
    } finally {
      if (!controller.signal.aborted) {
        setIsLoading(false);
        setIsRefreshing(false);
      }
    }
  }, []);

  useEffect(() => {
    fetchCharacters();

    return () => activeRequest.current?.abort();
  }, [fetchCharacters]);

  const refreshCharacters = useCallback(() => {
    fetchCharacters({ refreshing: true });
  }, [fetchCharacters]);

  const retry = useCallback(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return {
    characters,
    error,
    isLoading,
    isRefreshing,
    refreshCharacters,
    retry,
  };
}
