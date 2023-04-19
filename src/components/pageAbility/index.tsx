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

export const Icon = styled.img`
  height: 7vh;
`;

export const AbilityName = styled.h1`
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

export const AbilityID = styled.h3``;

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5vh;
  margin-top: 12.5vh;
  padding: 2vh;
`;

export const DescriptionContainer = styled.p`
  padding: 2vh;
  font-size: 2.5vh;
  font-weight: 600;
  background-color: ${secondaryColor};
  color: ${terciaryColor};
  width: 90vw;
  border: 0;
  border-radius: 1vh;
  text-align: center;
  line-height: 3.5vh;
  letter-spacing: 0.1vw;
`;

export const PokemonsContainer = styled.div`
  text-align: center;
  background-color: ${secondaryColor};
  color: ${terciaryColor};
  padding: 2vh;
  width: 90vw;
  border: 0;
  border-radius: 1vh;

  h1 {
    font-size: 2.7vh;
  }
`;

export const Pokemon = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5vh;
  align-items: center;
  border-bottom: 1px solid ${terciaryColor};
`;

export const PokemonName = styled.p`
  font-size: 2.5vh;
  text-transform: capitalize;
`;

export const PokemonID = styled.p``;
