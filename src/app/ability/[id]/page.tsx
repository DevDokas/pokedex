'use client';
import { usePathname } from 'next/navigation';
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
  const [abilityPokemonsFiltered, setAbilityPokemonsFiltered] = useState<any>(
    []
  );
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
    });
  }, [abilityName]);

  const filtered = abilityPokemons.filter(
    (e: any) => e.pokemon.url.split('/')[6] <= 905
  );

  return (
    <Container>
      <Header>
        <Icon src={icon.src} alt="" />
        <AbilityName>{abilityName}</AbilityName>
        <AbilityID>#{String(abilityInfos.id).padStart(3, '0')}</AbilityID>
      </Header>
      <Body>
        <DescriptionContainer>{abilityDescription}</DescriptionContainer>
        <PokemonsContainer>
          {filtered.map((pokemons: any, i: any) => {
            return (
              <div key={i}>
                {pokemons.pokemon.name.replace('-', ' ')}
                {pokemons.pokemon.url.split('/')[6]}
              </div>
            );
          })}
        </PokemonsContainer>
      </Body>
    </Container>
  );
}
