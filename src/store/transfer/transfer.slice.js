import { createSlice } from '@reduxjs/toolkit';

export const transferSlice = createSlice({
  name: 'transfer',
  initialState: {
    all: false,
    0: true,
    1: false,
    2: false,
    3: false,
  },
  reducers: {
    checkFilter: (state, action) => {
      const [key, event, filterNames] = action.payload;

      if (key === 'all') {
        filterNames.forEach(key => (state[key] = event));
      } else {
        state[key] = event;

        const allCheck = filterNames.every(key => {
          if (key === 'all') return true;
          return state[key] === true;
        });

        if (filterNames.some(key => state[key] === false)) state['all'] = false;
        if (allCheck) state['all'] = true;
      }
    },
  },
});

const { actions, reducer } = transferSlice;

export const { checkFilter } = actions;
export default reducer;
