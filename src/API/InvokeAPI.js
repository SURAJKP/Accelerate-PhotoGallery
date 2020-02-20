import axios from 'axios'

export const InvokeGetAPI = (url) => {
    return new Promise((resolve, reject) => {
        var params = {}

        axios({
            method: 'GET',
            url,
            //headers: { 'Authorization': 'Basic YXBwbGljYW50Og==' },
            params
        }).then(({ status, data }) => {
            if (status === 200) {
                resolve(data);
            } else {
                reject(new Error('error'));
            }
        });
    });
}

