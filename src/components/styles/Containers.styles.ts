import styled from 'styled-components';
import { spacing16, spacing24, spacing64 } from '../core/spacing';
import { rem } from '../core/styles';

type PlayerContainerProps = {
  marginLeft: number;
  marginRight: number;
};
export const PlayerContainer = styled.div<PlayerContainerProps>`
  margin-left: ${({ marginLeft }) => rem(marginLeft)};
  margin-right: ${({ marginRight }) => rem(marginRight)};
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
  box-sizing: border-box;
  text-align: center;
`;

export const ControlsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row: 1fr 1fr 1fr 1fr;
  justify-items: center;

  padding: 0px;
`;
