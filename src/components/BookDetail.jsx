import './BookDetail.css'
import Loading from './Loading'

const BookDetail = ({ loading = false, book = {}, onClose }) => {
  if (loading) {
    return (
      <div className="book-detail-modal">
        <div className="book-detail-container">
          <div className="book-detail-header">
            <button className="close-btn" onClick={onClose}>✕</button>
          </div>
          <Loading size="large" text="Loading book details..." />
        </div>
      </div>
    )
  }

  return (
    <div className="book-detail-modal">
      <div className="book-detail-container">
        <div className="book-detail-header">
          <h2>{book.title}</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="book-detail-content">
          <div className="book-detail-main">
            <div className="book-cover-container">
              <img src={book.coverImage} alt={book.title} className="book-detail-cover" />

              <div className="book-rating-badge">
                <span className="rating-value">{book.rating}</span>
                <span className="rating-max">/10</span>
              </div>
            </div>

            <div className="book-info-container">
              <div className="book-meta">
                <h1 className="book-title">{book.title}</h1>
                <h3 className="book-author">by {book.authorName}</h3>

                <div className="book-categories-list">
                  {book.categories?.map((category, index) => (
                    <span key={index} className="category-badge">
                      {category}
                    </span>
                  ))}
                </div>

                <div className="book-stats">
                  <div className="stat-item">
                    <span className="stat-label">Published</span>
                    <span className="stat-value">{new Date(book.publicationDate).toLocaleDateString()}</span>
                  </div>

                  <div className="stat-item">
                    <span className="stat-label">Pages</span>
                    <span className="stat-value">{book.pages}</span>
                  </div>
                </div>
              </div>

              <div className="book-description">
                <h3>Description</h3>
                <p>{book.description}</p>
              </div>
            </div>
          </div>

          {book.author && (
            <div className="author-section">
              <h3>About the Author</h3>
              <div className="author-info">
                <img src={author.photo} alt={author.name} className="author-photo" />
                <div className="author-bio">
                  <h4>{author.name}</h4>
                  <p>{author.biography}</p>
                </div>
              </div>
            </div>
          )}

          <div className="reviews-section">
            <h3>Reviews ({book.reviews?.length || "0"})</h3>

            {book.reviews?.length === 0 ? (
              <div className="no-reviews">No reviews yet. Be the first to review!</div>
            ) : (
              <div className="reviews-list">
                {book.reviews?.map((review) => (
                  <div key={review.id} className="review-item">
                    <div className="review-header">
                      <div className="reviewer-info">
                        <div className="reviewer-name">{review.reviewer_name}</div>
                        <div className="review-date">{new Date(review.created_at).toLocaleDateString()}</div>
                      </div>
                      <div className="review-rating">
                        {'★'.repeat(review.rating)}
                        {'☆'.repeat(5 - review.rating)}
                      </div>
                    </div>
                    <div className="review-content">{review.comment}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetail
