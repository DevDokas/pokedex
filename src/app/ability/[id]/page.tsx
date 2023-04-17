'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import path from 'path';

export default function Ability(): any {
  const [abilityInfos, setAbilityInfos] = useState<any>([]);
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
    });
  }, [abilityName]);

  console.log(abilityInfos);
  return (
    <div>
      <p>oi</p>
      {abilityName}
    </div>
  );
}
