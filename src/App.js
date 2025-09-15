import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import {Homepage} from "./pages/Home-page/homepage";
import {Login} from "./pages/login";
import {Navbar} from "./components/navbar";
import {CreatePost} from "./pages/create-post/createpost"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path='/createpost' element={<CreatePost/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
