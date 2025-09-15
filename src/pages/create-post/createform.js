import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {addDoc,collection} from 'firebase/firestore';
import {db,auth} from '../../config/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';


export const CreateForm=()=>
{
    const navigate=useNavigate();
   const [user]=useAuthState(auth);
    const schema=yup.object().shape({
        title: yup.string().required("You must enter a title."),
        description: yup.string().required("Your must provide a description"),
    });
    const {register,handleSubmit,formState:{errors}} =useForm({
        resolver:yupResolver(schema)
    });
    const postRef=collection(db,"posts");

    const submitForm=async (data)=>{
        await addDoc(postRef,{
            title:data.title,
            description:data.description,
            username:user?.displayName,
            userId:user?.uid
        });
        navigate("/");
    }
    return(
        <div className='PostWrapper'>
        <div className="Post form">
           <form onSubmit={handleSubmit(submitForm)}>
            <input  placeholder="Title" {...register("title")} />
            <p>{errors.title?.message}</p>
            <textarea placeholder="Description" {...register("description")} />
            <p>{errors.description?.message}</p>
            <input type="submit"/>
           </form>
        </div>
        </div>
    );
}