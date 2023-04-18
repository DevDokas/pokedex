'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import pokeBackground from '@/assets/background.png';
import icon from '@/assets/icon.png';
import {
  Header,
  IconImage,
  SearchBar,
  BodyContainer,
  PokeContainer,
  PokeInfosContainer,
  PokeId,
  PokeName,
  PokeTypes,
  PokeImageContainer,
  PokeBackground,
  PokeImage
} from '@/components/mainPageComponents';
import {
  BugType,
  DarkType,
  DragonType,
  ElectricType,
  FairyType,
  FightingType,
  FireType,
  FlyingType,
  GhostType,
  GrassType,
  GroundType,
  IceType,
  NormalType,
  PoisonType,
  PsychicType,
  RockType,
  SteelType,
  WaterType
} from '@/components/mainPageComponents/pokeTypes';

export default function Home(): any {
  const [inputSearch, setInputSearch] = useState('');
  const [fullPokeList, setFullPokeList] = useState<any>([]);
  const router = useRouter();

  useEffect(() => {
    const getPokemonUrl = (id: number): string =>
      ` https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemonPromises = [];

    for (let i = 1; i <= 905; i++) {
      pokemonPromises.push(
        fetch(getPokemonUrl(i)).then(async (res) => res.json())
      );
    }

    Promise.all(pokemonPromises).then((pokemons) => {
      const Pokemons = pokemons;
      setFullPokeList(Pokemons);
    });
  }, []);

  function redirectPage(pokemon: any): any {
    router.push(`/pokemon/${pokemon.id}`);
    return pokemon.id;
  }

  const filteringPokeList = (list: any): any => {
    return list.filter((res: any) => res.name.includes(inputSearch));
  };

  const filteredPokeList = filteringPokeList(fullPokeList);

  return (
    <main>
      <Header>
        <IconImage src={icon.src} />
        <SearchBar
          type="text"
          onChange={(e) => {
            setInputSearch(e.target.value.toLowerCase());
          }}
        />
      </Header>
      <BodyContainer>
        {inputSearch.length > 0
          ? filteredPokeList.map((pokemon: any, i: any) => {
              const TypeEmblem = (type: string): any => {
                if (type === 'bug') {
                  return <BugType>Bug</BugType>;
                } else if (type === 'dark') {
                  return <DarkType>Dark</DarkType>;
                } else if (type === 'dragon') {
                  return <DragonType>Dragon</DragonType>;
                } else if (type === 'electric') {
                  return <ElectricType>Electric</ElectricType>;
                } else if (type === 'fairy') {
                  return <FairyType>Fairy</FairyType>;
                } else if (type === 'fighting') {
                  return <FightingType>Fighting</FightingType>;
                } else if (type === 'fire') {
                  return <FireType>Fire</FireType>;
                } else if (type === 'flying') {
                  return <FlyingType>Flying</FlyingType>;
                } else if (type === 'ghost') {
                  return <GhostType>Ghost</GhostType>;
                } else if (type === 'grass') {
                  return <GrassType>Grass</GrassType>;
                } else if (type === 'ground') {
                  return <GroundType>Ground</GroundType>;
                } else if (type === 'ice') {
                  return <IceType>Ice</IceType>;
                } else if (type === 'normal') {
                  return <NormalType>Normal</NormalType>;
                } else if (type === 'poison') {
                  return <PoisonType>Poison</PoisonType>;
                } else if (type === 'psychic') {
                  return <PsychicType>Psychic</PsychicType>;
                } else if (type === 'rock') {
                  return <RockType>Rock</RockType>;
                } else if (type === 'steel') {
                  return <SteelType>Steel</SteelType>;
                } else if (type === 'water') {
                  return <WaterType>Water</WaterType>;
                }
              };
              return (
                <PokeContainer
                  key={pokemon.id}
                  onClick={() => {
                    redirectPage(pokemon);
                  }}
                >
                  <PokeInfosContainer>
                    <PokeId>#{String(pokemon.id).padStart(3, '0')}</PokeId>
                    <PokeName>{pokemon.name.replace('-', ' ')}</PokeName>
                    <PokeTypes>
                      {TypeEmblem(pokemon.types[0].type.name)}
                      {pokemon.types[1]
                        ? TypeEmblem(pokemon.types[1].type.name)
                        : null}
                    </PokeTypes>
                  </PokeInfosContainer>
                  <PokeImageContainer>
                    <PokeBackground src={pokeBackground.src} alt="" />
                    <PokeImage src={pokemon.sprites.front_default} alt="" />
                  </PokeImageContainer>
                </PokeContainer>
              );
            })
          : fullPokeList.map((pokemon: any, i: any) => {
              const TypeEmblem = (type: string): any => {
                if (type === 'bug') {
                  return <BugType>Bug</BugType>;
                } else if (type === 'dark') {
                  return <DarkType>Dark</DarkType>;
                } else if (type === 'dragon') {
                  return <DragonType>Dragon</DragonType>;
                } else if (type === 'electric') {
                  return <ElectricType>Electric</ElectricType>;
                } else if (type === 'fairy') {
                  return <FairyType>Fairy</FairyType>;
                } else if (type === 'fighting') {
                  return <FightingType>Fighting</FightingType>;
                } else if (type === 'fire') {
                  return <FireType>Fire</FireType>;
                } else if (type === 'flying') {
                  return <FlyingType>Flying</FlyingType>;
                } else if (type === 'ghost') {
                  return <GhostType>Ghost</GhostType>;
                } else if (type === 'grass') {
                  return <GrassType>Grass</GrassType>;
                } else if (type === 'ground') {
                  return <GroundType>Ground</GroundType>;
                } else if (type === 'ice') {
                  return <IceType>Ice</IceType>;
                } else if (type === 'normal') {
                  return <NormalType>Normal</NormalType>;
                } else if (type === 'poison') {
                  return <PoisonType>Poison</PoisonType>;
                } else if (type === 'psychic') {
                  return <PsychicType>Psychic</PsychicType>;
                } else if (type === 'rock') {
                  return <RockType>Rock</RockType>;
                } else if (type === 'steel') {
                  return <SteelType>Steel</SteelType>;
                } else if (type === 'water') {
                  return <WaterType>Water</WaterType>;
                }
              };
              return (
                <PokeContainer
                  key={pokemon.id}
                  onClick={() => {
                    redirectPage(pokemon);
                  }}
                >
                  <PokeInfosContainer>
                    <PokeId>#{String(pokemon.id).padStart(3, '0')}</PokeId>
                    <PokeName>{pokemon.name.replace('-', ' ')}</PokeName>
                    <PokeTypes>
                      {TypeEmblem(pokemon.types[0].type.name)}
                      {pokemon.types[1]
                        ? TypeEmblem(pokemon.types[1].type.name)
                        : null}
                    </PokeTypes>
                  </PokeInfosContainer>
                  <PokeImageContainer>
                    <PokeBackground src={pokeBackground.src} alt="" />
                    <PokeImage src={pokemon.sprites.front_default} alt="" />
                  </PokeImageContainer>
                </PokeContainer>
              );
            })}
      </BodyContainer>
    </main>
  );
}
