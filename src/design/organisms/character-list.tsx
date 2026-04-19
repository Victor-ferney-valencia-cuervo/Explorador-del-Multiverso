import type { Character } from '../../modules/characters/types';
import { CharacterCard } from './character-card';
import './character-list.css';

interface CharacterListProps {
  characters: Character[];
  isLoading?: boolean;
  error?: string | null;
}

export function CharacterList({ characters, isLoading, error }: CharacterListProps) {
  if (error) {
    return (
      <div className="character-list__error">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="character-list__loading">
        <p>Cargando personajes...</p>
      </div>
    );
  }

  if (characters.length === 0) {
    return (
      <div className="character-list__empty">
        <p>No se encontraron personajes</p>
      </div>
    );
  }

  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
