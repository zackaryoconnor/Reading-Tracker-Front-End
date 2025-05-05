import { useState } from 'react'
import './BookCard.css'

const BookCard = ({ book, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleCardClick = () => {
    if (onViewDetails) {
      onViewDetails(book.id)
    }
  }

  return (
    <div
      className="book-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="book-cover">
        <img src={book.coverImage || "/images/book-cover-placeholder.png"} alt={book.title} />

        <div className={`book-overlay ${isHovered ? 'visible' : ''}`}>
          <button
            className="overlay-btn"
            disabled={isProcessing}
          >
            View Details
          </button>
        </div>

        {book.rating && (
          <div className="book-rating">
            <span>{book.rating}</span>
            <span className="rating-max">/10</span>
          </div>
        )}
      </div>

      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
      </div>
    </div>
  )
}

export default BookCard
