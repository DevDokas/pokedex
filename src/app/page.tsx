'use client';
import React, { useEffect, useState } from 'react';

import icon from '@/assets/icon.png';
import {
  Header,
  IconImage,
  SearchBar,
  BodyContainer,
  PokeContainer,
  PokeName,
  PokeTypes,
  PokeImage,
  PoisonType
} from '@/components/mainPageComponents';

export default function Home(): any {
  const [inputSearch, setInputSearch] = useState('');
  const [fullPokeList, setFullPokeList] = useState<any>([]);
  const [fullPokeIdList, setFullPokeIdList] = useState([]);

  const fetchPokemon = (): void => {
    const getPokemonUrl = (id: number): string =>
      ` https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemonPromises = [];

    for (let i = 1; i <= 150; i++) {
      pokemonPromises.push(
        fetch(getPokemonUrl(i)).then(async (res) => res.json())
      );
    }

    Promise.all(pokemonPromises).then((pokemons) => {
      const Pokemons = pokemons;
      setFullPokeList(Pokemons);
    });
  };

  fetchPokemon();

  return (
    <main>
      <Header>
        <IconImage src={icon.src} />
        <SearchBar
          type="text"
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />
      </Header>
      <BodyContainer>
        {fullPokeList.map((pokemon: any, i: any) => {
          return (
            <PokeContainer key={pokemon.id}>
              <PokeName>{pokemon.name.replace('-', ' ')}</PokeName>
              <PokeTypes>
                <p>{pokemon.types[0].type.name}</p>
                <p>
                  {pokemon.types[1] ? (
                    <p>{pokemon.types[1].type.name}</p>
                  ) : null}
                </p>
              </PokeTypes>
              <PokeImage src={pokemon.sprites.front_default} alt="" />
            </PokeContainer>
          );
        })}
      </BodyContainer>
    </main>
  );
}
