import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../axios-instance/instances";

const firstState = {
    posts: [],
    loading: false,
    error: null
}

export const TaskSlice = createAsyncThunk ()