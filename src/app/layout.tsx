import './globals.css';

export const metadata = {
  title: 'Pokedex',
  description: 'Pokedex by Igor Dokai using Pokeapi v2'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): any {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
