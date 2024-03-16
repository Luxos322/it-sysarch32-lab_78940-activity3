import React from 'react';

const Pokemons = ({ pokemon, language }) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-image">
        <img src={pokemon.image} alt={pokemon.name[language]} />
      </div>
      <div className="pokemon-details">
        <h2>{`[${pokemon.id}] ${pokemon.name[language]}`}</h2>
        <div className="pokemon-types">

          {pokemon.type.map((type) => (
            <span key={type} className="pokemon-type">{type}</span>
          ))}
        </div>
        
            <div className="Pokestats-container">
        <div className="stats-column">
          <p>HP: {pokemon.base.HP}</p>
          <p>Attack: {pokemon.base.Attack}</p>
          <p>Defense: {pokemon.base.Defense}</p>
        </div>
        <div className="stats-column">
          <p>Speed: {pokemon.base.Speed}</p>
          <p>Sp. Attack: {pokemon.base['Sp. Attack']}</p>
          <p>Sp. Defense: {pokemon.base['Sp. Defense']}</p>
        </div>
      </div>
          
        
      </div>
    </div>
  );
};

export default Pokemons;