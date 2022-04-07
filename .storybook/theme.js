import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#FF6A3A',
  colorSecondary: '#FF6A3A',

  // UI
  appBg: 'white',
  appContentBg: '#F9F9F9',
  appBorderColor: '#FF6A3A',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#fff',
  barSelectedColor: '#fff',
  barBg: '#FF6A3A',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Komerce UI Component',
  brandUrl: 'https://example.com',
  brandImage: 'https://place-hold.it/350x150',
});