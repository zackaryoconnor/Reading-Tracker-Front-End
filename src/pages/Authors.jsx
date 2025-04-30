import { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { authors } from '../services/dataService'
import './Authors.css'

const Authors = ({ onViewDetails }) => {
  const [authorsList, setAuthorsList] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedAuthor, setSelectedAuthor] = useState(null)

  useEffect(() => {
    // Simulate API call to fetch authors
    setLoading(true)

    setTimeout(() => {
      setAuthorsList(authors)
      setLoading(false)
    }, 800)
  }, [])

  const handleAuthorClick = (authorId) => {
    // Find the selected author
    const author = authorsList.find(a => a.id === authorId)
    setSelectedAuthor(author)
  }

  const handleAuthorBookClick = (bookId) => {
    if (onViewDetails) {
      onViewDetails(bookId)
    }
  }

  const handleBackClick = () => {
    setSelectedAuthor(null)
  }

  // Render the author details view
  const renderAuthorDetails = () => {
    if (!selectedAuthor) return null

    return (
      <div className="author-details">
        <button className="back-btn" onClick={handleBackClick}>
          ← Back to Authors
        </button>

        <div className="author-profile">
          <img
            src={selectedAuthor.photo}
            alt={selectedAuthor.name}
            className="author-profile-photo"
          />

          <div className="author-profile-info">
            <h1 className="author-name">{selectedAuthor.name}</h1>
            <p className="author-bio">{selectedAuthor.biography}</p>
          </div>
        </div>

        <div className="author-books-section">
          <h2>Books by {selectedAuthor.name}</h2>

          <div className="author-books">
            {selectedAuthor.popularBooks.map(bookId => {
              // This is a simplified example - in a real app, you would use the actual book data
              const bookInfo = {
                id: bookId,
                title: `Book ${bookId}`,
                coverImage: `https://via.placeholder.com/150x225?text=Book+${bookId}`
              }

              return (
                <div
                  key={bookInfo.id}
                  className="author-book-item"
                  onClick={() => handleAuthorBookClick(bookInfo.id)}
                >
                  <img
                    src={bookInfo.coverImage}
                    alt={bookInfo.title}
                    className="author-book-cover"
                  />
                  <div className="author-book-title">{bookInfo.title}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  // Render the authors list view
  const renderAuthorsList = () => {
    return (
      <div className="authors-list">
        <h1>Popular Authors</h1>

        <div className="authors-grid">
          {authorsList.map(author => (
            <div
              key={author.id}
              className="author-card"
              onClick={() => handleAuthorClick(author.id)}
            >
              <div className="author-image">
                <img src={author.photo} alt={author.name} />
              </div>

              <div className="author-info">
                <h3 className="author-card-name">{author.name}</h3>
                <div className="book-count">
                  {author.popularBooks.length} Book{author.popularBooks.length !== 1 ? 's' : ''}
                </div>
                <p className="author-card-bio">
                  {author.biography.length > 100
                    ? `${author.biography.substring(0, 100)}...`
                    : author.biography}
                </p>

                <button className="view-profile-btn">View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="authors-page">
      {loading ? (
        <div className="authors-loading">
          <Loading size="large" text="Loading authors..." />
        </div>
      ) : selectedAuthor ? (
        renderAuthorDetails()
      ) : (
        renderAuthorsList()
      )}
    </div>
  )
}

export default Authors
