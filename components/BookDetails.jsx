"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { FaStar, FaBookmark, FaShare, FaHeart } from "react-icons/fa"
import { getBookById, getSimilarBooks } from "../data"
import BookCard from "./BookCard"
import "../styles/BookDetails.css"

function BookDetails() {
  const { id } = useParams()
  const [book, setBook] = useState(null)
  const [similarBooks, setSimilarBooks] = useState([])
  const [activeTab, setActiveTab] = useState("summary")

  useEffect(() => {
    const fetchedBook = getBookById(id)
    setBook(fetchedBook)

    if (fetchedBook) {
      const similar = getSimilarBooks(fetchedBook.genres[0])
      setSimilarBooks(similar)
    }
  }, [id])

  if (!book) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="book-details-container">
      <div className="book-header">
        <div className="book-cover">
          <img src={book.coverLarge || "/placeholder.svg"} alt={book.title} />
        </div>
        <div className="book-info">
          <h1>{book.title}</h1>
          <div className="author-info">
            <Link to={`/author/${book.authorId}`} className="author-link">
              {book.author}
            </Link>
          </div>
          <div className="book-meta">
            <div className="rating-container">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.round(book.rating / 2) ? "filled" : ""} />
                ))}
              </div>
              <span className="rating-value">{book.rating}/10</span>
              <span className="rating-count">({book.ratingCount} ratings)</span>
            </div>
            <div className="book-details-meta">
              <span>{book.pageCount} pages</span>
              <span>{book.publishYear}</span>
              <span>{book.publisher}</span>
            </div>
          </div>
          <div className="genres">
            {book.genres.map((genre, index) => (
              <Link key={index} to={`/genre/${genre.toLowerCase()}`} className="genre-tag">
                {genre}
              </Link>
            ))}
          </div>
          <div className="action-buttons">
            <button className="primary-button">Read Now</button>
            <button className="secondary-button">
              <FaBookmark /> Add to Bookshelf
            </button>
            <button className="icon-button">
              <FaHeart />
            </button>
            <button className="icon-button">
              <FaShare />
            </button>
          </div>
        </div>
      </div>

      <div className="book-content">
        <div className="tabs">
          <button className={`tab ${activeTab === "summary" ? "active" : ""}`} onClick={() => setActiveTab("summary")}>
            Summary
          </button>
          <button className={`tab ${activeTab === "reviews" ? "active" : ""}`} onClick={() => setActiveTab("reviews")}>
            Reviews
          </button>
          <button className={`tab ${activeTab === "author" ? "active" : ""}`} onClick={() => setActiveTab("author")}>
            About the Author
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "summary" && (
            <div className="summary">
              <p>{book.fullDescription}</p>
            </div>
          )}
          {activeTab === "reviews" && (
            <div className="reviews">
              {book.reviews.map((review, index) => (
                <div key={index} className="review">
                  <div className="review-header">
                    <div className="reviewer">
                      <img src={review.userAvatar || "/placeholder.svg"} alt={review.userName} />
                      <div>
                        <h4>{review.userName}</h4>
                        <div className="review-stars">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < review.rating ? "filled" : ""} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="review-date">{review.date}</span>
                  </div>
                  <p>{review.content}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === "author" && (
            <div className="author">
              <div className="author-header">
                <img src={book.authorImage || "/placeholder.svg"} alt={book.author} />
                <div>
                  <h3>{book.author}</h3>
                  <p>{book.authorBio}</p>
                </div>
              </div>
              <div className="author-books">
                <h4>Other books by {book.author}</h4>
                <div className="book-list">
                  {book.otherBooks.map((otherBook, index) => (
                    <Link key={index} to={`/book/${otherBook.id}`} className="other-book">
                      <img src={otherBook.cover || "/placeholder.svg"} alt={otherBook.title} />
                      <span>{otherBook.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="similar-books">
        <h2>Similar Books</h2>
        <div className="book-grid">
          {similarBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BookDetails
