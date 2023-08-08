import { configureStore } from '@reduxjs/toolkit';

//import filtersReducer from '../store/filters/filters.slice';
import transferReducer from '../store/transfer/transfer.slice';
import ticketsReduser from '../store/tickets/tickets.slice';

export const store = configureStore({
  reducer: {
    transfer: transferReducer,
    tickets: ticketsReduser,
    //filters: filtersReducer,
  },
});
