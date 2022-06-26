import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "../Post/Post";
import {useAppSelector} from "../../store/hooks";
import {Navigate} from "react-router-dom";
import {Users} from "../Users/Users";

const Feed = () => {
  // const [loading, setLoading] = useState(true);
// const loading=true
  // setTimeout(() => {
  //   setLoading(false);
  // }, [3000]);
  // const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)
  // if (!isLoggedIn) {
  //   return <Navigate to='login'/>
  // }
  // ;
  const isInitialized = useAppSelector(state => state.login.isLoggedIn)
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {!isInitialized ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          {/*<Users />*/}
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </>
      )}
    </Box>
  );
};

export default Feed;
