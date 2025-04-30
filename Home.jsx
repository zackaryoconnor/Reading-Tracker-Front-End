"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import BookCard from "./BookCard"
import { featuredBooks, recommendedBooks, trendingBooks, bookNews } from "./data"
import "./Home.css"

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeNewsIndex, setActiveNewsIndex] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredBooks.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredBooks.length - 1 : prev - 1))
  }

  const nextNews = () => {
    setActiveNewsIndex((prev) => (prev === bookNews.length - 1 ? 0 : prev + 1))
  }

  const prevNews = () => {
    setActiveNewsIndex((prev) => (prev === 0 ? bookNews.length - 1 : prev - 1))
  }

  return (
    <div className="home-container">
      <div className="content-area">
        <section className="featured-section">
          {featuredBooks.map((book, index) => (
            <div
              key={book.id}
              className={`featured-book ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${book.coverLarge})` }}
            >
              <div className="featured-content">
                <h1>{book.title}</h1>
                <div className="book-meta">
                  <span className="rating">{book.rating}</span>
                  <span className="genre">{book.genres.join(" • ")}</span>
                </div>
                <p className="book-description">{book.description}</p>
                <div className="action-buttons">
                  <Link to={`/book/${book.id}`} className="primary-button">
                    READ NOW
                  </Link>
                  <Link to={`/book/${book.id}/preview`} className="secondary-button">
                    Preview
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div className="slider-controls">
            <button className="slider-arrow prev" onClick={prevSlide}>
              <FaChevronLeft />
            </button>
            <button className="slider-arrow next" onClick={nextSlide}>
              <FaChevronRight />
            </button>
          </div>
        </section>

        <section className="recommended-section">
          <div className="section-header">
            <h2>Recommended For You</h2>
            <Link to="/recommended" className="view-all">
              View All <span className="arrow">→</span>
            </Link>
          </div>
          <div className="book-grid">
            {recommendedBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>

        <section className="trending-section">
          <div className="section-header">
            <h2>Trending Books</h2>
            <Link to="/trending" className="view-all">
              View All <span className="arrow">→</span>
            </Link>
          </div>
          <div className="book-grid">
            {trendingBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      </div>

      <aside className="news-sidebar">
        <div className="news-container">
          <h3 className="news-header">
            <span className="icon">📚</span> Book News
          </h3>
          <div className="news-slider">
            {bookNews.map((news, index) => (
              <div key={index} className={`news-item ${index === activeNewsIndex ? "active" : ""}`}>
                <img src={news.image || "/placeholder.svg"} alt={news.title} />
                <h4>{news.title}</h4>
                <p>{news.content}</p>
                <span className="news-date">{news.date}</span>
              </div>
            ))}
            <div className="news-pagination">
              <span>
                {activeNewsIndex + 1}/{bookNews.length}
              </span>
            </div>
            <div className="news-controls">
              <button onClick={prevNews} className="news-arrow prev">
                <FaChevronLeft />
              </button>
              <button onClick={nextNews} className="news-arrow next">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default Home
