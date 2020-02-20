import axios from 'axios';

export default {
    users: {
        usersList: () =>
        axios.get("http://jsonplaceholder.typicode.com/users").then(res => res)
    },
    albums: {
        albumsList: () =>
        axios.get("http://jsonplaceholder.typicode.com/albums").then(res => res)
    },
    photos: {
        photosList: () =>
        axios.get("http://jsonplaceholder.typicode.com/photos").then(res => res)
    }
};