import { useState } from 'react'
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  const handleFocus = () => {
    setIsExpanded(true)
  }

  const handleBlur = () => {
    if (!query) {
      setIsExpanded(false)
    }
  }

  return (
    <div className={`search-bar ${isExpanded ? 'expanded' : ''}`}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search books, authors..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <button type="submit" className="search-button">
          <i className="search-icon">🔍</i>
        </button>
      </form>
    </div>
  )
}

export default SearchBar
