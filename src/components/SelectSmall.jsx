import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
    fontSize: 12,
  },
  palette: {
    primary: blueGrey,
  },
});

export default function SelectSmall({ orderBy, setOrderBy }) {
  const handleChange = (event) => {
    setOrderBy(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl sx={{ m: 1.5, minWidth: 140 }} size="small">
        <InputLabel id="demo-select-small">Ordernar por</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={orderBy}
          label="Ordenar por"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Nenhum</em>
          </MenuItem>
          <MenuItem value={10}>Menor preço</MenuItem>
          <MenuItem value={20}>Maior preço</MenuItem>
          <MenuItem value={30}>Mais comprados</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}
