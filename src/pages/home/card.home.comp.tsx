//
import { ReactNode } from "react";
import { IResponseApiPokemon } from "@/redux/pokemon/reducer";
import { CardActionArea } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

interface CardCompProps {
  data?: IResponseApiPokemon;
  isLoading?: boolean;
  value: string;
  defaultValue: string;
  onChange:
    | ((event: SelectChangeEvent<string>, child: ReactNode) => void)
    | undefined;
}

export default function CardComponent(props: CardCompProps) {
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
          value={props.value}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          style={{ width: "42vh" }}
        >
          <MenuItem value={1281}>Many</MenuItem>
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
        </Select>
      </FormControl>
      {props?.isLoading ? (
        <Skeleton variant="rounded" width="42vh" height="10vh" />
      ) : (
        props?.data?.results?.map((e) => (
          <Card key={e.url} sx={{ width: "42vh", marginBottom: "1vh" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image="/reptile.jpg"
                alt="pokemon"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {e.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {e.url}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      )}
    </>
  );
}
