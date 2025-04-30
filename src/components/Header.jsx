import { Bell, BookOpen, Menu, Search } from "lucide-react"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="header">
      <div className="header-left">
        <button className="header-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="header-icon" />
          <span className="sr-only">Toggle navigation menu</span>
        </button>

        <Link to="/" className="header-logo">
          <BookOpen className="header-logo-icon" />
          <span className="header-logo-text">BookHaven</span>
        </Link>

        <nav className={`header-nav ${isMenuOpen ? "header-nav-open" : ""}`}>
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <Link to="/" className="header-nav-link header-nav-link-active">
                All
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/fiction" className="header-nav-link">
                Fiction
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/non-fiction" className="header-nav-link">
                Non-Fiction
              </Link>
            </li>
            <li className="header-nav-item header-nav-dropdown">
              <Link to="/genres" className="header-nav-link">
                Genres
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="header-dropdown-icon"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Link>
              <div className="header-dropdown-menu">
                <Link to="/genres/mystery" className="header-dropdown-item">
                  Mystery & Thriller
                </Link>
                <Link to="/genres/romance" className="header-dropdown-item">
                  Romance
                </Link>
                <Link to="/genres/scifi" className="header-dropdown-item">
                  Science Fiction
                </Link>
                <Link to="/genres/fantasy" className="header-dropdown-item">
                  Fantasy
                </Link>
                <Link to="/genres/biography" className="header-dropdown-item">
                  Biography
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header-right">
        <form className="header-search" onSubmit={handleSearch}>
          <Search className="header-search-icon" />
          <input
            type="text"
            placeholder="Search books, authors..."
            className="header-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <button className="header-notification-button">
          <Bell className="header-icon" />
        </button>

        <div className="header-avatar">
          <img src="/mystical-forest-spirit.png" alt="User avatar" className="header-avatar-image" />
        </div>
      </div>
    </header>
  )
}

export default Header
