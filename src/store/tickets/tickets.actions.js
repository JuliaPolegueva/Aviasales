import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSearchId = createAsyncThunk('tickets/fetchSearchId', async (_, { rejectWithValue }) => {
  try {
    const res = await fetch('https://aviasales-test-api.kata.academy/search');
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    return await res.json();
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (searchId, { rejectWithValue }) => {
  try {
    const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);

    //Проверка до обработки данных на ошибку

    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    return await res.json();

    //Обработка ошибки, чтобы прокинуть ее в fetchTickets.rejected. Для этого используется rejectWithValue
  } catch (err) {
    return rejectWithValue(err.message);
  }
});
