const pixelsPerRem = 16;

export const rem = (val: number | string): string => `${parseFloat(val.toString()) / pixelsPerRem}rem`;
