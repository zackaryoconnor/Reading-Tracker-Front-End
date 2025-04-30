"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa"
import "./BookCard.css"

function BookCard({ book }) {
  const [isFavorite, setIsFavorite] = useState(book.isFavorite || false)

  const toggleFavorite = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="book-card">
      <div className="card-image">
        <img src={book.cover || "/placeholder.svg"} alt={book.title} />
        <div className="rating">{book.rating}/10</div>
        <button className={`favorite-button ${isFavorite ? "active" : ""}`} onClick={toggleFavorite}>
          <FaHeart />
        </button>
      </div>
      <Link to={`/book/${book.id}`} className="card-content">
        <h3 className="book-title">{book.title}</h3>
        <div className="book-genres">
          {book.genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </div>
      </Link>
    </div>
  )
}

export default BookCard
