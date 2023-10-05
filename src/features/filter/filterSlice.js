import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
	keyword: '',
	type: 'All',
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		filterByKeyword: (state, action) => {
			state.keyword = action.payload;
		},
		filterByType: (state, action) => {
			state.type = action.payload;
		},
	},
});

export default filterSlice.reducer;
export const { filterByKeyword, filterByType } = filterSlice.actions;
