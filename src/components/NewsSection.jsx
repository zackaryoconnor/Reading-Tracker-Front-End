import { useState } from 'react'
import './NewsSection.css'

const NewsSection = ({ news = [] }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(news.length / 3)

  // Get current date for display
  const currentDate = new Date()
  const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString('default', { month: 'long' })}`

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  // Display only the news items for the current page
  const visibleNews = news.slice((currentPage - 1) * 3, currentPage * 3)

  return (
    <div className="news-section">
      <div className="news-header">
        <h2>Hot News</h2>
      </div>

      <div className="news-items">
        {visibleNews.length > 0 ? (
          visibleNews.map((item) => (
            <div key={item.id} className="news-item">
              <div className="news-image">
                <img src={item.image} alt="News" />
              </div>
              <div className="news-content">
                <p className="news-title">{item.title}</p>
                <p className="news-source">{item.author}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="no-news">No news items available</div>
        )}
      </div>

      <div className="news-footer">
        <span className="news-date">{formattedDate}</span>

        <div className="pagination-controls">
          <button
            className="page-btn"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          <div className="pagination">
            <span className="current-page">{currentPage}</span>
            <span className="separator">/</span>
            <span className="total-pages">{totalPages || 1}</span>
          </div>

          <button
            className="page-btn"
            onClick={handleNextPage}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsSection
