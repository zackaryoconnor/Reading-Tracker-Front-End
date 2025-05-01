import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAllCategories } from '../services/dataService'
import './Header.css'
import SearchBar from './SearchBar'

const Header = ({ onGenreChange, onSearch }) => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [categories, setCategories] = useState([
    { id: 'all', name: 'All' },
    { id: 'fiction', name: 'Fiction' },
    { id: 'nonfiction', name: 'Non-Fiction' },
    { id: 'genres', name: 'Genres', hasDropdown: true }
  ])

  const [genres, setGenres] = useState([])
  const [showGenreDropdown, setShowGenreDropdown] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Only fetch categories on home page
    if (location.pathname === '/') {
      const fetchCategories = async () => {
        try {
          const categoriesData = await getAllCategories()
          if (categoriesData && categoriesData.length > 0) {
            setGenres(categoriesData.map(cat => cat.name))
          }
        } catch (error) {
          console.error('Error fetching categories:', error)
        }
      }

      fetchCategories()
    }
  }, [location.pathname])

  const handleCategoryClick = (category) => {
    // Only allow category filtering on home page
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete
      setTimeout(() => {
        setActiveCategory(category.name)
        if (category.hasDropdown) {
          setShowGenreDropdown(prev => !prev)
        } else {
          setShowGenreDropdown(false)
          onGenreChange(category.name)
        }
      }, 100)
    } else {
      setActiveCategory(category.name)
      if (category.hasDropdown) {
        setShowGenreDropdown(prev => !prev)
      } else {
        setShowGenreDropdown(false)
        onGenreChange(category.name)
      }
    }
  }

  const handleGenreSelect = (genre) => {
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete
      setTimeout(() => {
        setActiveCategory(genre)
        setShowGenreDropdown(false)
        onGenreChange(genre)
      }, 100)
    } else {
      setActiveCategory(genre)
      setShowGenreDropdown(false)
      onGenreChange(genre)
    }
  }

  const handleSearch = (query) => {
    // Redirect to home page for search
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete
      setTimeout(() => {
        onSearch(query)
      }, 100)
    } else {
      onSearch(query)
    }
  }

  // Render different header content based on current route
  const renderHeaderContent = () => {
    switch (location.pathname) {
      case '/':
        return (
          <nav className="categories">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`category ${activeCategory === category.name ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category.name}
                {category.hasDropdown && (
                  <span className="dropdown-icon">▼</span>
                )}
              </div>
            ))}

            {showGenreDropdown && (
              <div className="genre-dropdown">
                {genres.map((genre) => (
                  <div
                    key={genre}
                    className="genre-item"
                    onClick={() => handleGenreSelect(genre)}
                  >
                    {genre}
                  </div>
                ))}
              </div>
            )}
          </nav>
        )
      case '/bookshelf':
        return null;
      case '/authors':
        return (
          <nav className="categories">
            <div className="category active">All Authors</div>
            <div className="category">Featured</div>
            <div className="category">New Releases</div>
          </nav>
        )
      default:
        return null
    }
  }

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate('/')}>
        <span className="logo-text">T.Book</span>
      </div>

      {renderHeaderContent()}

      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
        <div className="user-profile">
          <div className="notifications">
            <i className="notification-icon"> <img src="/images/ring.png" alt="User" /></i>
          </div>
          <div className="avatar">
            <img src="/images/profpic.png" alt="User" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
