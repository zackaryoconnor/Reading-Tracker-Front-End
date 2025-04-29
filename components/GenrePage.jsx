"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import BookCard from "./BookCard"
import { getBooksByGenre } from "../data"
import "../styles/GenrePage.css"

function GenrePage() {
  const { genre } = useParams()
  const [books, setBooks] = useState([])
  const [filter, setFilter] = useState("all")
  const [sortBy, setSortBy] = useState("popularity")

  useEffect(() => {
    const fetchedBooks = getBooksByGenre(genre)
    setBooks(fetchedBooks)
  }, [genre])

  const filteredBooks = books
    .filter((book) => {
      if (filter === "all") return true
      if (filter === "new") return book.isNew
      if (filter === "bestseller") return book.isBestseller
      return true
    })
    .sort((a, b) => {
      if (sortBy === "popularity") return b.ratingCount - a.ratingCount
      if (sortBy === "rating") return b.rating - a.rating
      if (sortBy === "newest") return new Date(b.publishDate) - new Date(a.publishDate)
      return 0
    })

  return (
    <div className="genre-page">
      <div className="genre-header">
        <h1>{genre.charAt(0).toUpperCase() + genre.slice(1)} Books</h1>
        <p>Discover the best {genre} books for your reading pleasure</p>
      </div>

      <div className="filter-bar">
        <div className="filter-options">
          <button className={`filter-button ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
            All
          </button>
          <button className={`filter-button ${filter === "new" ? "active" : ""}`} onClick={() => setFilter("new")}>
            New Releases
          </button>
          <button
            className={`filter-button ${filter === "bestseller" ? "active" : ""}`}
            onClick={() => setFilter("bestseller")}
          >
            Bestsellers
          </button>
        </div>
        <div className="sort-options">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      <div className="book-grid genre-books">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default GenrePage
