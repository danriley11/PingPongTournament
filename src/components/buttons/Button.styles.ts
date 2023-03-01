import styled from 'styled-components';
import { rem, spacing12, spacing64 } from '../core/spacing';

type ButtonProps = {
  $width?: string;
  $height?: string;
  marginBottom?: string;
};

export const Button = styled.button.attrs<ButtonProps>({
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
