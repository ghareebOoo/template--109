
import {configureStore} from "@reduxjs/toolkit"
import {userReducer} from "./features/users.slice"
import {postsReducer} from "./features/posts.slice"


export const mystore = configureStore({
    reducer:{
        userReducer,
        postsReducer
    }
})

type AppStore =  typeof mystore




export type rootState =  ReturnType<AppStore["getState"]> 


export type AppDispatch = AppStore["dispatch"]