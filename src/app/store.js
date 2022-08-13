import { configureStore } from '@reduxjs/toolkit';
import { bouncehousesReducer } from '../features/bouncehouses/BounceHouseSlice';


import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        bouncehouses: bouncehousesReducer,      
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])

});

