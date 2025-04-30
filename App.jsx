"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import BookDetails from "./components/BookDetails"
import GenrePage from "./components/GenrePage"
import AuthorPage from "./components/AuthorPage"
import SearchResults from "./components/SearchResults"
import "./styles/App.css"

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <Router>
      <div className="app">
        <Sidebar collapsed={sidebarCollapsed} />
        <div className="main-content">
          <Navbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/book/:id" element={<BookDetails />} />
              <Route path="/genre/:genre" element={<GenrePage />} />
              <Route path="/author/:id" element={<AuthorPage />} />
              <Route path="/search" element={<SearchResults />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
