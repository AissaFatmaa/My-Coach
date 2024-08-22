import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getcommande = createAsyncThunk(
  "commande/get",
  async (req, res) => {
    try {
      let result = axios.get("http://localhost:5001/commande/");
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addcommande = createAsyncThunk(
  "commande/add",
  async (newcommande) => {
    try {
      let result = axios.post(
        "http://localhost:5001/commande/add",
        newcommande
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deletecommande = createAsyncThunk(
  "commande/delete",
  async (id) => {
    try {
      let result = axios.delete(`http://localhost:5001/commande/${id}`);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editcommande = createAsyncThunk(
  "commande/edit",
  async ({ id, edit }) => {
    try {
      let result = axios.put(`http://localhost:5001/commande/${id}`, edit);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  commandeList: null,
  status: null,
};

export const commandeSlice = createSlice({
  name: "commande",
  initialState,
  reducers: {},
  extraReducers: {
    [getcommande.pending]: (state) => {
      state.status = "pending";
    },
    [getcommande.fulfilled]: (state, action) => {
      state.status = "success";
      state.commandeList = action.payload.data.commande;
    },
    [getcommande.rejected]: (state) => {
      state.status = "fail";
    },
    [addcommande.pending]: (state) => {
      state.status = "pending";
    },
    [addcommande.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addcommande.rejected]: (state) => {
      state.status = "fail";
    },
    [deletecommande.pending]: (state) => {
      state.status = "pending";
    },
    [deletecommande.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deletecommande.rejected]: (state) => {
      state.status = "fail";
    },
    [editcommande.pending]: (state) => {
      state.status = "pending";
    },
    [editcommande.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [editcommande.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default commandeSlice.reducer;
