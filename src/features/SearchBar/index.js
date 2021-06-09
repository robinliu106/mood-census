import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as searchSlice from "./searchSlice";
import * as api from "../api";

const SearchBar = () => {
    const dispatch = useDispatch();

    const [input, setInput] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submitted ", input);

        const { lat, lng } = await api.placeSearch(input);

        console.log("found coords", lat, lng);

        dispatch(searchSlice.setPlace(input));
        dispatch(searchSlice.setCoords({ lat, lng }));
    };

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input className="input is-medium" type="text" onChange={(e) => setInput(e.target.value)} />
            </form>
        </div>
    );
};

export default SearchBar;

// style={{ backgroundColor: "grey", width: "100vw", height: "20vh" }}
