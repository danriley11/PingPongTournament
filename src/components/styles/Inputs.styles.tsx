import styled from 'styled-components';

export const CounterButton = styled.button<React.ButtonHTMLAttributes<HTMLButtonElement>>`
  background-color: red;
  width: 32px;
  height: 32px;
  text-align: center;
`;

export const Arrow = styled.img<{ isArrowRight: boolean }>`
  transform: scaleX(${({ isArrowRight }) => (isArrowRight ? '1' : '-1')});
  width: 100px;
`;
