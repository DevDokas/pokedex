'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import icon from '@/assets/icon.png';
import {
  Container,
  Header,
  Icon,
  AbilityName,
  AbilityID,
  Body,
  DescriptionContainer,
  PokemonsContainer,
  Pokemon,
  PokemonName,
  PokemonID
} from '@/components/pageAbility';

export default function Ability(): any {
  const [abilityInfos, setAbilityInfos] = useState<any>([]);
  const [abilityDescription, setAbilityDescription] = useState<any>();
  const [abilityPokemons, setAbilityPokemons] = useState<any>([]);
  const [abilityDescriptionFiltered, setAbilityDescriptionFiltered] =
    useState<any>([]);
  const router = useRouter();
  const pathname = usePathname();
  const splitPathname = pathname.split('/');
  const abilityName = splitPathname[2];

  useEffect(() => {
    const getMoveUrl = (): string =>
      ` https://pokeapi.co/api/v2/ability/${abilityName}`;

    const abilityPromises = [];

    abilityPromises.push(fetch(getMoveUrl()).then(async (res) => res.json()));

    Promise.all(abilityPromises).then((ability) => {
      const abilityInfosList = ability[0];
      setAbilityInfos(abilityInfosList);
      setAbilityPokemons(abilityInfosList.pokemon);
      setAbilityDescription(abilityInfosList.effect_entries[0].effect);
      setAbilityDescriptionFiltered(
        abilityInfosList.effect_entries.filter(
          (e: any) => e.language.name === 'en'
        )
      );
      try {
        setAbilityDescription(abilityDescriptionFiltered[0].effect);
      } catch (e) {}
    });
  }, [abilityName, abilityDescriptionFiltered]);

  // TODO: Adicionar todos os 1008 pokemons a lista apos cache

  const filteredPokemons = abilityPokemons.filter(
    (e: any) => e.pokemon.url.split('/')[6] <= 386
  );

  return (
    <Container>
      <Header>
        <Icon
          src={icon.src}
          onClick={() => {
            router.push('/');
          }}
        />
        <AbilityName>{abilityName.replace('-', ' ')}</AbilityName>
        <AbilityID>#{String(abilityInfos.id).padStart(3, '0')}</AbilityID>
      </Header>
      <Body>
        <DescriptionContainer>{abilityDescription}</DescriptionContainer>
        <PokemonsContainer>
          <h1>Pokemons com esta habilidade : </h1>
          <br />
          {filteredPokemons.map((pokemons: any, i: any) => {
            const pokeId = pokemons.pokemon.url.split('/')[6];
            return (
              <Pokemon
                key={i}
                onClick={() => {
                  router.push(`pokemon/${pokeId}`);
                }}
              >
                <PokemonName>
                  {pokemons.pokemon.name.replace('-', ' ')}
                </PokemonName>
                <PokemonID>#{String(pokeId).padStart(3, '0')}</PokemonID>
              </Pokemon>
            );
          })}
        </PokemonsContainer>
      </Body>
    </Container>
  );
}
