import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import DetailArtcile from './pages/DetailArticle';
import HomeArtcile from './pages/HomeArticle';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeArtcile />} />
        <Route path="/home" element={<HomeArtcile />} />
        <Route path="/detail/:author" element={<DetailArtcile />} />
      </Routes>
    </div>
  );
}

export default App;
