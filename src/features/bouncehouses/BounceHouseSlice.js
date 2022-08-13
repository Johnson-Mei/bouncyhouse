import { createSlice } from '@reduxjs/toolkit';
import { BOUNCEHOUSES } from '../../app/shared/BOUNCEHOUSES';

const initialState = {
    bouncehousesArray: BOUNCEHOUSES
};

const bouncehousesSlice = createSlice({
    name: 'bouncehouses',
    initialState 
});

export const bouncehousesReducer = bouncehousesSlice.reducer;


export const selectAllBouncehouses = (state) => {
    return state.bouncehouses.bouncehousesArray;
};

export const selectBounceHouseById = (id) => (state) => {
    return state.bouncehouses.bouncehousesArray.find(
        (bouncehouse) => bouncehouse.id === parseInt(id)
    );
};

export const selectFeaturedBounceHouse = (state) => {
    return state.bouncehouses.bouncehousesArray.find((bouncehouse) => bouncehouse.featured);
};