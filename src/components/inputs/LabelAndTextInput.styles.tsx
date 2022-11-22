import styled from "styled-components";
import { spacing16, spacing8 } from "../core/spacing";
import { rem } from "../core/styles";

export const LabelAndInputContainer = styled.div`
  border-bottom: 1px solid white;
  display: grid;
  grid-template-rows: 1fr 3fr;
`;

export const InputLabel = styled.label`
  font-size: smaller;
`;

export const TextInput = styled.input.attrs(() => ({ type: "text" }))`
  font-size: large;
  margin-top: ${rem(spacing8)};
  margin-bottom: ${rem(spacing16)};
  text-align: center;
`;
