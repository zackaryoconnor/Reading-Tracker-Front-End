import { useState } from 'react'
import { toggleFavorite, updateReadingStatus } from '../services/dataService'
import './BookCard.css'

const BookCard = ({ book, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(book.isFavorite || false)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleToggleFavorite = async (e) => {
    e.stopPropagation()

    if (isProcessing) return

    setIsProcessing(true)
    try {
      const updatedBook = await toggleFavorite(book.id)
      if (updatedBook) {
        setIsFavorite(updatedBook.isFavorite)
      }
    } catch (error) {
      console.error('Error toggling favorite:', error)
    } finally {
      setIsProcessing(false)
    }
  }

  const handleReadNow = async (e) => {
    e.stopPropagation()

    if (isProcessing) return

    setIsProcessing(true)
    try {
      await updateReadingStatus(book.id, 'reading', 0)
      // In a real app, you'd probably want to update UI, show a notification, etc.
    } catch (error) {
      console.error('Error updating reading status:', error)
    } finally {
      setIsProcessing(false)
    }
  }

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
        <img src={book.coverImage} alt={book.title} />

        <div className={`book-overlay ${isHovered ? 'visible' : ''}`}>
          <button
            className="overlay-btn"
            onClick={handleReadNow}
            disabled={isProcessing}
          >
            {isProcessing ? 'Adding...' : 'Read Now'}
          </button>
        </div>

        <div
          className={`favorite-btn ${isFavorite ? 'active' : ''} ${isProcessing ? 'processing' : ''}`}
          onClick={handleToggleFavorite}
        >
          {isFavorite ? '♥' : '♡'}
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
        <p className="book-author">{book.authorName}</p>
        <div className="book-categories">
          {book.categories.map((category, index) => (
            <span key={index} className="book-category">
              {category}{index < book.categories.length - 1 && ', '}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BookCard
