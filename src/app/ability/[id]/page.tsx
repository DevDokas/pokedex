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
  PokemonsContainer
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
      } catch (e) {
        console.log(e);
      }
    });
  }, [abilityName, abilityDescriptionFiltered]);

  // TODO: Adicionar todos os 1008 pokemons a lista apos cache

  const filteredPokemons = abilityPokemons.filter(
    (e: any) => e.pokemon.url.split('/')[6] <= 150
  );

  console.log(abilityDescription);

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
          {filteredPokemons.map((pokemons: any, i: any) => {
            const pokeId = pokemons.pokemon.url.split('/')[6];
            return (
              <div
                key={i}
                onClick={() => {
                  router.push(`pokemon/${pokeId}`);
                }}
              >
                {pokemons.pokemon.name.replace('-', ' ')}
                {pokeId}
              </div>
            );
          })}
        </PokemonsContainer>
      </Body>
    </Container>
  );
}
