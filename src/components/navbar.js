import {Link, useNavigate} from "react-router-dom"
import {auth,provider} from "../config/firebase"
import {useAuthState} from "react-firebase-hooks/auth"

export const Navbar=()=>{
    const [user]=useAuthState(auth);
    const navigate=useNavigate();
    const handleLogout=async ()=>{

        await auth.signOut();
        navigate("/login");
    }
    return(
        <div className="NavBar">
            <div className="links">
            <Link to={"/"}>Home</Link>
            {!user?<Link to={"/login"}>Login</Link>
            :<Link to={"/createpost"}>Create Post</Link>
            }
            
            </div>
            {user &&    
            <div>
                <span>{user.displayName}</span>
                <img src={user.photoURL}/>
                <button onClick={handleLogout}>Log Out</button>
            </div>
            
            }

        </div>
    );
}