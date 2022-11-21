import styled from "styled-components";
import { spacing12, spacing64 } from "../core/spacing";
import { rem } from "../core/styles";

export const CounterButton = styled.button.attrs({
  type: "button",
})`
  border: none;
  margin-top: ${rem(spacing12)};
  background-color: grey;
  font-size: larger;
  height: fit-content;
  align-self: center;
  width: ${rem(spacing64)};
  height: ${rem(spacing64)};
`;
