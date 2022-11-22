import styled from 'styled-components';
import { spacing12, spacing64, spacing8 } from '../core/spacing';
import { rem } from '../core/styles';

type CounterButtonProps = {
  $width?: number;
  $height?: number;
  marginBottom?: number;
};

export const CounterButton = styled.button.attrs({ type: 'button' })<CounterButtonProps>`
  border: none;
  margin-top: ${rem(spacing12)};
  background-color: grey;
  font-size: larger;
  height: fit-content;
  align-self: center;

  width: ${({ $width = spacing64 }) => rem($width)};
  height: ${({ $height = spacing64 }) => rem($height)};
  margin-bottom: ${({ marginBottom = spacing8 }) => rem(marginBottom)};
`;
