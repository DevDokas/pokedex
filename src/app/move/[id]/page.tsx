'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import icon from '@/assets/icon.png';
import {
  Container,
  Header,
  Body,
  Icon,
  MoveName,
  MoveID,
  MoveEffect,
  MoveInfosContainer,
  MoveInfo
} from '@/components/pageMoves';

export default function MovePage(): any {
  const [moveInfos, setMoveInfos] = useState<any>([]);
  const [moveDetails, setMoveDetails] = useState<any>([]);
  const [moveDamageClass, setMoveDamageClass] = useState<any>([]);
  const router = useRouter();
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
        <Icon
          src={icon.src}
          onClick={() => {
            router.push('/');
          }}
        />
        <MoveName>{moveName.replace('-', ' ')}</MoveName>
        <MoveID>#{String(moveInfos.id).padStart(3, '0')}</MoveID>
      </Header>
      <Body>
        <MoveEffect>Efeito: {moveDetails}</MoveEffect>
        <MoveInfosContainer>
          <MoveInfo>
            <span>Dano: </span>
            {moveInfos.power}
          </MoveInfo>
          <MoveInfo>
            <span>Tipo de Dano: </span>
            {moveDamageClass}
          </MoveInfo>
          <MoveInfo>
            <span>Precisao: </span>
            {moveInfos.accuracy}
          </MoveInfo>
          <MoveInfo>
            <span>PPs: </span>
            {moveInfos.pp}
          </MoveInfo>
          <MoveInfo>
            <span>Prioridade: </span>
            {moveInfos.priority}
          </MoveInfo>
        </MoveInfosContainer>
      </Body>
    </Container>
  );
}
