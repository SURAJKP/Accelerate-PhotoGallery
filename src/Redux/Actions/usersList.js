import * as types from '../ActionTypes/Types';
import api from '../../API/api';

export const listUsers = (users) => ({
    type: types.VF_NZ_USERLIST,
    payload: users,
})

export const usersList = () => dispatch =>
    api.users.usersList().then(res => dispatch(listUsers(res.data))
)