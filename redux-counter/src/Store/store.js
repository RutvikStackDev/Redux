import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, visible: false };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    visibility(state) {
      state.visible = !state.visible;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       ...state,
//       counter: state.counter + action.payload,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }

//   if (action.type === "visibility") {
//     return {
//       ...state,
//       visible: !state.visible,
//     };
//   }
//   return state;
// };

const store = configureStore({ reducer: counterSlice.reducer });

export const counterActions = counterSlice.actions;

export default store;
