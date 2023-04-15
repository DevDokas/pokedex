'use client';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import icon from '@/assets/icon.png';
import {
  Container,
  Header,
  Icon,
  PokemonName,
  PokemonId,
  PokemonAbilities
} from '@/components/pagePokemonInfos';

export default function PokePage(): unknown {
  const [pokeInfos, setPokeInfos] = useState<any>([]);
  const [pokeAbilities, setPokeAbilities] = useState<any>([]);
  const pathname = usePathname();
  const page = pathname.split('/');
  const id = page[2];

  console.log(id);

  const fetchPokemon = (): void => {
    const getPokemonUrl = (): string =>
      ` https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemonPromises = [];

    pokemonPromises.push(
      fetch(getPokemonUrl()).then(async (res) => res.json())
    );

    Promise.all(pokemonPromises).then((pokemons) => {
      const Pokemon = pokemons[0];
      setPokeInfos(Pokemon);
      const pokemonAbilitiesList = [];
      pokemonAbilitiesList.push(pokeInfos.abilities);
      setPokeAbilities(pokemonAbilitiesList[0]);
    });
  };
  console.log(pokeAbilities);

  fetchPokemon();

  return (
    <Container>
      <Header>
        <Icon src={icon.src} alt="" />
        <PokemonName>{pokeInfos.name}</PokemonName>
        <PokemonId>{pokeInfos.id}</PokemonId>
      </Header>
      <PokemonAbilities>{}</PokemonAbilities>
    </Container>
  );
}
