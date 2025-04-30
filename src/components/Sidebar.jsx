import { useState } from 'react'
import './Sidebar.css'

const Sidebar = ({ activePage = 'discover', onPageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    { id: 'discover', name: 'Discover', icon: '🔍' },
    { id: 'bookshelf', name: 'Bookshelf', icon: '📚' },
    { id: 'blog', name: 'Blog', icon: '📝' },
    { id: 'authors', name: 'Authors', icon: '✍️' },
    { id: 'contact', name: 'Contact Us', icon: '📞' },
    { id: 'help', name: 'Help Center', icon: '❓' },
    { id: 'settings', name: 'Setting', icon: '⚙️' }
  ]

  const handleItemClick = (id) => {
    onPageChange(id)
    setIsMobileMenuOpen(false)
  }

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
          <div className="logo" onClick={() => handleItemClick('discover')} style={{ cursor: 'pointer' }}>
            <span className="logo-text">T.Book</span>
          </div>
          <div className="menu-label">Menu</div>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`nav-item ${activePage === item.id ? 'active' : ''}`}
              onClick={() => handleItemClick(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </div>
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
