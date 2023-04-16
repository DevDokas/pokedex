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
  z-index: 1;
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
  margin-top: 12.5vh;
  padding: 0 1vw 0 1vw;
  z-index: 0;
`;

export const PokeContainer = styled.div`
  position: relative;
  display: flex;
  height: 20vh;
  width: 100%;
  border-bottom: 0.5vh solid ${terciaryColor};
  border-radius: 2.5vh;
  background-color: ${secondaryColor};
  overflow: hidden;
`;

export const PokeInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5vh 1.5vh 2.5vh 1.5vh;
  width: 50%;
  max-width: 50%;
`;

export const PokeName = styled.h2`
  text-transform: capitalize;
  color: #141414;
  font-weight: 700;
`;

export const PokeTypes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1vh;
  height: 4vh;
  width: 100%;
`;

export const PokeImageContainer = styled.div`
  width: 50%;
  max-width: 50%;
`;

export const PokeBackground = styled.img`
  height: 100%;
  width: 100%;
`;

export const PokeImage = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 55%;
  left: 75%;
  height: 80%;
  filter: drop-shadow(5px 5px 4px #1d1d1f);
`;

export const ModalContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: red;
`;
