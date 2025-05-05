import { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { getUserBookshelf } from '../services/dataService'
import './Bookshelf.css'

const Bookshelf = ({ onViewDetails }) => {
  const [userBooks, setUserBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState('all')

  useEffect(() => {
    const fetchUserBooks = async () => {
      setLoading(true)
      try {
        const bookshelfData = await getUserBookshelf()
        setUserBooks(bookshelfData)
        setError(null)
      } catch (err) {
        console.error('Error fetching user bookshelf:', err)
        setError('Failed to load your bookshelf. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchUserBooks()
  }, [])

  const getFilteredBooks = () => {
    if (activeTab === 'all') {
      return userBooks
    }
    return userBooks.filter(book => book.status === activeTab)
  }

  const filteredBooks = getFilteredBooks()

  const getProgressPercentage = (progress) => {
    return Math.round(progress * 100)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString()
  }

  // Function to handle view button clicks - it passes the book details to App's handler
  const handleViewBook = (book) => {
    // Pass the full book object to onViewDetails
    onViewDetails(book.bookDetails)
  }

  return (
    <div className="bookshelf-page">
      <div className="bookshelf-header">
        <h1>My Bookshelf</h1>
        <div className="bookshelf-tabs">
          <button
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Books
          </button>
        </div>
      </div>

      {loading ? (
        <div className="bookshelf-loading">
          <Loading size="large" text="Loading your bookshelf..." />
        </div>
      ) : error ? (
        <div className="bookshelf-error">{error}</div>
      ) : filteredBooks.length === 0 ? (
        <div className="empty-bookshelf">
          <div className="empty-icon">📚</div>
          <h2>Your bookshelf is empty</h2>
          <p>
            {activeTab === 'all'
              ? "You haven't added any books to your bookshelf yet."
              : activeTab === 'reading'
                ? "You're not currently reading any books."
                : activeTab === 'want-to-read'
                  ? "You don't have any books in your want-to-read list."
                  : "You haven't completed any books yet."
            }
          </p>
          <button className="btn-primary">Discover Books</button>
        </div>
      ) : (
        <div className="bookshelf-table">
          <div className="table-header">
            <div className="table-cell book-info-cell">Book</div>
            <div className="table-cell author-cell">Author</div>
            <div className="table-cell status-cell">Status</div>
            <div className="table-cell progress-cell">Progress</div>
            <div className="table-cell date-cell">Date Added</div>
            <div className="table-cell actions-cell">Actions</div>
          </div>

          <div className="table-body">
            {filteredBooks.map((item) => (
              <div key={item.bookId} className="table-row">
                <div className="table-cell book-info-cell">
                  <div className="book-info">
                    <img
                      src={item.bookDetails.coverImage}
                      alt={item.bookDetails.title}
                      className="book-thumbnail"
                      onClick={() => handleViewBook(item)}
                    />
                    <div className="book-title-info">
                      <div
                        className="book-title"
                        onClick={() => handleViewBook(item)}
                      >
                        {item.bookDetails.title}
                      </div>
                      <div className="book-categories">
                        {item.bookDetails.categories.slice(0, 2).join(', ')}
                        {item.bookDetails.categories.length > 2 && '...'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="table-cell author-cell">
                  {item.bookDetails.authorName}
                </div>

                <div className="table-cell status-cell">
                  <span className={`status-badge ${item.status}`}>
                    {item.status === 'reading'
                      ? 'Reading'
                      : item.status === 'read'
                        ? 'Completed'
                        : 'Want to Read'}
                  </span>
                </div>

                <div className="table-cell progress-cell">
                  {item.status === 'reading' ? (
                    <div className="progress-bar-container">
                      <div
                        className="progress-bar"
                        style={{ width: `${getProgressPercentage(item.progress)}%` }}
                      ></div>
                      <span className="progress-text">{getProgressPercentage(item.progress)}%</span>
                    </div>
                  ) : item.status === 'read' ? (
                    <span className="completed-text">100%</span>
                  ) : (
                    <span className="not-started-text">Not Started</span>
                  )}
                </div>

                <div className="table-cell date-cell">
                  {formatDate(item.dateAdded)}
                </div>

                <div className="table-cell actions-cell">
                  <button
                    className="action-btn view-btn"
                    onClick={() => handleViewBook(item)}
                  >
                    View
                  </button>
                  <button className="action-btn update-btn">
                    Update
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Bookshelf
