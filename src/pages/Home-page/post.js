import { db } from "../../config/firebase";
import { collection, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

export const Post = (props) => {
    const likesRef = collection(db, "likes");
    const [user] = useAuthState(auth);
    const { post } = props;
    const likesDoc = query(likesRef, where("postId", "==", post.id));
    const [likes, setLikes] = useState(null);


    const hasUserLiked = likes?.find((like) => like.userId === user?.uid);

    const commentsRef = collection(db, "comments");
    const commentsDoc = query(commentsRef, where("postId", "==", post.id));

    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState([]);

    const addComment = async () => {
        if (!commentText.trim()) return; // ignore empty comment
        await addDoc(commentsRef, {
            postId: post.id,
            userId: user?.uid,
            comment: commentText,
            username: user?.displayName || "Anonymous",
        });
        setComments((prev) => [...prev, { userId: user?.uid, comment: commentText, username: user?.displayName || "Anonymous" }]);
        setCommentText(""); // clear input
    };

    const getComments = async () => {
        const data = await getDocs(commentsDoc);
        setComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };


    const getLikes = async () => {
        const data = await getDocs(likesDoc);
        setLikes(data.docs.map((doc) => ({ userId: doc.data().userId })));
    }
    const addLike = async () => {

        await addDoc(likesRef, {
            postId: post.id,
            userId: user?.uid
        });
        setLikes((prev) => [...prev, { userId: user?.uid }]);
    }
    const removeLike = async () => {
        const likeToDeleteQuery = query(likesRef, where("postId", "==", post.id), where("userId", "==", user?.uid));
        const likeToDeleteData = await getDocs(likeToDeleteQuery);
        const likeId = likeToDeleteData.docs[0].id
        const likeToDelete = doc(db, "likes", likeId);
        await deleteDoc(likeToDelete);
        setLikes((prev) => prev.filter((like) => like.userId !== user?.uid));

    }
    useEffect(() => {
        getLikes();
        getComments();
    }, [])

    return (<div className="Post">
        <div className="UserName">
            <span>{post.username}</span>
        </div>
        <div className="Title">
            <span>{post.title}</span>
        </div>
        <div className="Description">
            <p>{post.description}</p>
        </div>
        <div className="Actions">
            <div className="LikeSection">
                <div className="LikeButton">
            <button onClick={hasUserLiked ? removeLike : addLike}>
                {hasUserLiked ? <>&#128078;</> : <>&#128077;</>}
            </button>

            <span>{likes?.length}</span>
                </div>
            </div>
            <div className="Comments">
                <span>
                <input
                    placeholder="Comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                />
                <button onClick={addComment}>&#128172;</button>
                    </span>
                <div className="CommentList">
                    {comments.map((c, i) => (
                        <div className="Comment" key={i}>
                            <b>{c.username}:</b> {c.comment}
                        </div>
                    ))}
                </div>
            </div>

        </div>

    </div>);
}