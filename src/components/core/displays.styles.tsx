import styled from 'styled-components';
import { rem } from './styles';

type GridProps = {
  cols?: string;
  colGap?: string | number;
  marginLeft?: number;
  marginRight?: number;
};

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ cols = '1fr 1fr' }) => cols};
  column-gap: ${({ colGap = '1fr' }) => colGap};
  margin-left: ${({ marginLeft = 0 }) => rem(marginLeft)};
  margin-left: ${({ marginRight = 0 }) => rem(marginRight)};
`;
