import styled, { css } from 'styled-components';

const pixelsPerRem = 16;

export const rem = (val: number | string): string =>
  `${parseFloat(val.toString()) / pixelsPerRem}rem`;

export const spacing4 = 4;
export const spacing8 = 8;
export const spacing10 = 10;
export const spacing12 = 12;
export const spacing16 = 16;
export const spacing20 = 20;
export const spacing24 = 24;
export const spacing32 = 32;
export const spacing40 = 40;
export const spacing48 = 48;
export const spacing56 = 56;
export const spacing64 = 64;
export const spacing72 = 72;
export const spacing80 = 80;
export const spacing128 = 128;

type SpacingProps = {
  centered?: boolean;
};

const spacingBase = css<SpacingProps>`
  ${({ centered }) =>
    centered &&
    `
      text-align: center;
    `}
`;
export const Spacing4 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-bottom: ${rem(spacing4)};
`;

export const Spacing8 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-bottom: ${rem(spacing8)};
`;

export const Spacing12 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-bottom: ${rem(spacing12)};
`;

export const Spacing16 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-bottom: ${rem(spacing16)};
`;

export const Spacing20 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-bottom: ${rem(spacing20)};
`;

export const Spacing24 = styled.div<SpacingProps>`
  margin-bottom: ${rem(spacing24)};
`;

export const Spacing32 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-bottom: ${rem(spacing32)};
`;

export const Spacing40 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-bottom: ${rem(spacing40)};
`;

export const Spacing48 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-bottom: ${rem(spacing48)};
`;

export const Spacing56 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-bottom: ${rem(spacing56)};
`;

export const Spacing64 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-bottom: ${rem(spacing64)};
`;

export const Spacing72 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-bottom: ${rem(spacing72)};
`;

export const Spacing128 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-bottom: ${rem(spacing128)};
`;

export const SpacingTop4 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-top: ${rem(spacing4)};
`;

export const SpacingTop8 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-top: ${rem(spacing8)};
`;

export const SpacingTop12 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-top: ${rem(spacing12)};
`;

export const SpacingTop16 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-top: ${rem(spacing16)};
`;

export const SpacingTop20 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-top: ${rem(spacing20)};
`;

export const SpacingTop24 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-top: ${rem(spacing24)};
`;

export const SpacingTop32 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-top: ${rem(spacing32)};
`;

export const SpacingTop40 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-top: ${rem(spacing40)};
`;

export const SpacingTop48 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-top: ${rem(spacing48)};
`;

export const SpacingTop56 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-top: ${rem(spacing56)};
`;

export const SpacingTop64 = styled.div<SpacingProps>`
  ${spacingBase}
  margin-top: ${rem(spacing64)};
`;
