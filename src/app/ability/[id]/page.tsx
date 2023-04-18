'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Container } from '@/components/pageAbility';

export default function Ability(): any {
  const [abilityInfos, setAbilityInfos] = useState<any>([]);
  const [abilityDescription, setAbilityDescription] = useState<any>();
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
      setAbilityDescription(abilityInfosList.effect_entries[0].effect);
    });
  }, [abilityName]);

  console.log(abilityInfos);

  return (
    <Container>
      <header>
        {abilityName}
        {abilityInfos.id}
      </header>
      {abilityDescription}
    </Container>
  );
}
