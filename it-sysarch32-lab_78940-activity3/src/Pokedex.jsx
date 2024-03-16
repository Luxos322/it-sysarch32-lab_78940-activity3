import React, { useState, useEffect } from 'react';
import Pokemons from './Pokemons';

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [language, setLanguage] = useState('english');

  useEffect(() => {
    fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon')
      .then(response => response.json())
      .then(data => setPokemonList(data));
  }, []);

  return (
    <div>
      <div className="language-buttons">
        <button onClick={() => setLanguage('english')}>English</button>
        <button onClick={() => setLanguage('japanese')}>Japanese</button>
        <button onClick={() => setLanguage('chinese')}>Chinese</button>
        <button onClick={() => setLanguage('french')}>French</button>
      </div>
      <div className="pokemon-grid">
        {pokemonList.map((pokemon) => (
          <Pokemons key={pokemon.id} pokemon={pokemon} language={language} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;