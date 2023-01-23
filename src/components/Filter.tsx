import { useAppDispatch } from "../redux/hooks";
import { setFilter } from "../redux/filterSlice";
import React from "react";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <Box sx={{display: 'inline-grid'}}>
      <Typography
        sx={{
          mb: 1,
          fontFamily: 'Montserrat',
          fontWeight: 600,
          lineHeight: 1.5
        }}
      >
        Filter by keywords
      </Typography> 
      <TextField
        sx={{
          height: 50,
          width: 600,
          input: {
            color: '#575757',
            fontWeight: 400,
          },
          boxShadow: 5,
          mb: "40px"
        }}
        onChange={(evt) => dispatch(setFilter(evt.currentTarget.value))}
        type="text"
        InputProps={{
       startAdornment: (
      <InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>
    )
  }}
      />
    </Box>
  );
};
