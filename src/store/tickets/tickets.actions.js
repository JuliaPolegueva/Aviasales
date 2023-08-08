import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSearchId = createAsyncThunk('tickets/fetchSearchId', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://aviasales-test-api.kata.academy/search');
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    return await response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (searchId, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);

    //Проверка до обработки данных на ошибку

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    return await response.json();

    //Обработка ошибки, чтобы прокинуть ее в fetchTickets.rejected. Для этого используется rejectWithValue
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
