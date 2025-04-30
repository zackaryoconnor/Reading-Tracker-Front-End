import { Heart } from "lucide-react"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./BookCard.css"

const BookCard = ({ id, title, author, coverUrl, rating, genres }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  return (
    <Link to={`/books/${id}`} className="book-card">
      <div className="book-card-cover-container">
        <img src={coverUrl || "/placeholder.svg"} alt={`Cover of ${title}`} className="book-card-cover" />
        <div className="book-card-overlay"></div>

        <button
          onClick={toggleFavorite}
          className={`book-card-favorite ${isFavorite ? "book-card-favorite-active" : ""}`}
        >
          <Heart className={`book-card-favorite-icon ${isFavorite ? "book-card-favorite-icon-filled" : ""}`} />
        </button>

        <div className="book-card-genres">
          {genres.map((genre, index) => (
            <span key={index} className="book-card-genre">
              {genre}
            </span>
          ))}
        </div>
      </div>

      <div className="book-card-info">
        <div className="book-card-rating">
          <div className="book-card-rating-badge">{rating.toFixed(1)}</div>
          <span className="book-card-rating-max">/5</span>
        </div>
        <h3 className="book-card-title">{title}</h3>
        <p className="book-card-author">{author}</p>
      </div>
    </Link>
  )
}

export default BookCard
