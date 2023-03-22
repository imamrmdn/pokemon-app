import { Item } from "@/components/item/item";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Button from "@mui/material/Button";

interface CounterCompProps {
  value: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export default function CounterComponent(props: CounterCompProps) {
  return (
    <>
      <Grid item>
        <Button
          style={{ width: "42vh" }}
          variant="outlined"
          onClick={props?.increment}
        >
          <AddIcon />
        </Button>
      </Grid>
      <Grid item>
        <Item>{props?.value}</Item>
      </Grid>
      <Grid item>
        <Button
          style={{ width: "42vh" }}
          variant="outlined"
          onClick={props?.decrement}
        >
          <RemoveIcon />
        </Button>
      </Grid>
      <Grid item>
        <Button
          style={{ width: "42vh" }}
          variant="contained"
          onClick={props?.reset}
        >
          <RestartAltIcon />
        </Button>
      </Grid>
    </>
  );
}
