import type { Character } from '../../modules/characters/types';
import './character-card.css';

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className="character-card">
      <img
        src={character.image}
        alt={character.name}
        className="character-card__image"
      />
      <div className="character-card__content">
        <h3 className="character-card__name">{character.name}</h3>
        
        <div className="character-card__status">
          <span className={`status-badge status-badge--${character.status.toLowerCase()}`}>
            {character.status}
          </span>
        </div>

        <div className="character-card__details">
          <p><strong>Species:</strong> {character.species}</p>
          <p><strong>Gender:</strong> {character.gender}</p>
          <p><strong>Location:</strong> {character.location.name}</p>
        </div>

        <div className="character-card__episodes">
          <p><strong>Episodes:</strong> {character.episode.length}</p>
        </div>
      </div>
    </div>
  );
}
