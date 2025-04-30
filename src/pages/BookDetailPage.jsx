import { ArrowLeft, BookOpen, Heart, Share2, Star } from "lucide-react"
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Button from "../components/Button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/Tabs"
import "./BookDetailPage.css"

const BookDetailPage = () => {
  const { id } = useParams()
  const [book, setBook] = useState(null)
  const [isFavorite, setIsFavorite] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const mockBook = {
      id,
      title: "A Court of Thorns and Roses",
      author: "Sarah J. Maas",
      coverUrl: "/thorny-rose-grimoire.png",
      rating: 4.5,
      ratingCount: 12548,
      description:
        "When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution. Dragged to a treacherous magical land she knows about only from legends, Feyre discovers that her captor is not truly a beast, but one of the lethal, immortal faeries who once ruled her world. At least, he's not a beast all the time. As she adapts to her new home, her feelings for the faerie, Tamlin, transform from icy hostility into a fiery passion that burns through every lie she's been told about the beautiful, dangerous world of the Fae. But something is not right in the faerie lands. An ancient, wicked shadow is growing, and Feyre must find a way to stop it, or doom Tamlin—and his world—forever.",
      genres: ["Fantasy", "Romance", "Fiction", "Young Adult"],
      publishDate: "May 5, 2015",
      publisher: "Bloomsbury Publishing",
      pages: 419,
      isbn: "9781619634442",
      reviews: [
        {
          id: "1",
          user: "BookLover92",
          avatar: "/mystical-forest-spirit.png",
          rating: 5,
          date: "March 15, 2024",
          content:
            "This book completely captivated me from the first page. The world-building is incredible, and the characters are so well-developed. I couldn't put it down!",
        },
        {
          id: "2",
          user: "FantasyReader",
          avatar: "/mystical-forest-spirit.png",
          rating: 4,
          date: "February 28, 2024",
          content:
            "A great fantasy romance with interesting characters and a unique take on the Beauty and the Beast story. The pacing was a bit slow in the middle, but the ending more than made up for it.",
        },
        {
          id: "3",
          user: "LiteraryExplorer",
          avatar: "/mystical-forest-spirit.png",
          rating: 5,
          date: "January 10, 2024",
          content:
            "Sarah J. Maas has created a fascinating world with complex characters. The romance is steamy, and the plot twists kept me engaged throughout. Can't wait to read the next book in the series!",
        },
      ],
    }

    setBook(mockBook)
    setLoading(false)
  }, [id])

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="book-detail">
      <header className="book-detail-header">
        <Link to="/" className="book-detail-back-button">
          <ArrowLeft className="book-detail-back-icon" />
          <span>Back</span>
        </Link>
        <div className="book-detail-actions">
          <button className="book-detail-action-button">
            <Share2 className="book-detail-action-icon" />
          </button>
          <button
            className={`book-detail-action-button ${isFavorite ? "book-detail-action-button-active" : ""}`}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart className={`book-detail-action-icon ${isFavorite ? "book-detail-action-icon-filled" : ""}`} />
          </button>
        </div>
      </header>

      <div className="book-detail-container">
        <div className="book-detail-grid">
          {/* Book Cover */}
          <div className="book-detail-cover-container">
            <div className="book-detail-cover">
              <img
                src={book.coverUrl || "/placeholder.svg"}
                alt={`Cover of ${book.title}`}
                className="book-detail-cover-image"
              />
            </div>

            <div className="book-detail-cover-actions">
              <Button className="book-detail-cover-action-primary">
                <BookOpen className="book-detail-cover-action-icon" />
                Read Now
              </Button>
              <Button variant="outline" className="book-detail-cover-action-secondary">
                Add to Reading List
              </Button>
            </div>
          </div>

          {/* Book Details */}
          <div className="book-detail-content">
            <h1 className="book-detail-title">{book.title}</h1>
            <p className="book-detail-author">by {book.author}</p>

            <div className="book-detail-rating">
              <div className="book-detail-rating-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`book-detail-rating-star ${star <= Math.round(book.rating) ? "book-detail-rating-star-filled" : ""
                      }`}
                  />
                ))}
                <span className="book-detail-rating-value">{book.rating.toFixed(1)}</span>
                <span className="book-detail-rating-count">({book.ratingCount} ratings)</span>
              </div>
            </div>

            <div className="book-detail-genres">
              {book?.genres?.map((genre, index) => (
                <Link key={index} to={`/genres/${genre.toLowerCase()}`} className="book-detail-genre">
                  {genre}
                </Link>
              ))}
            </div>

            <Tabs defaultValue="overview" className="book-detail-tabs">
              <TabsList className="book-detail-tabs-list">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="book-detail-tab-content">
                <div className="book-detail-overview">
                  <h3 className="book-detail-section-title">Synopsis</h3>
                  <p className="book-detail-description">{book.description}</p>
                </div>
              </TabsContent>

              <TabsContent value="details" className="book-detail-tab-content">
                <div className="book-detail-info">
                  <h3 className="book-detail-section-title">Book Information</h3>
                  <div className="book-detail-info-grid">
                    <div className="book-detail-info-column">
                      <p className="book-detail-info-item">
                        <span className="book-detail-info-label">Publisher:</span>
                        <span className="book-detail-info-value">{book.publisher}</span>
                      </p>
                      <p className="book-detail-info-item">
                        <span className="book-detail-info-label">Publication Date:</span>
                        <span className="book-detail-info-value">{book.publishDate}</span>
                      </p>
                    </div>
                    <div className="book-detail-info-column">
                      <p className="book-detail-info-item">
                        <span className="book-detail-info-label">Pages:</span>
                        <span className="book-detail-info-value">{book.pages}</span>
                      </p>
                      <p className="book-detail-info-item">
                        <span className="book-detail-info-label">ISBN:</span>
                        <span className="book-detail-info-value">{book.isbn}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="book-detail-tab-content">
                <div className="book-detail-reviews">
                  <h3 className="book-detail-section-title">Reader Reviews</h3>
                  <div className="book-detail-reviews-list">
                    {book.reviews.map((review) => (
                      <div key={review.id} className="book-detail-review">
                        <div className="book-detail-review-header">
                          <div className="book-detail-review-user">
                            <div className="book-detail-review-avatar">
                              <img
                                src={review.avatar || "/placeholder.svg"}
                                alt={review.user}
                                className="book-detail-review-avatar-image"
                              />
                            </div>
                            <span className="book-detail-review-username">{review.user}</span>
                          </div>
                          <div className="book-detail-review-rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`book-detail-review-star ${star <= review.rating ? "book-detail-review-star-filled" : ""
                                  }`}
                              />
                            ))}
                            <span className="book-detail-review-date">{review.date}</span>
                          </div>
                        </div>
                        <p className="book-detail-review-content">{review.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetailPage;
