
export const Post=(props)=>{
    const {post}=props;
    
    return(<div className="Post">
        <div className="UserName">
            <span>{post.username}</span>
            </div>
        <div className="Title">
            <span>{post.title}</span>
            </div>
        <div className="Description">
            <p>{post.description}</p>
            </div>
       
    </div>);
}