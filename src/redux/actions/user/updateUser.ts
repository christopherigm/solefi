import {
  UPDATE_USER
} from 'src/constants/User';

const UpdateUser = ( data: any ): any => {
  return {
    type: UPDATE_USER,
    data: data
  };
};

export default UpdateUser;
