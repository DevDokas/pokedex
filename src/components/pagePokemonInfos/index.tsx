import { primaryColor } from '@/config/colorPallet';
import styled from 'styled-components';
export const Container = styled.div``;

export const Header = styled.header`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  width: 100%;
  padding: 0 3vw 0 3vw;
  background-color: ${primaryColor};
  z-index: 5;
  border: 0;
  border-radius: 0 0 1.5vh 1.5vh;
`;

export const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const Icon = styled.img`
  height: 10vh;
`;

export const PokemonName = styled.h1`
  text-transform: capitalize;
`;

export const PokemonId = styled.h3``;

export const PokemonInfos = styled.div`
  height: auto;
  width: 90%;
  padding: 3vh;
  background-color: #ff0055;
  z-index: 3;
`;

export const PokemonMoves = styled.div`
  height: auto;
  width: 90%;
  padding: 3vh;
  background-color: #00ff00;
`;

export const PokemonMovesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const PokemonAbilities = styled.div`
  height: auto;
  width: 90%;
  padding: 3vh;
  background-color: blue;
`;

export const PokeImageContainer = styled.div`
  position: relative;
  height: 50vh;
  width: 100vw;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const PokeImageBackground = styled.img`
  position: absolute;
  top: -1vh;
  height: 60vh;
  z-index: 1;
`;

export const PokeImageSprite = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 60%;
  left: 50%;
  height: 65%;
  z-index: 2;
`;
