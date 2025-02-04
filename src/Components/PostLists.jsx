import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import {PostList} from "../Store/Post_Store";
import WelcomeMsg from "./WelcomeMsg";
import Loading from "./Loading";


const PostLists = () =>{
   let {postList} = useContext(PostList);
   let {add_Initial_Post} = useContext(PostList);
   
   let [faching, setFached] = useState(false);
   
   useEffect(()=>
    {
        const controller = new AbortController();
        const signal = controller.signal;

        setFached(true);
        fetch('https://dummyjson.com/posts', {signal})
        .then(res => res.json())
        .then(obj => {
            add_Initial_Post(obj.posts)
            setFached(false);
        });
        return ()=>{
            controller.abort();
        }
    },
    [])

    return(
        <>
        {faching && <Loading></Loading>}
        {!faching && postList.length === 0 && <WelcomeMsg />}
        {!faching && postList.map((post) => <Post key={post.id} post={post} ></Post>)}

        </>
    )
}

export default PostLists;