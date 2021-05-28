import {
  combineReducers
} from 'redux';
import {
  UserReducer
} from 'src/redux/reducers/user-reducer';
import SystemReducer from 'src/redux/reducers/system-reducer';
import InfoGridReducer from 'src/modules/info-grid/redux/info-grid-reducer';
import SlidesReducer from 'src/modules/slides/redux/slides-reducer';

const reducers = {
  user: UserReducer,
  system: SystemReducer,
  infoGrid: InfoGridReducer,
  slides: SlidesReducer
};

export default combineReducers(reducers);
