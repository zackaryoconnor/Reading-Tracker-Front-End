import { useEffect, useState } from 'react'
import { getBooksByCategory, getRecommendedBooks, searchBooks } from '../services/dataService'
import BookCard from './BookCard'
import './Recommendations.css'

const Recommendations = ({ genre, searchQuery, onViewDetails }) => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      try {
        let results = []

        if (searchQuery) {
          // If there's a search query, use it
          results = await searchBooks(searchQuery)
        } else if (genre && genre !== 'All') {
          // If a specific genre is selected
          results = await getBooksByCategory(genre)
        } else {
          // Default to recommended books
          results = await getRecommendedBooks()
        }

        setBooks(results)
        setError(null)
      } catch (err) {
        console.error('Error fetching books:', err)
        setError('Failed to load books. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchBooks()
  }, [genre, searchQuery])

  const handleViewDetails = (bookId) => {
    if (onViewDetails) {
      onViewDetails(bookId)
    }
  }

  return (
    <div className="recommendations">
      <div className="section-header">
        <h2>
          {searchQuery
            ? `Search Results for "${searchQuery}"`
            : genre !== 'All'
              ? `${genre} Books`
              : 'Recommended For You'}
        </h2>
        <a href="#" className="view-all">
          View All <span className="arrow">→</span>
        </a>
      </div>

      {loading ? (
        <div className="loading-books">Loading books...</div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : books.length === 0 ? (
        <div className="no-books-message">
          {searchQuery
            ? `No books found matching "${searchQuery}"`
            : `No books found in the ${genre} category`}
        </div>
      ) : (
        <div className="books-grid">
          {books.map(book => (
            <BookCard
              key={book.id}
              book={book}
              onViewDetails={() => handleViewDetails(book.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Recommendations
