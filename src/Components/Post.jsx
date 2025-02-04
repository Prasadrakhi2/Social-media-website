import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../Store/Post_Store";

const Post = ({post}) =>{

    let {deletePost} = useContext(PostList);

    return(
        <div className="card post" style={{width: "30rem"}}>
            <div className="card-body ">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">
                    {post.body}
                </p>
                {post.tags.map((tag)=> <button type="button" className="btn btn-primary tags" key={tag}>{tag}</button>)}
                
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=> deletePost(post.id)}>
                <MdDelete />
                </span>

                <div className="alert alert-success reaction" role="alert">
                {`Your post has been seen by ${post.reactions} peoples`}
                </div>
            
            </div>
        </div>
    )
}

export default Post;