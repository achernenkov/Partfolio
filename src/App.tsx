import React from 'react';
import './App.css';
import Video from "./components/video/video";
import MainTitle from "./components/mainTitle/mainTitle";
import Menu from "./components/menu/menu";
import AboutMe from "./components/sitePages/aboutMe/aboutMe";
import Experience from "./components/sitePages/experience/experience";
import Projects from "./components/sitePages/projects/projects";
import Contacts from "./components/sitePages/contacts/contacts";
import {BrowserRouter, Route} from "react-router-dom";



function App() {
    return (
        <BrowserRouter>
            <div className='wrapperApp'>
                <Route exact path='/'  render={() => <Video/>}/>
                <Route exact path='/' render={() => <MainTitle/>}/>
                <Menu/>
                <Route path='/aboutMe' render={() => <AboutMe/>}/>
                <Route path='/experience' render={() => <Experience/>}/>
                <Route path='/projects' render={() => <Projects/>}/>
                <Route path='/contacts' render={() => <Contacts/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
