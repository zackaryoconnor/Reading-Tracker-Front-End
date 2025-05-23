import { useState } from 'react'
import { updateReadingStatus } from '../services/dataService'
import './FeaturedBook.css'

const FeaturedBook = ({ book, onViewDetails }) => {
  const [isReading, setIsReading] = useState(false)


  const featuredBookIds = [1, 2, 3, 4];

  const handleReadNow = async () => {
    try {
      await updateReadingStatus(book.id, 'reading', 0)
      setIsReading(true)
      setTimeout(() => {
        setIsReading(false)
      }, 2000)
    } catch (error) {
      console.error('Error updating reading status:', error)
    }
  }

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(book.id)
    }
  }
  const pickRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * featuredBookIds.length);
    const randomBookId = featuredBookIds[randomIndex];

    if (onViewDetails) {
      onViewDetails(randomBookId);
    }
  };


  return (
    <div className="featured-book">
      <div className="featured-backdrop" style={{ backgroundImage: `url(${book.coverImage})` }}></div>

      <div className="featured-content">
        <h1 className="featured-title">{book.title}</h1>

        <div className="featured-meta">
          <div className="featured-rating">
            <span className="rating-badge">{book.rating}</span>
          </div>

          <div className="featured-genres">
            {book?.categories?.map((genre, index) => (
              <span key={index} className="genre-tag">
                {genre}
                {index < book.categories.length - 1 && " • "}
              </span>
            ))}
          </div>
        </div>

        <p className="featured-description">{book.description}</p>

        <div className="featured-actions">
          <button
            className="btn-primary"
            onClick={handleReadNow}
            disabled={isReading}
          >
            {isReading ? 'ADDING...' : 'READ NOW'}
          </button>
          <button
            className="btn-secondary"
            onClick={handleViewDetails}
          >
            View Details
          </button>
          <button
            className="btn-random"
            onClick={pickRandomBook}
          >
            Pick a Story for Me!
          </button>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBook
