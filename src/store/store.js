import { configureStore } from "@reduxjs/toolkit";
import searchFilms from "./searchFilms";
const store = configureStore({
    reducer : {
        search : searchFilms
    }
})

export default store;
