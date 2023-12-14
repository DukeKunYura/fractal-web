import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentStep: 1,
    activeLink: 'Home',
};

export const masterSlice = createSlice({
    name: 'master',
    initialState,
    reducers: {
        setStep: (state, action: PayloadAction<number>) => {
            state.currentStep = action.payload;
        },
        setActiveLink: (state, action) => {
            state.activeLink = action.payload;
        },
    },
});

export const { setStep } = masterSlice.actions;

export default masterSlice.reducer;
