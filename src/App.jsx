import React, { lazy, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import {
  getFeaturedBooks,
  getNewsItems,
  getRecommendedBooks,
} from './services/dataService'
import Review from './pages/Review/Review'

const BookDetail = lazy(() => import('./Components/BookDetail'))
const FeaturedBook = lazy(() => import('./components/FeaturedBook'))
const Header = lazy(() => import('./components/Header'))
const Loading = lazy(() => import('./Components/Loading'))
const NewsSection = lazy(() => import('./components/NewsSection'))
const Recommendations = lazy(() => import('./components/Recommendations'))
const Sidebar = lazy(() => import('./components/Sidebar'))
const Authors = lazy(() => import('./pages/Authors'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const Bookshelf = lazy(() => import('./pages/Bookshelf'))


function App() {
  const [selectedGenre, setSelectedGenre] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [featuredBook, setFeaturedBook] = useState(null)
  const [recommendedBooks, setRecommendedBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])
  const [newsItems, setNewsItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedBook, setSelectedBook] = useState(null)
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

        const books = await getRecommendedBooks()
        // Also update the recommended books list;
        setRecommendedBooks(books)
        setFilteredBooks(books)
      } catch (error) {
        console.error('Error fetching initial data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchInitialData()
  }, [])

  // Modified useEffect to avoid depending on recommendedBooks (which could cause infinite loops)
  useEffect(() => {
    if (recommendedBooks.length > 0) {
      // First filter by genre
      let filtered =
        selectedGenre === 'All' || selectedGenre === 'Non-Fiction'
          ? [...recommendedBooks]
          : recommendedBooks.filter((book) =>
              book?.categories?.includes(selectedGenre)
            )

      // Then filter by search query if there is one
      if (searchQuery && searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase()
        filtered = filtered.filter(
          (book) =>
            (book?.title && book.title.toLowerCase().includes(query)) ||
            (book?.author && book.author.toLowerCase().includes(query)) ||
            (book?.description &&
              book.description.toLowerCase().includes(query))
        )
      }

      setFilteredBooks(filtered)
    }
  }, [selectedGenre, searchQuery]) // Remove recommendedBooks dependency

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre)
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const handleViewBookDetails = (book) => {
    setSelectedBook(book)
  }

  const handleCloseBookDetails = () => {
    setSelectedBook(null)
  }

  // Discover page component
  const DiscoverPage = () => (
    <>
      <div className="primary-content">
        {featuredBook && (
          <FeaturedBook
            book={featuredBook}
            onViewDetails={() => handleViewBookDetails(featuredBook)}
          />
        )}
        <Recommendations
          books={filteredBooks}
          genre={selectedGenre}
          searchQuery={searchQuery}
          onViewDetails={handleViewBookDetails}
        />
      </div>
      <NewsSection news={newsItems} />
    </>
  )

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
              <Loading
                size="large"
                text="Loading content..."
              />
            </div>
          ) : (
            <Routes>


              <Route path="/" element={<DiscoverPage />} />
              <Route path="/bookshelf" element={<Bookshelf onViewDetails={handleViewBookDetails} />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/reviews/:bookId" element={<Review />} />
              <Route path="/contact" element={<Contact />} />
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
      {selectedBook && (
        <BookDetail
          bookId={selectedBook.id}
          book={selectedBook}
          onClose={handleCloseBookDetails}
        />
      )}
    </div>
  )
}

export default App
