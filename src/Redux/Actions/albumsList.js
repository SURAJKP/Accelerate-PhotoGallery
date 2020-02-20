import * as types from '../ActionTypes/Types';
import api from '../../API/api';

export const listAlbums = albums => ({
    type: types.VF_NZ_ALBUMS,
    payload: albums,
})

export const albumsList = () => dispatch => 
    api.albums.albumsList().then(res => dispatch(listAlbums(res.data))
)