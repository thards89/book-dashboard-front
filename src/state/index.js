import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark"
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
        },
        setBooks: (state, action) => {
            state.books = action.payload.books;
          },
        setApiBooks: (state, action) => {
            state.apiBooks = action.payload.apiBooks;
          },
    }
})

export const { setMode, setBooks, setApiBooks } = globalSlice.actions;

export default globalSlice.reducer;