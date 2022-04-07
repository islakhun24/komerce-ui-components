
import { addons } from '@storybook/addons';
import customTheme from './theme';

addons.setConfig({
  theme: customTheme,
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  isToolshown: true,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false, },
    zoom: { hidden: true, },
    eject: { hidden: true, },
    copy: { hidden: false, },
    fullscreen: { hidden: true, },
  },
});