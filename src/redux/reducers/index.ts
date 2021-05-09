import {
  combineReducers
} from 'redux';
import UserReducer from 'src/redux/reducers/user-reducer';
import PlatformOptionsReducer from 'src/redux/reducers/platform-options-reducer';
import InfoGridReducer from 'src/modules/info-grid/redux/info-grid-reducer';

const reducers = {
  user: UserReducer,
  platformOptions: PlatformOptionsReducer,
  infoGrid: InfoGridReducer
};

export default combineReducers(reducers);
