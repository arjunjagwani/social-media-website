import {db} from "../../config/firebase";
import {collection,query, where} from "firebase/firestore";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../config/firebase";
import {addDoc,getDocs,deleteDoc,doc} from "firebase/firestore";
import { useEffect, useState } from "react";

export const Post=(props)=>{
    const likesRef=collection(db,"likes");
    const [user]=useAuthState(auth);
    const {post}=props;
    const likesDoc=query(likesRef,where("postId","==",post.id));
    const [likes,setLikes]=useState(null);

    const hasUserLiked=likes?.find((like)=>like.userId===user?.uid);


    const getLikes=async()=>{
        const data=await getDocs(likesDoc);
        setLikes(data.docs.map((doc)=>({userId:doc.data().userId})));
    }
    const addLike=async ()=>{
        
        await addDoc(likesRef,{
            postId:post.id,
            userId:user?.uid
        });
        setLikes((prev)=>[...prev,{userId:user?.uid}]);
    }
    const removeLike=async ()=>{
        const likeToDeleteQuery=query(likesRef,where("postId","==",post.id),where("userId","==",user?.uid));
        const likeToDeleteData=await getDocs(likeToDeleteQuery);
        const likeId=likeToDeleteData.docs[0].id
        const likeToDelete=doc(db,"likes",likeId);
        await deleteDoc(likeToDelete);
        setLikes((prev)=>prev.filter((like)=>like.userId!==user?.uid));

    }
    useEffect(()=>{
        getLikes();
    },[])
    
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
            <div className="Actions">
                <button onClick={hasUserLiked?removeLike:addLike}>
                    {hasUserLiked?<>&#128078;</>:<>&#128077;</>}
                    </button>
                <span>{likes?.length}</span>
            </div>
       
    </div>);
}