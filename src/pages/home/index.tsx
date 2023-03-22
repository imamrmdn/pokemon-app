import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  inceremented,
  incerementAdded,
  decremented,
  reset,
} from "@/redux/count/reducer";
import { useFetchPokemonQuery } from "@/redux/pokemon/reducer";
import { Box } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import CounterComponent from "./counter.home.comp";
import CardComponent from "./card.home.comp";

export default function HomePage() {
  // get initial value global state
  const countValue = useAppSelector((state) => state?.count?.value);
  // get function reducer using dispatch
  const dispatch = useAppDispatch();

  // local state
  const [pokemon, setPokemon] = useState<string>("1281");

  // get using rtk query
  const { data, error, isLoading, isFetching } = useFetchPokemonQuery(pokemon);

  //
  const handleChange = (e: SelectChangeEvent) => {
    //console.log("value:", e.target.value);
    setPokemon(e.target.value);
  };

  return (
    <Grid
      container
      direction="column"
      rowSpacing={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <>
        {/*  */}
        <CounterComponent
          value={countValue}
          increment={() => dispatch(incerementAdded(8))}
          decrement={() => dispatch(decremented())}
          reset={() => dispatch(reset())}
        />

        <Box style={{ marginTop: "5vh" }} />

        {/*  */}
        <CardComponent
          isLoading={isLoading}
          data={data}
          value={pokemon}
          defaultValue={pokemon}
          onChange={handleChange}
        />
      </>
    </Grid>
  );
}
