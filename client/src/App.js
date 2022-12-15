import Topbar from './components/topbar/Topbar'
import Home from "./pages/home/Home"
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"
import Settings from "./pages/settings/Settings"
import Login from "./pages/login/Login"
import Register from './pages/register/Register'
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function App() {
  const user = true
  return (
    <div className="App">
   <Router>
      {/* {user ? <Topbar /> : ""} */}

      <Topbar />
      <Routes>
        <Route path='/' element={user ? <Home/> : <Login/>} />
        <Route path='/login' element={user ? <Home /> : <Login/>} />
        <Route path='/register' element={ user ? <Home /> : <Register/>} />
        <Route path='/write' element={user ? <Write /> : <Login/>} />
        <Route path='/settings' element={user ? <Settings /> : <Login/>} />
        <Route path='/post/:postId' element={user ? <Single /> : <Login/>}/>
      </Routes>
   </Router>
    </div>
  );
}

export default App;
