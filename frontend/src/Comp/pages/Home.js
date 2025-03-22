import React from 'react'
import Header  from '../components/Header.js'
import Footer from '../components/Footer.js'
import Search from '../components/Search.js'
import Dashboard from '../components/Dashboard.js'
import AddPost from '../components/AddPost.js'
import EditPost from '../components/EditPost.js'
// import Index from '../components/Index.js'

const Home = ({loggedIn,setLoggedIn}) => {
    return (
        <div>
            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
            <main>
                <Dashboard loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
            </main>
        </div>
    )
}

export default Home;
