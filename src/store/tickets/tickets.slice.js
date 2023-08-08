import { createSlice, current } from '@reduxjs/toolkit';

import { getDurationTime } from '../../utils/getDurationTime';

import { fetchSearchId, fetchTickets } from './tickets.actions';

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    searchId: '',
    tickets: [],
    renderedTickets: 5,
    isLoading: false,
    isError: false,
    errMasage: '',
    stop: false,
    statusFetch500: 0,
  },
  reducers: {
    getMoreTickets: (state, action) => {
      state.renderedTickets += 5;
    },

    sortTicketsByPrice: (state, action) => {
      const filterTickets = current(state.tickets).slice();
      state.tickets = filterTickets.sort((prev, next) => prev.price - next.price);
    },

    sortTicketsBySpeed: (state, action) => {
      const filterTickets = current(state.tickets).slice();
      state.tickets = filterTickets.sort((prev, next) => getDurationTime(prev) - getDurationTime(next));
    },

    sortTicketsOptimal: (state, action) => {
      const filterTickets = current(state.tickets).slice();
      state.tickets = filterTickets.sort((prev, next) => {
        return getDurationTime(prev) + prev.price - (getDurationTime(next) + next.price);
      });
    },
  },
  extraReducers: {
    [fetchSearchId.pending]: state => {
      state.isLoading = true;
      state.isError = false;
    },
    [fetchTickets.pending]: state => {
      state.isLoading = true;
      state.isError = false;
    },
    [fetchSearchId.fulfilled]: (state, action) => {
      state.searchId = action.payload.searchId;
    },
    [fetchTickets.fulfilled]: (state, action) => {
      state.tickets.push(...action.payload.tickets);
      state.stop = action.payload.stop;
      state.isLoading = !action.payload.stop;
      state.isError = false;
    },
    [fetchSearchId.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errMasage = action.payload;
    },
    [fetchTickets.rejected]: (state, action) => {
      if (action.payload === '500') {
        state.statusFetch500 += 1;
      } else {
        state.isLoading = false;
        state.isError = true;
        state.errMasage = action.payload;
      }
    },
  },
});

export const { getMoreTickets, sortTicketsByPrice, sortTicketsBySpeed, sortTicketsOptimal } = ticketsSlice.actions;
export default ticketsSlice.reducer;
