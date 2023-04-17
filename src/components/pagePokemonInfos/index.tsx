import {
  primaryColor,
  secondaryColor,
  terciaryColor
} from '@/config/colorPallet';
import styled from 'styled-components';
export const Container = styled.div``;

export const Header = styled.header`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12vh;
  width: 100%;
  padding: 0 3vw 0 3vw;
  gap: 3vw;
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
  padding: 0 0 1.5vh 0;
  width: 100vw;
  gap: 1vh;
`;

export const Icon = styled.img`
  height: 7vh;
`;

export const PokemonName = styled.h1`
  text-transform: capitalize;
  height: auto;
  width: 75%;
  padding: 1vh 3vh 1vh 3vh;
  text-align: center;
  background-image: linear-gradient(
    transparent,
    transparent,
    rgba(0, 0, 0, 0.3)
  );
  border-bottom: 1px solid ${terciaryColor};
  border-radius: 1vh;
`;

export const PokemonId = styled.h3``;

export const PokemonInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 1.5vh;
  height: auto;
  width: 90%;
  padding: 3vh;
  border: 0;
  border-radius: 1vh;
  color: ${terciaryColor};
  background-color: ${secondaryColor};
`;

export const PokemonInfosWrap = styled.div`
  width: 100%;
`;

export const PokemonInfos = styled.p`
  font-size: 2.3vh;
  & span {
    font-size: 2.5vh;
    font-weight: 800;
  }
  &:first-letter {
    text-transform: capitalize;
  }
`;

export const PokemonMovesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 1.5vh;
  height: auto;
  width: 90%;
  padding: 3vh;
  border: 0;
  border-radius: 1vh;
  text-transform: capitalize;
  color: ${terciaryColor};
  background-color: ${secondaryColor};
`;

export const PokemonMovesWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  width: 100%;
`;

export const PokemonMoves = styled.h3`
  text-align: center;
  width: 100%;
  padding: 1vh;
  background-color: rgba(0, 0, 0, 0.3);
  border: 0;
  border-radius: 1vh;
`;

export const PokemonAbilitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 1.5vh;
  height: auto;
  width: 90%;
  padding: 3vh;
  border: 0;
  border-radius: 1vh;
  text-transform: capitalize;
  color: ${terciaryColor};
  background-color: ${secondaryColor};
`;

export const PokemonAbilitiesWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  width: 100%;
`;

export const PokemonAbility = styled.h3`
  text-align: center;
  width: 100%;
  padding: 1vh;
  background-color: rgba(0, 0, 0, 0.3);
  border: 0;
  border-radius: 1vh;
`;

export const PokeImageContainer = styled.div`
  position: relative;
  height: 50vh;
  width: 100vw;
  display: flex;
  align-items: center;
  border: 0;
  border-radius: 1vh;
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
