import { ThemeProvider } from '@mui/material';
import theme from './../src/theme/index';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


const withThemeProvider = (Story, context) => {
  return <ThemeProvider theme={theme}>{Story()}</ThemeProvider>;
};
export const decorators = [withThemeProvider];