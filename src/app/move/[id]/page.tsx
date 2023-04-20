'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function MovePage(): any {
  const [moveInfos, setMoveInfos] = useState<any>([]);
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
    });
  }, [moveName]);

  console.log(moveInfos);
  return (
    <div>
      <h1>{moveName.replace('-', ' ')}</h1>
    </div>
  );
}
