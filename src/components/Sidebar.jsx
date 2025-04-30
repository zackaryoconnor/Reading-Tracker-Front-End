import { BookOpen, Bookmark, Compass, HelpCircle, MessageSquare, Settings, Users } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Link to="/" className="sidebar-logo">
          <BookOpen className="sidebar-logo-icon" />
          <span className="sidebar-logo-text">BookHaven</span>
        </Link>
      </div>

      <div className="sidebar-content">
        <p className="sidebar-section-title">Menu</p>

        <nav className="sidebar-nav">
          <Link to="/discover" className="sidebar-nav-item sidebar-nav-item-active">
            <Compass className="sidebar-nav-icon" />
            <span className="sidebar-nav-text">Discover</span>
          </Link>

          <Link to="/reading-list" className="sidebar-nav-item">
            <Bookmark className="sidebar-nav-icon" />
            <span className="sidebar-nav-text">Reading List</span>
          </Link>

          <Link to="/blog" className="sidebar-nav-item">
            <MessageSquare className="sidebar-nav-icon" />
            <span className="sidebar-nav-text">Book Blog</span>
          </Link>

          <Link to="/authors" className="sidebar-nav-item">
            <Users className="sidebar-nav-icon" />
            <span className="sidebar-nav-text">Authors</span>
          </Link>
        </nav>

        <div className="sidebar-footer">
          <p className="sidebar-section-title">Support</p>

          <nav className="sidebar-nav">
            <Link to="/contact" className="sidebar-nav-item">
              <MessageSquare className="sidebar-nav-icon" />
              <span className="sidebar-nav-text">Contact Us</span>
            </Link>

            <Link to="/help" className="sidebar-nav-item">
              <HelpCircle className="sidebar-nav-icon" />
              <span className="sidebar-nav-text">Help Center</span>
            </Link>

            <Link to="/settings" className="sidebar-nav-item">
              <Settings className="sidebar-nav-icon" />
              <span className="sidebar-nav-text">Settings</span>
            </Link>
          </nav>
        </div>

        <div className="sidebar-premium">
          <div className="sidebar-premium-content">
            <p className="sidebar-premium-title">Premium Membership</p>
            <p className="sidebar-premium-description">Get unlimited access to all books and exclusive content</p>
            <button className="sidebar-premium-button">See Plans</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
