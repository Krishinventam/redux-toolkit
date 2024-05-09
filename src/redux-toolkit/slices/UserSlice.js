// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { instance } from "../../axios-instance/instances";

// const initialState = [
//   { id: "1", name: "Dave Patrick", email: "dave@gmail.com" },
//   { id: "2", name: "Hank Gluhwein", email: "hank@gmail.com" },
// ];
// export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
//   const response = await instance.get("/teck/");

//   return response.data;
// });
// const usersSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     userAdded: (state, action) => {
//       // const newUser = {
//       //     id:state.length+1,
//       //     name:action.payload,
//       //     completed:false
//       // }
//       state.push(action.payload);
//     },
//     userUpdated(state, action) {
//       const { id, name, email } = action.payload;
//       const existingUser = state.find((user) => user.id === id);
//       if (existingUser) {
//         existingUser.name = name;
//         existingUser.email = email;
//       }
//     },
//   },
//   extraReducers(builder) {
//     builder
//       .addCase(fetchUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.initialState = action.payload;
//       })
//       .addCase(fetchUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });
// export const { userAdded, userUpdated } = usersSlice.actions;
// export default usersSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { instance } from "../../axios-instance/instances";

// const initialState = {
//     posts:[],
//     loading:false,
//     error:null,
// tasks:  { id: "1", name: "Dave Patrick", created_at: "2024-05-06" }
// };
// export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
//   const response = await instance.get("/teck/");
//   return response.data;
// });

// export const postUser = createAsyncThunk("users/postUser", async () => {
//   const response = await instance.post("/teck/", usersSlice);
//   return response.data;
// });

// export const putUser = createAsyncThunk('users/putUser',async () =>{
//     const response = await instance.put('/teck/4/',usersSlice)
//     return response.data
// })
// const usersSlice = createSlice({
//   name: "users",
//   initialState,

//   reducers: {
//     userAdded(state, action) {
//       state.posts.push(action.payload);
//     },
//     userUpdated(state, action) {
//       const { id, name, created_at } = action.payload;
//       const existingUser = state.find((user) => user.id === id);
//       if (existingUser) {
//         existingUser.name = name;
//         existingUser.created_at = created_at;
//       }
//     },
//     userDeleted(state, action) {
//       const { id } = action.payload;
//       const existingUser = state.find((user) => user.id === id);
//       if (existingUser) {
//         return state.filter((user) => user.id !== id);
//       }
//     },
//   },
//   extraReducers(builder){
//     builder

//     .addCase(fetchUser.pending , (state) =>{
//         state.loading = true;
//         state.error = null 
//     })
//     .addCase(fetchUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.initialState = action.payload;
//       })
//       .addCase(fetchUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   }
// });

// export const { userAdded, userUpdated, userDeleted } = usersSlice.actions;

// export default usersSlice.reducer;


import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../axios-instance/instances';

const firststate = {
    posts:[],
    loading: false,
    error: null
};

export const fetchUser = createAsyncThunk('users/fetchUsers', async () => {
    const response = await instance.get('/teck/');
    return response.data;
});

export const usersSlice = createSlice({
    name: 'users',
    initialState:firststate,
    reducers: {
        userAdded(state, action) {
            state.posts.push(action.payload);
        },
        userUpdated(state, action) {
            const index = state.posts.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state.posts[index] = action.payload;
            }
        },
        userDeleted(state, action) {
            state.posts = state.posts.filter(user => user.id !== action.payload.id);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                // state.posts = action.payload;
                state.initialState = action.payload
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { userAdded, userUpdated, userDeleted } = usersSlice.actions;
export default usersSlice.reducer;