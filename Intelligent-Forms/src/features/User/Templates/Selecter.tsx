import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function BasicSelect() {
  const [identifity, setIdentifity] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setIdentifity(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
          size="small"
        >
          <MenuItem value={1}>Identify Card</MenuItem>
          <MenuItem value={2}>Passport card</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default BasicSelect;
