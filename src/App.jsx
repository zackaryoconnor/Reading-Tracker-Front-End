import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import BookDetailPage from "./pages/BookDeatailPage";
import GenrePage from "./pages/GenrePage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/:id" element={<BookDetailPage />} />
        <Route path="/genres/:genre" element={<GenrePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  )
}

export default App
