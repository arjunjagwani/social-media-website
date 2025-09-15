import {getDocs, collection, doc} from 'firebase/firestore';
import {db} from '../../config/firebase';
import {useEffect, useState} from 'react';
import {Post} from './post';


export const Homepage=()=>{
    const postRef=collection(db,"posts");
    const[postsList,setPostsList]=useState(null);

    const getPosts=async ()=>{
        const data=await getDocs(postRef);
        setPostsList(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        
        
    }
    useEffect(()=>{
        getPosts();
        
    },[])
    return(
        <div className="Homepage">
            {postsList?.map((post)=>{
                return <Post post={post} />
            })}    
        </div>
    );
}