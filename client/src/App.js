import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Nav from './components/views/Nav';
import Header from './components/views/Header';
import BlogContent from './components/views/BlogContent';
import Footer from './components/views/Footer';
import Admin from './components/adminComponents/Admin';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <BlogContent/>
      <Route exact path = "/admin" component = {Admin} />
      <Footer/>
      
    </div>
  );
}

export default App;
