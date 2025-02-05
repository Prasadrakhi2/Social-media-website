import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import {PostList} from "../Store/Post_Store";
import WelcomeMsg from "./WelcomeMsg";
import Loading from "./Loading";

const PostLists = () =>{
   let {postList,faching} = useContext(PostList);
  
    return(
        <>
        {faching && <Loading></Loading>}
        {!faching && postList.length === 0 && <WelcomeMsg />}
        {!faching && postList.map((post) => <Post key={post.id} post={post} ></Post>)}

        </>
    )
}

export default PostLists;