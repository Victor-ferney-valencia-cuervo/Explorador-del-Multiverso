import './app.css'
import type { Character } from '../modules/characters/types'
import { CharacterCard } from '../design/organisms/character-card'

const rickSanchez: Character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
  location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2'],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z'
}

function App(){
  return(
    <div className="app-container">
      <h1 className="titulo-2">Dimencion Log</h1>
      <p className="titulo-1-inicio">(Explorador del universo)</p>
      <input className="buscador" type="text" placeholder="Buscar..."/>
      
      <div className="characters-container">
        <CharacterCard character={rickSanchez} />
      </div>
    </div>
  )
}
export default App