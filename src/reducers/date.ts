import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface DateState {
  value: string;
}

const initialState: DateState = {
  value: '2020-06-27',
};

export const updateDate = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeDate: (state, action: PayloadAction<string>) => {
      console.log('REDUX!! ', {state, action})
      state.value = action.payload;
    },
  },
});

export const { changeDate } = updateDate.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectDate = (state: RootState) => state.date.value;

export default updateDate.reducer;
