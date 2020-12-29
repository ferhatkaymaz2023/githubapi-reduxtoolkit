    import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


    const api = "https://api.github.com";



    export const fetchProfile = createAsyncThunk("post/fetchProfile",async(login) => {
        const response = await fetch(`${api}/users/${login}`);
        const result   = await response.json();
        return result;

    })


    export const fetchFollowers = createAsyncThunk("post/fetchFollowers",async({login}) => {

            const response = await fetch(`${api}/users/${login}/followers`);
            console.log(response);
            const result = await response.json();
            return result;


    })




    const githubSlice = createSlice({
        name:"github",
        initialState:{
            currentProfile:{},
            followers:[]
        },
        reducers:{

        },
        extraReducers:{
            [fetchProfile.fulfilled]: (state,action) => {
                state.currentProfile = action.payload;
            },
            [fetchFollowers.fulfilled]: (state,action) => {
                state.followers = action.payload;
            }
        }

    });





    export default githubSlice.reducer;

    export const profileInfo = state => state.github.currentProfile;
