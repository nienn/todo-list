import React from 'react';

import '../App.css';

import Navbar from './Navbar';
import Footer from './Footer';
import MainContent from './MainContent';

import TodoItem from './TodoItem';

function App() {
  return (
    <div className="app">
        <Navbar />,
        <MainContent />,
        <Footer />
    </div>
  );
}

export default App;
