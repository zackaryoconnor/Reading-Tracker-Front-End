import { useEffect, useState } from 'react'
import { addReview, getBookById } from '../../services/dataService.js'
import styles from './Review.module.css'
import axios from 'axios'

const reading_material = 2
const reviewer_name = 'Zack'
const rating = 5

const Review = () => {
  const [book, setBook] = useState(null)
  const [reviewText, setReviewText] = useState('')

  
  useEffect(() => {
    const fetchBook = async (id) => {
      try {
        const result = await getBookById(id)
        setBook(result)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchBook(reading_material)
  }, [reading_material])


  if (!book) return <p>Loading book...</p>


  const handleSubmit = async () => {
    if (reviewText.trim() === '') return

    const newReview = {
      reading_material: Number(reading_material),
      reviewer_name: reviewer_name,
      rating: rating,
      comment: reviewText,
    }

    console.log('Submitting review:', newReview)

    try {
      const response = await axios.post('http://100.24.54.166:8000/api/reviews/', newReview)
      console.log('Review submitted successfully:', response.data)
      setReviewText('')
    } catch (error) {
        console.error('Status:', error.response.status)
        console.error('newReview sent:', newReview)
        console.error('Validation errors:', error.response.data)
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
          <p><strong>Rating:</strong> {book.rating}</p>
          <p><strong>Publication Date:</strong> {book.publicationDate}</p>
          <p><strong>Genre:</strong> {book.categories.join(',')}</p>
          <p><strong>Description:</strong> {book.description}</p>
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
            console.log(reviewText)
          }}>
          Submit Review
        </button>
      </div>
      
    </div>
  )
}

export default Review
