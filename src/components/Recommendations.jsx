import { useEffect, useState } from 'react'
import { getBooksByCategory, getRecommendedBooks, searchBooks } from '../services/dataService'
import BookCard from './BookCard'
import './Recommendations.css'

const Recommendations = ({ genre, searchQuery, onViewDetails }) => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // IDs of the specific books to choose from for random selection
  const featuredBookIds = [1, 2, 3, 4]; // The four specific books

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

        // Ensure books is always an array
        setBooks(Array.isArray(results) ? results : [])
        setError(null)
      } catch (err) {
        console.error('Error fetching books:', err)
        setError('Failed to load books. Please try again later.')
        setBooks([]) // Set to empty array on error
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

  // Function to pick a random book from the specific featured books
  const pickRandomBook = () => {
    // Choose a random book ID from our list
    const randomIndex = Math.floor(Math.random() * featuredBookIds.length);
    const randomBookId = featuredBookIds[randomIndex];

    // Open the book details using the ID
    if (onViewDetails) {
      onViewDetails(randomBookId);
    }
  };

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
        <div className="section-actions">
          <button
            className="random-book-btn"
            onClick={pickRandomBook}
          >
            Pick a Story for Me!
          </button>
          <a href="#" className="view-all">
            View All <span className="arrow">→</span>
          </a>
        </div>
      </div>

      {loading ? (
        <div className="loading-books">Loading books...</div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : !books || books.length === 0 ? (
        <div className="no-books-message">
          {searchQuery
            ? `No books found matching "${searchQuery}"`
            : `No books found in the ${genre} category`}
        </div>
      ) : (
        <div className="books-grid">
          {/* Make sure books is an array before mapping */}
          {Array.isArray(books) && books.map(book => (
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
