import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext(
    {
        postList : [],
        addPost : () => {},
        add_Initial_Post : () => {},
        deletePost : () => {},
        faching : false,
    }
);

const PostListReducer = (currentPost, action) =>{
    let newPost = currentPost;
    if(action.type === 'DELETE_POST'){
        newPost = currentPost.filter((post)=> post.id !== action.paylod.postId)
    }
    else if(action.type === 'ADD_INITIAL_POST'){
        newPost = action.paylod.posts;
    }

    else if(action.type === 'ADD_POST'){
        newPost = [action.paylod.post, ...currentPost];
    }
    return newPost;
}

const PostListProvider = ({children}) =>{

    let[postList, dispachPostList] = useReducer(PostListReducer, []);

    let addPost = (post) =>{
       dispachPostList({
        type : 'ADD_POST',
        paylod :{
           post,
        }
       })
    }

    let add_Initial_Post = (posts) =>{
        dispachPostList({
         type : 'ADD_INITIAL_POST',
         paylod :{
             posts,
         }
        })
     }

    let deletePost = (postId) =>{
        dispachPostList({
            type : 'DELETE_POST',
            paylod : {
                postId,
            }
        })
    }

    
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

    return (
        <PostList.Provider value={{
            postList,
            addPost,
            add_Initial_Post,
            deletePost,
            faching,
        }}>
            {children}
        </PostList.Provider>
    )
}



export default PostListProvider;