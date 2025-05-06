import { useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { addReview, getBookById } from '../../services/dataService.js'
import styles from './Review.module.css'
import axios from 'axios'
const url = import.meta.env.VITE_API_URL


const Review = () => {
  const { bookId } = useParams()
  const navigate = useNavigate()
  const { state } = useLocation()

  const initialText = state?.initialComment || ''
  const reviewId = state?.reviewId

  const [book, setBook] = useState(null)
  const [reviewText, setReviewText] = useState(initialText)
  const [review, setReview] = useState(null)

  const reviewer_name = 'user'
  const rating = 5

  useEffect(() => {
    console.log('line 24')
    if (!bookId) return
    console.log('line 25')
    const fetchBook = async () => {
      try {
        const result = await getBookById(bookId)
        console.log(result)
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
        `${url}/api/reviews/`,
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
      console.log(reviewId)
      await axios.delete(`${url}/api/reviews/${reviewId}/`)
      navigate(`/bookShelf`)
    } catch (error) {
      console.error('Delete failed:', error)
    }

  }

  console.log('76')
  return (
    <div className={styles.bookDetailsContainer}>
      console
      <div className={styles.bookDetails}>
        <img
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
