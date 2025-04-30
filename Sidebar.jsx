import { Link } from "react-router-dom"
import { FaBook, FaBookmark, FaPen, FaUser, FaHeadset, FaQuestionCircle, FaCog } from "react-icons/fa"
import "./Sidebar.css"

function Sidebar({ collapsed }) {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="logo">
        <Link to="/">
          <img src="/open-book-logo.png" alt="BookHaven" />
          <span>BookHaven</span>
        </Link>
      </div>
      <div className="sidebar-content">
        <div className="menu-label">Menu</div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/">
              <FaBook />
              <span>Discover</span>
            </Link>
          </li>
          <li>
            <Link to="/bookshelf">
              <FaBookmark />
              <span>Bookshelf</span>
            </Link>
          </li>
          <li>
            <Link to="/reviews">
              <FaPen />
              <span>Reviews</span>
            </Link>
          </li>
          <li>
            <Link to="/authors">
              <FaUser />
              <span>Authors</span>
            </Link>
          </li>
        </ul>
        <div className="menu-label">Support</div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/contact">
              <FaHeadset />
              <span>Contact Us</span>
            </Link>
          </li>
          <li>
            <Link to="/help">
              <FaQuestionCircle />
              <span>Help Center</span>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <FaCog />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="subscription">
        <div className="sub-info">
          <p>Click the button below to see the plans</p>
          <button className="sub-button">
            <span className="icon">✨</span>
            <span>See Plans</span>
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
