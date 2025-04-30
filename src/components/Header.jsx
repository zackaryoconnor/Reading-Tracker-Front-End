import { useEffect, useState } from 'react'
import { getAllCategories } from '../services/dataService'
import './Header.css'
import SearchBar from './SearchBar'

const Header = ({ onGenreChange, onSearch, activePage = 'discover' }) => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [categories, setCategories] = useState([
    { id: 'all', name: 'All' },
    { id: 'fiction', name: 'Fiction' },
    { id: 'nonfiction', name: 'Non-Fiction' },
    { id: 'genres', name: 'Genres', hasDropdown: true }
  ])

  const [genres, setGenres] = useState([])
  const [showGenreDropdown, setShowGenreDropdown] = useState(false)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getAllCategories()
        if (categoriesData && categoriesData.length > 0) {
          // Update the genres list
          setGenres(categoriesData.map(cat => cat.name))
        }
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    fetchCategories()
  }, [])

  const handleCategoryClick = (category) => {
    setActiveCategory(category.name)
    if (category.hasDropdown) {
      setShowGenreDropdown(prev => !prev)
    } else {
      setShowGenreDropdown(false)
      onGenreChange(category.name)
    }
  }

  const handleGenreSelect = (genre) => {
    setActiveCategory(genre)
    setShowGenreDropdown(false)
    onGenreChange(genre)
  }

  const handleSearch = (query) => {
    onSearch(query)
  }

  // Render page-specific header content
  const renderHeaderContent = () => {
    switch (activePage) {
      case 'discover':
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
      case 'bookshelf':
        return (
          <nav className="categories">
            <div className="category active">My Books</div>
            <div className="category">Reading Now</div>
            <div className="category">Want to Read</div>
            <div className="category">Completed</div>
          </nav>
        )
      case 'authors':
        return (
          <nav className="categories">
            <div className="category active">All Authors</div>
            <div className="category">Featured</div>
            <div className="category">New Releases</div>
          </nav>
        )
      case 'blog':
        return (
          <nav className="categories">
            <div className="category active">All Posts</div>
            <div className="category">Book Reviews</div>
            <div className="category">Author Interviews</div>
            <div className="category">Literary News</div>
          </nav>
        )
      default:
        return null
    }
  }

  return (
    <header className="header">
      <div className="logo">
        <span className="logo-text">T.Book</span>
      </div>

      {renderHeaderContent()}

      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
        <div className="user-profile">
          <div className="notifications">
            <i className="notification-icon">🔔</i>
          </div>
          <div className="avatar">
            <img src="https://via.placeholder.com/40" alt="User" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
