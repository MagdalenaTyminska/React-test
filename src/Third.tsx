import { useState } from "react";
import { PokemonInfo3 } from "./PokemonInfo3";

export const Third = () => {
  const [pokemon, setPokemon] = useState<string | null>(null);

  // const handlePokemonSelect = (pokemonName: string) => {
  //   setPokemon(pokemonName);
  // };

  return (
    <>
      <button onClick={() => setPokemon("pikachu")}>Pikachu</button>
      <button onClick={() => setPokemon("ratata")}>Ratata</button>
      <button onClick={() => setPokemon("clefairy")}>Clefairy</button>
      <button onClick={() => setPokemon("charizard")}>Charizard</button>

      {pokemon && <PokemonInfo3 name={pokemon} />}
    </>
  );
};
