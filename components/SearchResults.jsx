"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import BookCard from "./BookCard"
import { searchBooks, searchAuthors } from "../data"
import "../styles/SearchResults.css"

function SearchResults() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q") || ""
  const [activeTab, setActiveTab] = useState("books")
  const [books, setBooks] = useState([])
  const [authors, setAuthors] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const fetchedBooks = searchBooks(query)
    const fetchedAuthors = searchAuthors(query)
    setBooks(fetchedBooks)
    setAuthors(fetchedAuthors)
    setLoading(false)
  }, [query])

  return (
    <div className="search-results">
      <div className="search-header">
        <h1>Search Results for "{query}"</h1>
        <div className="result-tabs">
          <button
            className={`tab-button ${activeTab === "books" ? "active" : ""}`}
            onClick={() => setActiveTab("books")}
          >
            Books ({books.length})
          </button>
          <button
            className={`tab-button ${activeTab === "authors" ? "active" : ""}`}
            onClick={() => setActiveTab("authors")}
          >
            Authors ({authors.length})
          </button>
        </div>
      </div>

      {loading ? (
        <div className="loading">Loading results...</div>
      ) : (
        <div className="results-container">
          {activeTab === "books" && (
            <>
              {books.length > 0 ? (
                <div className="book-grid">
                  {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              ) : (
                <div className="no-results">
                  <p>No books found matching "{query}"</p>
                </div>
              )}
            </>
          )}

          {activeTab === "authors" && (
            <>
              {authors.length > 0 ? (
                <div className="authors-grid">
                  {authors.map((author) => (
                    <div key={author.id} className="author-card">
                      <img src={author.image || "/placeholder.svg"} alt={author.name} />
                      <h3>{author.name}</h3>
                      <p>{author.bookCount} Books</p>
                      <button className="view-button">View Profile</button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-results">
                  <p>No authors found matching "{query}"</p>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchResults
