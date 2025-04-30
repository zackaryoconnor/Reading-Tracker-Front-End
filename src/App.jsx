import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import BookDetail from './components/BookDetail'
import FeaturedBook from './components/FeaturedBook'
import Header from './components/Header'
import Loading from './components/Loading'
import NewsSection from './components/NewsSection'
import Recommendations from './components/Recommendations'
import Sidebar from './components/Sidebar'
import Authors from './pages/Authors'
import Blog from './pages/Blog'
import Bookshelf from './pages/Bookshelf'
import { getFeaturedBooks, getNewsItems } from './services/dataService'

function App() {
  const [selectedGenre, setSelectedGenre] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [featuredBook, setFeaturedBook] = useState(null)
  const [newsItems, setNewsItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedBookId, setSelectedBookId] = useState(null)
  const location = useLocation()

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
  }

  const handleViewBookDetails = (bookId) => {
    setSelectedBookId(bookId)
  }

  const handleCloseBookDetails = () => {
    setSelectedBookId(null)
  }

  // Discover page component
  const DiscoverPage = () => (
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
  );

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header
          onGenreChange={handleGenreChange}
          onSearch={handleSearch}
          currentPath={location.pathname}
        />
        <div className="content-container">
          {loading ? (
            <div className="loading-container">
              <Loading size="large" text="Loading content..." />
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<DiscoverPage />} />
              <Route path="/bookshelf" element={<Bookshelf onViewDetails={handleViewBookDetails} />} />
              <Route path="/authors" element={<Authors onViewDetails={handleViewBookDetails} />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={
                <div className="page-not-found">
                  <h2>Page Not Found</h2>
                  <p>The page you're looking for doesn't exist or is still under development.</p>
                </div>
              } />
            </Routes>
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
