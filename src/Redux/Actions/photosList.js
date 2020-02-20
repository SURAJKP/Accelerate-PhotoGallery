import * as types from '../ActionTypes/Types';
import api from '../../API/api';

export const listPhotos = photos => ({
    type: types.VF_NZ_PHOTOLIST,
    payload: photos,
})

 export const photosList = () => dispatch =>
    api.photos.photosList().then(res => dispatch(listPhotos(res.data))
)