import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"

export const fetchText = createAsyncThunk(
    'tt',
    async (text) => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${text}`);

        const data = await res.data.results

        return data
    }
)

const searchFilms = createSlice({
    name : "search",
    initialState : {
        s : [],
        text : ''
    },
    reducers : {
        changeText (state, action) {
            state.text = action.payload
        }
    },

    extraReducers : {
        [fetchText.fulfilled] : (state, action) => {
            state.s = action.payload
        }
    }

})

export const {changeText} = searchFilms.actions
export default searchFilms.reducer