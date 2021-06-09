import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    place: "Boston",
    coords: {
        lat: 42.361145,
        lng: -71.057083,
    },
};
console.log("hi");
export const searchSlice = createSlice({
    name: "search",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setPlace: (state, action) => {
            state.place = action.payload;
        },
        setCoords: (state, action) => {
            state.coords = action.payload;
        },
    },
});

export const { setPlace, setCoords } = searchSlice.actions;

export const selectPlace = (state) => state.search.place;
export const selectCoords = (state) => state.search.coords;

export default searchSlice.reducer;
