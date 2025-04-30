import React, { useEffect, useState } from 'react'
import BookDetail from './components/BookDetail'
import FeaturedBook from './components/FeaturedBook'
import Header from './components/Header'
import Loading from './components/Loading'
import NewsSection from './components/NewsSection'
import Recommendations from './components/Recommendations'
import Sidebar from './components/Sidebar'
import { getFeaturedBooks, getNewsItems } from './services/dataService'

// Pages
import Authors from './pages/Authors'
import Blog from './pages/Blog'
import Bookshelf from './pages/Bookshelf'

function App() {
  const [selectedGenre, setSelectedGenre] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [featuredBook, setFeaturedBook] = useState(null)
  const [newsItems, setNewsItems] = useState([])
  const [loading, setLoading] = useState(true)

  // Routing state
  const [currentPage, setCurrentPage] = useState('discover')
  const [selectedBookId, setSelectedBookId] = useState(null)

  useEffect(() => {
    // Fetch featured book and news items when the component mounts
    const fetchInitialData = async () => {
      try {
        const featured = await getFeaturedBooks()
        if (featured && featured.length > 0) {
          setFeaturedBook(featured[0])
        }

        const news = await getNewsItems(3) // Get top 3 news
        setNewsItems(news)
      } catch (error) {
        console.error('Error fetching initial data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchInitialData()
  }, [])

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre)
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
    // For search results, we should switch to the discover page
    setCurrentPage('discover')
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    // Reset search and genre when changing pages
    if (page !== 'discover') {
      setSearchQuery('')
      setSelectedGenre('All')
    }
  }

  const handleViewBookDetails = (bookId) => {
    setSelectedBookId(bookId)
  }

  const handleCloseBookDetails = () => {
    setSelectedBookId(null)
  }

  // Render the current page based on state
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'discover':
        return (
          <>
            <div className="primary-content">
              {featuredBook && (
                <FeaturedBook
                  book={featuredBook}
                  onViewDetails={() => handleViewBookDetails(featuredBook.id)}
                />
              )}
              <Recommendations
                genre={selectedGenre}
                searchQuery={searchQuery}
                onViewDetails={handleViewBookDetails}
              />
            </div>
            <NewsSection news={newsItems} />
          </>
        )
      case 'bookshelf':
        return <Bookshelf onViewDetails={handleViewBookDetails} />
      case 'blog':
        return <Blog />
      case 'authors':
        return <Authors onViewDetails={handleViewBookDetails} />
      default:
        return (
          <div className="page-not-found">
            <h2>Page Not Found</h2>
            <p>The page you're looking for doesn't exist or is still under development.</p>
            <button
              className="btn-primary"
              onClick={() => handlePageChange('discover')}
            >
              Back to Home
            </button>
          </div>
        )
    }
  }

  return (
    <div className="app">
      <Sidebar activePage={currentPage} onPageChange={handlePageChange} />
      <div className="main-content">
        <Header
          onGenreChange={handleGenreChange}
          onSearch={handleSearch}
          activePage={currentPage}
        />
        <div className="content-container">
          {loading ? (
            <div className="loading-container">
              <Loading size="large" text="Loading content..." />
            </div>
          ) : (
            renderCurrentPage()
          )}
        </div>
      </div>

      {/* Book detail modal */}
      {selectedBookId && (
        <BookDetail
          bookId={selectedBookId}
          onClose={handleCloseBookDetails}
        />
      )}
    </div>
  )
}

export default App
