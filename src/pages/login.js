import {auth,provider} from "../config/firebase"
import {signInWithPopup} from "firebase/auth"
import { useNavigate } from "react-router-dom";


export const Login=()=>{
const navigate=useNavigate();

const handleLogin=async ()=>{
    const result=await signInWithPopup(auth,provider);
    console.log(result);
    navigate("/")

}

    return(
        <div className="Login">
            <p>Login Page</p>
            <button onClick={handleLogin}>Sign in with Google</button>

        </div>
    );
}
    