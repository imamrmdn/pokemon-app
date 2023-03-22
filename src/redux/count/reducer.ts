import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//initial value
const value = 2023

interface CounterState {
  value: number;
}

// initial state
const initialState: CounterState = {
  value,
};

//
const counterSlice = createSlice({
  //named for action reducer
  name: "count",
  initialState,
  reducers: {
    //named function whatever if you want
    inceremented(state) {
      state.value++;
    },
    decremented(state) {
      state.value--;
    },
    reset(state) {
      state.value = value;
    },
    // with payload
    incerementAdded(state, action: PayloadAction<number>){
      state.value += action.payload;
    }
  },
});

//
export const { 
  inceremented, 
  incerementAdded, 
  decremented, 
  reset 
} = counterSlice.actions;

//
export const countReducer = counterSlice.reducer;
