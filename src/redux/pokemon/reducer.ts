import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//
export interface IResponseApiPokemon {
  count: number;
  next: string;
  previous: null | string;
  results: IResultPokemon[];
}

export interface IResultPokemon {
  name: string;
  url: string;
}

type QueryArgs = number | string | void;

export const pokemonSlice = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/pokemon",
  }),
  tagTypes: ["GetAllPokemon"],
  endpoints(builder) {
    return {
      fetchPokemon: builder.query<IResponseApiPokemon, QueryArgs>({
        //default limit = 5
        query(limit = 5) {
          return `/?limit=${limit}`;
        },
        providesTags: ["GetAllPokemon"],
      }),
    };
  },
});

export const { useFetchPokemonQuery } = pokemonSlice;
