
import { ChevronLeft, ChevronRight } from "lucide-react"
import React, { useState } from "react"
import Button from "./Button"
import "./FeaturedBook.css"

const FeaturedBook = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const featuredBooks = [
    {
      id: "1",
      title: "A Court of Thorns and Roses",
      author: "Sarah J. Maas",
      description:
        "It's the story of Feyre, a mortal huntress who is brought to a magical land after killing a faerie wolf in the woods. These lands, including the Spring Court, the Night Court, and other seasonal courts, are ruled by powerful High Fae who have been battling for control since a blight fell upon their lands fifty years ago.",
      rating: 4.5,
      genres: ["Fantasy", "Romance", "Fiction"],
      coverUrl: "/thorny-rose-grimoire.png",
    },
    {
      id: "2",
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      description:
        "Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. When she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself. Summoned to Evelyn's luxurious apartment, Monique listens in fascination as the actress tells her story.",
      rating: 4.7,
      genres: ["Historical Fiction", "Romance", "LGBT"],
      coverUrl: "/hollywood-glamour-cover.png",
    },
  ]

  const currentBook = featuredBooks[currentIndex]

  const nextBook = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredBooks.length)
  }

  const prevBook = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredBooks.length) % featuredBooks.length)
  }

  return (
    <div className="featured-book">
      <div className="featured-book-background" style={{ backgroundImage: `url(${currentBook.coverUrl})` }}>
        <div className="featured-book-overlay"></div>
      </div>

      <div className="featured-book-content">
        <div className="featured-book-rating">
          <span>{currentBook.rating.toFixed(1)}</span>
        </div>

        <h1 className="featured-book-title">{currentBook.title}</h1>

        <div className="featured-book-genres">
          {currentBook.genres.map((genre, index) => (
            <span key={index} className="featured-book-genre">
              {genre}
              {index < currentBook.genres.length - 1 && <span className="featured-book-genre-separator"></span>}
            </span>
          ))}
        </div>

        <p className="featured-book-description">{currentBook.description}</p>

        <div className="featured-book-actions">
          <Button className="featured-book-action-primary">READ NOW</Button>
          <Button variant="outline" className="featured-book-action-secondary">
            ADD TO LIST
          </Button>
        </div>
      </div>

      <div className="featured-book-navigation">
        <button className="featured-book-nav-button" onClick={prevBook}>
          <ChevronLeft className="featured-book-nav-icon" />
          <span className="sr-only">Previous book</span>
        </button>
        <button className="featured-book-nav-button" onClick={nextBook}>
          <ChevronRight className="featured-book-nav-icon" />
          <span className="sr-only">Next book</span>
        </button>
      </div>
    </div>
  )
}

export default FeaturedBook
