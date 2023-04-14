import {
  primaryColor,
  secondaryColor,
  terciaryColor
} from '@/config/colorPallet';
import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  height: 12vh;
  width: 100%;
  padding: 0 5vw 0 5vw;
  background-color: ${primaryColor};
  border: 0;
  border-radius: 0 0 1.5vh 1.5vh;
`;

export const IconImage = styled.img`
  height: 7vh;
`;

export const SearchBar = styled.input`
  height: 4vh;
  width: 70vw;
  padding: 0 3vw 0 3vw;
  border: 0;
  border-radius: 3vh;
  background-color: ${secondaryColor};
  color: ${terciaryColor};
  transition: 0.05s;

  &:focus {
    outline: none;
    transform: scale(1.05);
  }
`;

export const BodyContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12.5vh;
`;

export const PokeContainer = styled.div`
  display: flex;
  height: 10vh;
  width: 95%;
  border-bottom: 0.3vh solid ${terciaryColor};
  background-color: ${secondaryColor};
`;

export const PokeName = styled.h2``;

export const PokeTypes = styled.h3``;

export const PokeImage = styled.img``;

export const PoisonType = styled.div``;
