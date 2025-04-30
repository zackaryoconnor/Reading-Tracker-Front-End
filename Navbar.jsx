"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaSearch, FaBell } from "react-icons/fa"
import "./Navbar.css"

function Navbar({ onToggleSidebar }) {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-left">
        <button className="menu-toggle" onClick={onToggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="nav-links">
          <Link to="/" className="nav-link active">
            All
          </Link>
          <Link to="/genre/fiction" className="nav-link">
            Fiction
          </Link>
          <Link to="/genre/non-fiction" className="nav-link">
            Non-Fiction
          </Link>
          <div className="dropdown">
            <button className="dropdown-toggle">
              Genres <span className="arrow-down"></span>
            </button>
            <div className="dropdown-menu">
              <Link to="/genre/mystery">Mystery</Link>
              <Link to="/genre/romance">Romance</Link>
              <Link to="/genre/fantasy">Fantasy</Link>
              <Link to="/genre/science-fiction">Science Fiction</Link>
              <Link to="/genre/biography">Biography</Link>
              <Link to="/genre/history">History</Link>
              <Link to="/genre/self-help">Self-Help</Link>
              <Link to="/genre/thriller">Thriller</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-right">
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search books, authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
        <div className="nav-icons">
          <button className="icon-button">
            <FaBell />
            <span className="notification-badge">3</span>
          </button>
          <div className="user-profile">
            <img src="/diverse-online-profiles.png" alt="User" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
