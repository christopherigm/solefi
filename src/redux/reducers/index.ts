import {
  combineReducers
} from 'redux';
import UserReducer from 'src/redux/reducers/userReducer';
import PlatformOptionsReducer from 'src/redux/reducers/platformOptions';

const reducers = {
  user: UserReducer,
  platformOptions: PlatformOptionsReducer
};

export default combineReducers(reducers);
