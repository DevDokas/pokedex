'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import icon from '@/assets/icon.png';
import {
  Container,
  Header,
  Body,
  Icon,
  MoveName,
  MoveID
} from '@/components/pageMoves';

export default function MovePage(): any {
  const [moveInfos, setMoveInfos] = useState<any>([]);
  const [moveDetails, setMoveDetails] = useState<any>([]);
  const [moveDamageClass, setMoveDamageClass] = useState<any>([]);
  const pathname = usePathname();
  const splitPathname = pathname.split('/');
  const moveName = splitPathname[2];

  useEffect(() => {
    const getMoveUrl = (): string =>
      ` https://pokeapi.co/api/v2/move/${moveName}`;

    const movesPromises = [];

    movesPromises.push(fetch(getMoveUrl()).then(async (res) => res.json()));

    Promise.all(movesPromises).then((move) => {
      const moveInfosList = move[0];
      setMoveInfos(moveInfosList);
      setMoveDetails(moveInfosList.effect_entries[0].effect);
      setMoveDamageClass(moveInfosList.damage_class.name);
    });
  }, [moveName]);

  console.log(moveInfos);
  return (
    <Container>
      <Header>
        <Icon src={icon.src} alt="" />
        <MoveName>{moveName.replace('-', ' ')}</MoveName>
        <MoveID>#{String(moveInfos.id).padStart(3, '0')}</MoveID>
      </Header>
      <Body>
        <h1>Efeito: {moveDetails}</h1>
        <div>
          <h1>Dano: {moveInfos.power}</h1>
          <h1>Tipo de Dano: {moveDamageClass}</h1>
          <h1>Precisao: {moveInfos.accuracy}</h1>
          <h1>PPs: {moveInfos.pp}</h1>
          <h1>Prioridade: {moveInfos.priority}</h1>
        </div>
      </Body>
    </Container>
  );
}
