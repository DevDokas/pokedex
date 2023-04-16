'use client';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import background from '@/assets/background.png';
import icon from '@/assets/icon.png';
import {
  Container,
  Header,
  Body,
  Icon,
  PokemonName,
  PokemonId,
  PokemonInfos,
  PokemonMoves,
  PokemonMovesContainer,
  PokemonAbilities,
  PokeImageContainer,
  PokeImageBackground,
  PokeImageSprite
} from '@/components/pagePokemonInfos';

export default function PokePage(): unknown {
  const [pokeInfos, setPokeInfos] = useState<any>([]);
  const [pokeAbilities, setPokeAbilities] = useState<any>([]);
  const [pokeMoves, setPokeMoves] = useState<any>([]);
  const [pokeImage, setPokeImage] = useState<any>([]);
  const router = useRouter();
  const pathname = usePathname();
  const page = pathname.split('/');
  const id = page[2];

  console.log(id);

  useEffect(() => {
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
      const pokemonMovesList = [];
      pokemonAbilitiesList.push(pokeInfos.abilities);
      pokemonMovesList.push(pokeInfos.moves);
      setPokeAbilities(pokemonAbilitiesList.shift());
      setPokeMoves(pokemonMovesList.shift());
      setPokeImage(Pokemon.sprites.front_default);
    });
  }, [id, pokeInfos, pokeImage, pokeMoves]);

  const fetchPokemon = (): void => {};

  fetchPokemon();

  return (
    <Container>
      <Header>
        <Icon
          src={icon.src}
          onClick={() => {
            router.push('/');
          }}
        />
        <PokemonName>{pokeInfos.name}</PokemonName>
        <PokemonId>#{String(pokeInfos.id).padStart(3, '0')}</PokemonId>
      </Header>
      <Body>
        <PokeImageContainer>
          <PokeImageBackground src={background.src} />
          <PokeImageSprite src={pokeImage} alt="" />
        </PokeImageContainer>
        <PokemonInfos>
          <h1>Infos basicas do Pokemon</h1>
          <p>Altura: {pokeInfos.height / 10}m</p>
          <p>Peso: {pokeInfos.weight / 10} Kg</p>
        </PokemonInfos>
        <PokemonMoves>
          <h1>Movimentos</h1>
          <PokemonMovesContainer>
            {pokeMoves?.map((move: any, i: any) => {
              return <h3 key={i}>{move.move.name.replace('-', ' ')}</h3>;
            })}
          </PokemonMovesContainer>
        </PokemonMoves>
        <PokemonAbilities>
          <h1>Habilidades</h1>
          {pokeAbilities?.map((skills: any, i: any) => {
            return <h3 key={i}>{skills.ability.name}</h3>;
          })}
        </PokemonAbilities>
      </Body>
    </Container>
  );
}
