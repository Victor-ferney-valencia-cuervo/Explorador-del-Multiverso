import './app.css'
import { useState } from 'react'
import type { Character } from '../modules/characters/types'
import { CharacterCard } from '../design/organisms/character-card'

const intialCharacters: Character[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
    location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z'
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
    location: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    url: 'https://rickandmortyapi.com/api/character/2',
    created: '2017-11-04T18:50:21.651Z'
  },
  {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    location: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/6'],
    url: 'https://rickandmortyapi.com/api/character/3',
    created: '2017-11-04T19:09:56.428Z'
  },
  {
    id: 4,
    name: 'Beth Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    location: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/6'],
    url: 'https://rickandmortyapi.com/api/character/4',
    created: '2017-11-04T19:22:43.665Z'
  },
  {
    id: 5,
    name: 'Jerry Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    location: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/6'],
    url: 'https://rickandmortyapi.com/api/character/5',
    created: '2017-11-04T19:26:56.301Z'
  }
]

function App() {
  const [search, setSearch] = useState('')

  const filteredCharacters = intialCharacters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app-container">
      <h1 className="titulo-2">Dimencion Log</h1>
      <p className="titulo-1-inicio">(Explorador del universo)</p>

      <input
        className="buscador"
        type="text"
        placeholder="Buscar personaje..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="characters-container">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  )
}

export default App