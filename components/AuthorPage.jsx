"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa"
import BookCard from "./BookCard"
import { getAuthorById, getBooksByAuthor } from "../data"
import "../styles/AuthorPage.css"

function AuthorPage() {
  const { id } = useParams()
  const [author, setAuthor] = useState(null)
  const [books, setBooks] = useState([])
  const [showFullBio, setShowFullBio] = useState(false)

  useEffect(() => {
    const fetchedAuthor = getAuthorById(id)
    setAuthor(fetchedAuthor)

    const fetchedBooks = getBooksByAuthor(id)
    setBooks(fetchedBooks)
  }, [id])

  if (!author) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="author-page">
      <div className="author-header">
        <div className="author-image">
          <img src={author.image || "/placeholder.svg"} alt={author.name} />
        </div>
        <div className="author-info">
          <h1>{author.name}</h1>
          <div className="author-meta">
            <span>{author.bookCount} Books</span>
            <span>{author.followers} Followers</span>
          </div>
          <div className="author-social">
            {author.twitter && (
              <a href={author.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            )}
            {author.instagram && (
              <a href={author.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            )}
            {author.website && (
              <a href={author.website} target="_blank" rel="noopener noreferrer">
                <FaGlobe />
              </a>
            )}
          </div>
          <div className="author-bio">
            <p>
              {showFullBio ? author.fullBio : `${author.fullBio.substring(0, 300)}...`}
              <button className="read-more" onClick={() => setShowFullBio(!showFullBio)}>
                {showFullBio ? "Read Less" : "Read More"}
              </button>
            </p>
          </div>
          <button className="follow-button">Follow Author</button>
        </div>
      </div>

      <div className="author-books">
        <h2>Books by {author.name}</h2>
        <div className="book-grid">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>

      <div className="author-interviews">
        <h2>Interviews & Features</h2>
        <div className="interview-grid">
          {author.interviews.map((interview, index) => (
            <div key={index} className="interview-card">
              <img src={interview.image || "/placeholder.svg"} alt={interview.title} />
              <div className="interview-content">
                <h3>{interview.title}</h3>
                <p>{interview.description}</p>
                <a href={interview.url} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
                <span className="interview-source">{interview.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AuthorPage
