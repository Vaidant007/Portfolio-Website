import React from 'react'
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from "./components/skills/Skills";
import { Routes, Route } from 'react-router-dom';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
    <Header/>
    <main className="main">
      <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/about" element ={<About/>}/>
      <Route path="/skills" element ={<Skills/>}/>
      <Route path="/project" element ={<Project/>}/>
      <Route path="/contact" element ={<Contact/>}/>
      </Routes>
      
    </main>
    </>
  )
}

export default App