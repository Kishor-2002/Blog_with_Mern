import './App.css';
import Footer from './Comp/components/Footer'
import Home from './Comp/pages/Home.js';
import Admin from './Comp/pages/Admin';
import { Routes, Route,Navigate } from 'react-router-dom';
import AddPost from './Comp/components/AddPost.js';
import { useEffect, useState } from 'react';
import EditPost from './Comp/components/EditPost.js';
import Post from './Comp/components/Post.js';
import Contact from './Comp/components/Contact.js';
import About from './Comp/components/About.js';


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [signIn, setSignIn] = useState(false)
  useEffect(()=>{
    {signIn?<Navigate to="/login"/>:<Navigate to="/register"/>}
  },[signIn])
  return (
    <div className="container">
      {/* <h1>Hello</h1> */}
        {/* <Main /> */}
        {/* <Navbar /> */}
        <div className='pages'>
          {/* <p>Hi how re u {loggedIn}.</p> */}
          <Routes>
            <Route
              path='/login'
              element= {!loggedIn ? <Admin isSignin={signIn} setSignIn={setSignIn} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>:  <Navigate to="/"/>}
              />
            <Route
              path='/register'
              element= {!loggedIn ? <Admin isSignin={signIn} setSignIn={setSignIn} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>:  <Navigate to="/"/>}
              />
            <Route
              path='/'
              element= {!loggedIn ? <Navigate to="/login"/>:<Home loggedIn setLoggedIn={setLoggedIn}/>}
              />
            <Route
              path='/Dashboard'
              element= {<Home loggedIn setLoggedIn={setLoggedIn}/>}
              />
            <Route path="/add-post" element={<AddPost />} />
            <Route path="/edit-post/:id" element={<EditPost />} />
            <Route path="/delete-post/:id" element={<Home loggedIn setLoggedIn={setLoggedIn} />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            {/* <Route 
             path="/"
             element = {user ? <Home />: <Navigate to="/login"/>}
            />
            <Route 
             path="/login"
             element = {!user ? <Login />:<Navigate to="/" />}
            />
            <Route 
             path="/signup"
             element = {!user ? <Signup />:<Navigate  to="/" />}
            /> */}
          </Routes>
          <Footer />
        </div>
    </div>
  );
}

export default App;
