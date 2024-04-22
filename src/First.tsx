import { useEffect, useState } from "react";

type Ability = {
  ability: {
    name: string;
  };
};

type Pokemon = {
  name: string;
  abilities: Ability[];
};

type Props = {
  name: string;
};

export const First = ({ name }: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const getPokemon = async (pokemonName: string) => {
    //asyn await zamiast then catch
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
    );
    const data: Pokemon = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    getPokemon(name); //name przekazane dopiero tutaj zamiast do getPokemon, bardziej generycznie
  }, []);

  return (
    <>
      <h1>Nazwa pokemona: {pokemon?.name}</h1>
      <h3>Umiejętności:</h3>
      <ul>
        {pokemon?.abilities.map(({ ability }) => (
          <li key={ability.name}>{ability.name}</li>
        ))}
      </ul>
    </>
  );
};
