import { createSlice } from "@reduxjs/toolkit";

const genCard = () => {
  const numIn = Math.ceil(Math.random() * 10);
  const numOut = Math.ceil(Math.random() * 10);

  const ingresos = [...Array(numIn).keys()].map(
    (_x) => 1000 * Math.ceil(10 * Math.random())
  );
  const egresos = [...Array(numOut).keys()].map(
    (_x) => 1000 * Math.ceil(10 * Math.random())
  );

  return ({ ingresos, egresos });
};

export const CardSlice = createSlice({
  name: "card",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state) => ({ value: state.value.concat(genCard()) }),

    remove: (state) => ({ value: state.value.slice(0, -1) }),
  },
});

export const {add, remove} = CardSlice.actions;
export default CardSlice.reducer;
