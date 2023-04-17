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
  PokemonMovesWrap,
  PokemonAbilitiesContainer,
  PokemonAbilitiesWrap,
  PokemonAbility,
  PokeImageContainer,
  PokeImageBackground,
  PokeImageSprite
} from '@/components/pagePokemonInfos';

export default function PokePage(): unknown {
  const [pokeInfos, setPokeInfos] = useState<any>([]);
  const [pokeForms, setPokeForms] = useState<any>([]);
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
      setPokeAbilities(Pokemon.abilities);
      setPokeMoves(Pokemon.moves);
      setPokeImage(Pokemon.sprites.front_default);
      setPokeForms(Pokemon.forms);
    });
  }, [id, pokeInfos, pokeImage, pokeMoves]);

  const fetchPokemon = (): void => {};

  fetchPokemon();

  console.log(pokeForms);

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
          <h1>Informações Básicas</h1>
          <p>Altura: {pokeInfos.height / 10}m</p>
          <p>Peso: {pokeInfos.weight / 10} Kg</p>
          <p>EXP ao derrotar: {pokeInfos.base_experience}</p>
        </PokemonInfos>
        <PokemonAbilitiesContainer>
          <h1>Habilidades</h1>
          <PokemonAbilitiesWrap>
            {pokeAbilities?.map((skills: any, i: any) => {
              return (
                <PokemonAbility key={i}>{skills.ability.name}</PokemonAbility>
              );
            })}
          </PokemonAbilitiesWrap>
        </PokemonAbilitiesContainer>
        <PokemonMovesContainer>
          <h1>Movimentos</h1>
          <PokemonMovesWrap>
            {pokeMoves?.map((move: any, i: any) => {
              return (
                <PokemonMoves key={i}>
                  {move.move.name.replace('-', ' ')}
                </PokemonMoves>
              );
            })}
          </PokemonMovesWrap>
        </PokemonMovesContainer>
      </Body>
    </Container>
  );
}
