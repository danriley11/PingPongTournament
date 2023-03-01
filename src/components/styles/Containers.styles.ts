import styled from 'styled-components';
import { rem, spacing16, spacing24, spacing64 } from '../core/spacing';

export const PingPongGameContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: ${rem(spacing64)};
`;

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  img {
    align-self: center;
  }
`;

export const InputContainer = styled.div`
  display: grid;
  grid-row-gap: ${rem(spacing16)};
  align-items: center;
  margin-bottom: ${rem(spacing24)};
`;

export const NameInputContainer = styled.div`
  display: grid;
`;

export const GamesWonContainer = styled.div`
  display: grid;
  align-items: center;
  margin-bottom: ${rem(spacing24)};
`;

export const CounterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-row-gap: ${spacing16};
  align-items: center;
  margin-bottom: ${rem(spacing64)};
`;

export const PlayerNamesContainer = styled.div`
  display: flex;
  width: 350px;
  flex-wrap: wrap;
  box-sizing: border-box;
  text-align: center;
`;
