import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import initializeStore from './Redux/Store/Store'
import AppRoute from './Routing/Routing'


const InitiateApp = props => {
    const store = initializeStore();
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppRoute />
            </Provider>
        </BrowserRouter>
    );
};

export default InitiateApp