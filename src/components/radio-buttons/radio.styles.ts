import styled from "styled-components";
import { spacing16 } from "../core/spacing";
import { rem } from "../core/styles";

export const RadioInput = styled.input.attrs<JSX.IntrinsicElements["input"]>(() => ({ type: "radio" }))`
  margin-bottom: ${rem(5)};
  margin-right: ${rem(12)};
  display: inline-block;
  /* Fallback list of props depending on browser support */
  vertical-align: top;
  vertical-align: sub;
  vertical-align: text-bottom;
`;

export const RadioInputWrapper = styled.label`
  display: block;
  font-size: ${rem(spacing16)};
  margin-bottom: ${rem(16)};
  padding-left: ${rem(30)};
  position: relative;
`;
