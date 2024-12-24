"use client";
import Loading from "@/components/Loading/Loading";
import PostCard from "@/components/PostCard/PostCard";
import PostForm from "@/components/PostForm/PostForm";
import { useAppDispatch, useAppSelector } from "@/hooks/store.hooks";
import { getPosts } from "@/store/features/posts.slice";
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useEffect } from "react";

export default function Home() {

  const {posts} = useAppSelector((store)=> store.postsReducer)

  const dispatch = useAppDispatch();


  useEffect(()=>{
    dispatch(getPosts())
  })
  return (
    <>
    <Box>
    <Grid container>
      <Grid size={3}></Grid>
      <Grid size={6} sx={{p:2}}>
      <PostForm/>
      {posts ? posts.map((post)=> <PostCard key={post._id} postInfo = {post}/>): <Loading/>}
      </Grid>
      <Grid size={9}></Grid>
    </Grid>
    </Box>
    </>
  );
}
