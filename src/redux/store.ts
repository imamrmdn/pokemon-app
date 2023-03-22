import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./count/reducer";
import { pokemonSlice } from "./pokemon/reducer";

export const store = configureStore({
  reducer: {
    //named reducer
    count: countReducer,
    [pokemonSlice.reducerPath]: pokemonSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonSlice.middleware),
});

// dispatch store
export type AppDispatch = typeof store.dispatch;

// get state from reducer
export type RootState = ReturnType<typeof store.getState>;
