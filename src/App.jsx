// src/App.js
import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import './index.css';
import {Link} from 'react-router-dom';
import NavbarCom from "./components/NavbarCom/NavbarCom.jsx";
import FooterCom from "./components/FooterCom/FooterCom.jsx";
import ScrollToTop from "./Pages/Scroll To Top/ScrollToTop.jsx";
import Contacts from "./Pages/contact/Contacts.jsx";
import Job from "./Pages/job/Job.jsx";
import About from "./Pages/about/About.jsx";
import Home from "./Pages/home/Home.jsx";
import NotFound from "./Pages/404/NotFound.jsx";
import Admin from "./Pages/Admin/Admin.jsx";
import PasswordCom from "./components/PasswordCom/PasswordCom.jsx";
import NewsComponent from "./components/NewsComponent/NewsComponent.jsx";
import News from "./Pages/News/News.jsx";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <div className="app">
            <ScrollToTop/>
            <NavbarCom/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/job" element={<Job/>}/>
                    <Route path="/contact" element={<Contacts/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route
                        path="/admin"
                        element={
                            isAuthenticated ? <Admin/> :
                                <PasswordCom setIsAuthenticated={setIsAuthenticated}/>
                        }
                    />
                    <Route path="*" element={<Link to="/"/>}/> </Routes>

            </main>
            {/*<FooterCom/>*/}
        </div>
    );
}

export default App;
