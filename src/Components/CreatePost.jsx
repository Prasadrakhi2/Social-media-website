import { useContext, useRef } from "react";
import { PostList } from "../Store/Post_Store";


const CreatePost = () =>{

    let {addPost} = useContext(PostList);

    const UserIdElemnt = useRef();
    const PostTitleElement = useRef();
    const PostContaintElement = useRef();
    const ractionElement = useRef();
    const tagElement = useRef();

    const handleOnsubmit = (event) =>{
        event.preventDefault();
        const userId = UserIdElemnt.current.value;
        const postTitle = PostTitleElement.current.value;
        const postContent = PostContaintElement.current.value;
        const reactions = ractionElement.current.value;
        const tags = tagElement.current.value.split(/\s*[\s,]\s*/);

        UserIdElemnt.current.value = "";
        PostTitleElement.current.value = "";
        PostContaintElement.current.value = "";
        ractionElement.current.value = "",
        tagElement.current.value = "",


        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId : userId,
                title :  postTitle,
                body :  postContent,
                reactions : reactions,
                tags  : tags,
            })
          })
          .then(res => res.json())
          .then(post => {
            addPost(post);
          });
    }

    return(
        <form className="createPost" onSubmit={handleOnsubmit}>
            <div className="mb-3">
                <label htmlFor="UserIdElement" className="form-label">User id</label>
                <input ref={UserIdElemnt} type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter your user id here"/>
            </div>

            <div className="mb-3">
                <label htmlFor="PostTitleElement" className="form-label">Post Title</label>
                <input ref={PostTitleElement} type="text" className="form-control" id="exampleInputEmail1" placeholder="How are you feeling today!" />
            </div>

            <div className="mb-3">
                <label htmlFor="PostContaintElement" className="form-label">Post Containt</label>
                <textarea ref={PostContaintElement} type="text" rows="4" className="form-control" id="exampleInputEmail1" placeholder="Tell me more about it" />
            </div>

            <div className="mb-3">
                <label htmlFor="ractionElement" className="form-label">Number of reactions</label>
                <input ref={ractionElement} type="text" className="form-control" id="exampleInputEmail1" placeholder="How many people has been reached to your post" />
            </div>

            <div className="mb-3">
                <label htmlFor="tagElement" className="form-label">Enter your #tags here</label>
                <input ref={tagElement} type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter the hastags with space" />
            </div>


            <button type="submit" className="btn btn-primary">post</button>
        </form>

    )
}

export default CreatePost;