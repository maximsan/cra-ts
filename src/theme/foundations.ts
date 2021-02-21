interface Dictionary<T = string> extends Record<string, T> {}

const createBreakpoints = (breakPoints: Dictionary): Dictionary[] => {
  const breakPointsArr: Dictionary[] = [];
  for (let [breakpoint, value] of Object.entries(breakPoints)) {
    breakPointsArr[breakpoint] = value;
  }

  return breakPointsArr;
};

const customBreakpoints = {
  sm: '30rem',
  md: '48rem',
  lg: '62rem',
  xl: '80rem',
  xxl: '96rem',
};

const defaultBreakpoints = [0, '30rem', '48rem', '62rem', '80rem', '96rem'];

export const foundations = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  // margin and padding
  space: [0, '0.125rem', '0.25rem', 8, 16, 32, 64, 128, 256, 512],

  breakpoints: Object.assign(Object.values(defaultBreakpoints), createBreakpoints(customBreakpoints)),

  // https://coolors.co/563635-5b6057-6e9075-20462c-81f0e5 - colors pallets generation
  colors: {
    transparent: 'transparent',
    current: 'currentColor',
    black: '#000000',
    white: '#FFFFFF',

    red: {
      100: '#FBDADA',
      200: '#F7B6B6',
      300: '#F39191',
      400: '#EF6C6C',
      500: '#EB4747',
      600: '#E72323',
      700: '#CA1616',
      800: '#A51212',
      900: '#810E0E',
      1000: '#5C0A0A',
    },

    gray: {
      100: '#E9ECEC',
      200: '#D3D9D9',
      300: '#BEC6C6',
      400: '#A8B3B3',
      500: '#92A0A0',
      600: '#7C8D8D',
      700: '#687878',
      800: '#556262',
      900: '#424C4C',
      1000: '#2F3737',
    },

    green: {
      100: '#E3F2E8',
      200: '#E3F2E8',
      300: '#ABD8BA',
      400: '#8FCCA3',
      500: '#73BF8C',
      600: '#57B276',
      700: '#479A62',
      800: '#3A7E50',
      900: '#2D623E',
      1000: '#20462C',
    },
  },
};

export type Foundations = typeof foundations;
