import {
  UPDATE_USER
} from 'src/constants/User';

const initialState: any = {
  id: null,
  name: 'John',
  last_name: 'Doe',
  email: 'john@doe.com'
};

const UserReducer = (state = initialState, action: any): any => {
  switch ( action.type ) {
    case UPDATE_USER:
      const newData = { ...state, ...action.data };
      return newData;
    default:
      return state;
  }
};

export default UserReducer;
