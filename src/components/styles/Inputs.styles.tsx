import styled from 'styled-components';
import { rem } from '../core/styles';

export const Arrow = styled.img<{ isArrowRight: boolean }>`
  transform: scaleX(${({ isArrowRight }) => (isArrowRight ? '1' : '-1')});
  width: ${rem(100)};
`;

export const CheckboxWrapper = styled.label<{ isActive: boolean }>`
  user-select: none;
  color: ${({ isActive }) => (isActive ? `greenYellow` : `crimson`)};
  text-shadow: ${rem(0)} ${rem(0)} ${rem(10)} ${({ isActive }) => (isActive ? `lime` : `red`)};
`;

export const HiddenCheckbox = styled.input.attrs(() => ({ type: 'checkbox' }))`
  height: ${rem(0)};
  width: ${rem(0)};
`;
