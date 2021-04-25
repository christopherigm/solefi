import {
  SWITCH_DARK_MODE
} from 'src/constants/PlatformOptions';

const SwitchDarkMode = ( darkMode: boolean ): any => {
  return {
    type: SWITCH_DARK_MODE,
    data: darkMode
  };
};

export default SwitchDarkMode;
