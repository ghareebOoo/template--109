import { postsState } from "@/types/posts.types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { rootState } from "../store";


export const getPosts = createAsyncThunk("posts/getposts" , async (_, {getState})=>{


    const state = getState() as rootState;
    const token = state.userReducer.token

    console.log({token})

    const options = {
        url:"https://linked-posts.routemisr.com/posts?limit=50&page=41",
        method: "GET",
        headers:{
            token
        }
    }
    const {data} = await axios.request(options)
    return data.posts
})

export const getPostDetails = createAsyncThunk("posts/getPostDetails" , async (id:string, {getState})=>{


    const state = getState() as rootState;
    const token = state.userReducer.token


    const options = {
        url:`https://linked-posts.routemisr.com/posts/${id}`,
        method: "GET",
        headers:{
            token
        }
    }
    const {data} = await axios.request(options)
    return data.post
})

const initialState:postsState ={
    posts: null,
    postDetails: null
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{},
    extraReducers: function(builder){
        builder.addCase(getPosts.fulfilled , (state , action)=>{
            state.posts = action.payload
        })

        builder.addCase(getPosts.rejected , (state , action)=>{
            console.log({state , action})
        })


        builder.addCase(getPostDetails.fulfilled , (state , action)=>{
            state.postDetails = action.payload
        })

        builder.addCase(getPostDetails.rejected , (state , action)=>{
            console.log({state , action})
        })
    }
})


export const postsReducer = postsSlice.reducer