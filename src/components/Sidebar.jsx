import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    { id: 'discover', name: 'Discover', icon: '🔍', path: '/' },
    { id: 'bookshelf', name: 'Bookshelf', icon: '📚', path: '/bookshelf' },
    { id: 'blog', name: 'Blog', icon: '📝', path: '/blog' },
    { id: 'authors', name: 'Authors', icon: '✍️', path: '/authors' },
    { id: 'review', name: 'Review', icon: '✍️', path: '/review' },
    { id: 'contact', name: 'Contact Us', icon: '📞', path: '/contact' },
    { id: 'help', name: 'Help Center', icon: '❓', path: '/help' },
    { id: 'settings', name: 'Setting', icon: '⚙️', path: '/settings' }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '✕' : '☰'}
      </div>

      <div className={`sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <NavLink to="/" className="logo">
            <span className="logo-text">T.Book</span>
          </NavLink>
          <div className="menu-label">Menu</div>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `nav-item ${isActive ? 'active' : ''}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="subscription-box">
          <div className="sub-info">
            <div className="sub-title">Click the button below</div>
            <div className="sub-desc">to see the plans</div>
          </div>
          <button className="sub-button">see plans</button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
