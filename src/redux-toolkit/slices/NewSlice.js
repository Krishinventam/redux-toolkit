import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getExampleThunk = createAsyncThunk(
    'auth/getExampleThunk',
    async( rejectWithValue) => {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            if (!response.ok) {
                return rejectWithValue(response.status)
            }
            const data = await response.json();
            return data;
        }catch(error){
            throw rejectWithValue(error.message)
        }
    }
)   