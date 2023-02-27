import styled from 'styled-components';
import { rem } from '../core/spacing';

export const Arrow = styled.img<{ isArrowRight: boolean }>`
  width: ${rem(100)};
  transform: scaleX(${({ isArrowRight }) => (isArrowRight ? '1' : '-1')});
  transition: transform 0.2s;
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

export const ScoreInput = styled.input.attrs(() => ({ type: 'number' }))`
  width: ${rem(96)};
  margin: ${rem(0)} ${rem(8)} ${rem(0)} ${rem(8)};
  padding-left: ${rem(16)};
  text-align: center;
  align-items: center;
  font-size: ${rem(16)};
`;
