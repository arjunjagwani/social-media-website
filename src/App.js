import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import {Homepage} from "./pages/Home-page/homepage";
import {Login} from "./pages/login";
import {Navbar} from "./components/navbar";
import {CreatePost} from "./pages/create-post/createpost";
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './config/firebase';
import { Navigate } from 'react-router-dom';

function App() {
  const [user]=useAuthState(auth);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={user ? <Homepage /> : <Navigate to="/login" />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path='/createpost' element={<CreatePost/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
