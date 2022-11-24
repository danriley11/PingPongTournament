import styled from 'styled-components';
import { spacing12, spacing64 } from '../core/spacing';
import { rem } from '../core/styles';

type CounterButtonProps = {
  $width: string;
  $height: string;
  marginBottom: string;
};

export const CounterButton = styled.button.attrs<CounterButtonProps>({
  type: 'button',
})`
  border: none;
  margin-top: ${rem(spacing12)};
  background-color: grey;
  font-size: larger;
  height: fit-content;
  align-self: center;
  width: ${({ $width = spacing64 }) => rem($width)};
  height: ${({ $height = spacing64 }) => rem($height)};
  text-align: center;
  margin-bottom: ${({ $marginBottom = 0 }) => rem($marginBottom)};
`;
