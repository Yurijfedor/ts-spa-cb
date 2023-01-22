import { useAppDispatch } from "../redux/hooks";
import { setFilter } from "../redux/filterSlice";
import React from "react";

export const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <label>
      Filter by keywords
      <input
        onChange={(evt) => dispatch(setFilter(evt.currentTarget.value))}
        type="text"
      />
    </label>
  );
};
