import styled from 'styled-components';

export const LabelStyled = styled.p`
  margin: 16px 0px 8px 0px;
  font-size: larger;
  font-weight: bold;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
`;

export const ListItem = styled.li<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? `greenYellow` : `crimson`)};
  list-style: none;
  padding-right: 16px;
  user-select: none;
  text-shadow: 0px 0px 10px ${({ isActive }) => (isActive ? `lime` : `red`)};

  :hover {
    cursor: pointer;
  }
`;
