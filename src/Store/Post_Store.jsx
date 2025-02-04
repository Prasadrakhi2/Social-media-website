import { createContext, useReducer } from "react";

export const PostList = createContext(
    {
        postList : [],
        addPost : () => {},
        add_Initial_Post : () => {},
        deletePost : () => {},
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
        newPost = [action.paylod, ...currentPost];
    }
    return newPost;
}

const PostListProvider = ({children}) =>{

    let[postList, dispachPostList] = useReducer(PostListReducer, []);

    let addPost = (userId, postTitle, postContent, reactions, tagElement) =>{
       dispachPostList({
        type : 'ADD_POST',
        paylod :{
            id: Date.now(),
            title :  postTitle,
            body :  postContent,
            reactions : reactions,
            tags  : tagElement,
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

    return (
        <PostList.Provider value={{
            postList,
            addPost,
            add_Initial_Post,
            deletePost,
        }}>
            {children}
        </PostList.Provider>
    )
}



export default PostListProvider;