import { ChevronLeft, ChevronRight } from "lucide-react"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./NewsSection.css"

const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const newsItems = [
    {
      id: "1",
      title: '"The Mist Keeper\'s Apprentice" the popular fantasy novel has been renewed for a sequel',
      content:
        "The highly anticipated sequel is set to premiere on September 4, 2024, promising more thrilling storylines and complex characters that readers have come to love.",
      date: "25 April",
    },
    {
      id: "2",
      title: "Booker Prize shortlist announced featuring debut authors",
      content:
        "Notable nominees including the acclaimed Zadie Smith and Gillian Flynn will compete for the prestigious literary award this year.",
      date: "18 April",
    },
    {
      id: "3",
      title: "Rebecca Yarros announces fifth book in Empyrean series",
      content:
        "Fans of the bestselling fantasy series can look forward to another installment following the massive success of Iron Flame.",
      date: "10 April",
    },
  ]

  const nextNews = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length)
  }

  const prevNews = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length)
  }

  return (
    <div className="news-section">
      <div className="news-section-header">
        <h2 className="news-section-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="news-section-icon"
          >
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
          </svg>
          Hot News
        </h2>
      </div>

      <div className="news-section-content">
        <Link to={`/news/${newsItems[currentIndex].id}`} className="news-section-item">
          <h3 className="news-section-item-title">{newsItems[currentIndex].title}</h3>
          <p className="news-section-item-content">{newsItems[currentIndex].content}</p>
        </Link>

        <div className="news-section-footer">
          <span className="news-section-date">{newsItems[currentIndex].date}</span>
          <div className="news-section-navigation">
            <span className="news-section-pagination">
              {currentIndex + 1}/{newsItems.length}
            </span>
            <button onClick={prevNews} className="news-section-nav-button">
              <ChevronLeft className="news-section-nav-icon" />
            </button>
            <button onClick={nextNews} className="news-section-nav-button">
              <ChevronRight className="news-section-nav-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsSection
