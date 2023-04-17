'use client';
import { usePathname } from 'next/navigation';

export default function Ability(): any {
  const pathname = usePathname();

  return (
    <div>
      <p>oi</p>
      {pathname}
    </div>
  );
}
