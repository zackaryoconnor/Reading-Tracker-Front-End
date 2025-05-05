import { useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { addReview, getBookById } from '../../services/dataService.js'
import styles from './Review.module.css'
import axios from 'axios'

const Review = () => {
  const { bookId } = useParams()
  const navigate = useNavigate()
  const { state } = useLocation()

  const initialText = state?.initialComment || ''
  const reviewId = state?.reviewId

  const [book, setBook] = useState(null)
  const [reviewText, setReviewText] = useState(initialText)

  // HARD CODED DATA
  const reviewer_name = 'user'
  const rating = 5

  useEffect(() => {
    if (!bookId) return
    const fetchBook = async () => {
      try {
        const result = await getBookById(bookId)
        setBook(result)
      } catch (error) {
        console.error('Add Review', error)
      }
    }
    fetchBook()
  }, [bookId])

  if (!book) return <p>Loading book...</p>

  const handleSubmit = async () => {
    if (reviewText.trim() === '') return

    const newReview = {
      reading_material: Number(bookId),
      reviewer_name: reviewer_name,
      rating: rating,
      comment: reviewText,
    }

    console.log('Add Review Submitting review:', newReview)

    try {
      const response = await axios.post(
        'http://100.24.54.166:8000/api/reviews/',
        newReview
      )
      console.log('Review submitted successfully:', response.data)
      setReviewText('')
    } catch (error) {
      console.error('Add Review Status:', error.response.status)
      console.error('Add Review newReview sent:', newReview)
      console.error('Add Review Validation errors:', error.response.data)
    }
  }

  const handleDelete = async () => {
    const reviewId = state?.reviewId
    
    try {
      await axios.delete(
        `http://100.24.54.166:8000/api/reviews/${reviewId}/`
      )
      navigate(`/books/${bookId}`)
    } catch (error) {
      console.error('Delete failed:', error.response?.data || error.message)
      alert('Could not delete review.')
    }
  }

  return (
    <div className={styles.bookDetailsContainer}>
      <div className={styles.bookDetails}>
        <img
          // src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597695864i/54493401.jpg"
          src={book.coverImage}
          alt={book.title}
        />

        <div className={styles.bookInfo}>
          <h1>{book.title}</h1>
          <h2>By: {book.authorName}</h2>
          <p>
            <strong>Rating:</strong> {book.rating}
          </p>
          <p>
            <strong>Publication Date:</strong> {book.publicationDate}
          </p>
          <p>
            <strong>Genre:</strong> {book.categories.join(',')}
          </p>
          <p>
            <strong>Description:</strong> {book.description}
          </p>
        </div>
      </div>

      <div className={styles.userReview}>
        <label htmlFor="review">Your thoughts about the book:</label>
        <textarea
          id="review"
          placeholder="Write your review..."
          rows={8}
          value={reviewText}
          onChange={(event) => setReviewText(event.target.value)}
        />
        <button
          className={styles.submitButton}
          onClick={() => {
            handleSubmit()
            console.log('Add Review', reviewText)
          }}>
          Submit Review
        </button>
        <button
          className={styles.deleteButton}
          onClick={() => {
            handleDelete()
            console.log('Deleted Review', reviewText)
          }}>
          Delete Review
        </button>
      </div>
    </div>
  )
}

export default Review
