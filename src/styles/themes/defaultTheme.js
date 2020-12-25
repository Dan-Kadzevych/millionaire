const breakpointKeys = ['xs', 'sm', 'md', 'lg', 'xl'];
const breakpointValues = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const defaultTheme = {
  breakpoints: {
    keys: breakpointKeys,
    values: breakpointValues,
    down: (key) => {
      return `@media (max-width: ${breakpointValues[key]}px)`;
    },
  },
};

export default defaultTheme;
