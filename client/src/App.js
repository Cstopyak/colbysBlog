import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Nav from './components/views/Nav';
import Header from './components/views/Header';
import BlogContent from './components/views/BlogContent';
import Footer from './components/views/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <BlogContent/>
      <Footer/>
    </div>
  );
}

export default App;
