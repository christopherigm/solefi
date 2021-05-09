import {
  SWITCH_DARK_MODE
} from 'src/constants/SystemConstants';

const initialState: any = {
  darkMode: false
};

const PlatformOptionsReducer = (state = initialState, action: any): any => {
  switch ( action.type ) {
    case SWITCH_DARK_MODE:
      const newData = { ...state, ...{ darkMode: action.data }};
      return newData;
    default:
      return state;
  }
};

export default PlatformOptionsReducer;
