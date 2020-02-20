/* eslint-disable no-useless-concat */
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import {InvokeGetAPI} from '../API/InvokeAPI'

describe('Validating API data', () => {
    it('Verify albums api return data', done => {
        var mock = new MockAdapter(axios);
        const data = { response: true };
        mock.onGet("http://jsonplaceholder.typicode.com/albums").reply(200, data);

        InvokeGetAPI("http://jsonplaceholder.typicode.com/albums").then(response => {
            expect(response).toEqual(data);
            done();
        });
    });    

    it('Verify users api return data', done => {
        var mock = new MockAdapter(axios);
        const data = { response: true };
        mock.onGet('http://jsonplaceholder.typicode.com/users').reply(200, data);

        InvokeGetAPI('http://jsonplaceholder.typicode.com/users').then(response => {
            expect(response).toEqual(data);
            done();
        });
    });     
    
    it('Verify Photo list by id api return data', done => {
        var mock = new MockAdapter(axios);
        const data = { response: true };
        mock.onGet("http://jsonplaceholder.typicode.com/photos" + "/1").reply(200, data);

        InvokeGetAPI("http://jsonplaceholder.typicode.com/photos" + "/1").then(response => {
            expect(response).toEqual(data);
            done();
        });
    });
    
    it('Verify album name id api return data', done => {
        var mock = new MockAdapter(axios);
        const data = { response: true };
        mock.onGet("http://jsonplaceholder.typicode.com/albums" + "/1").reply(200, data);

        InvokeGetAPI("http://jsonplaceholder.typicode.com/albums" + "/1").then(response => {
            expect(response).toEqual(data);
            done();
        });
    });    
})