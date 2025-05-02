import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { addReview, getBookById } from '../../services/dataService.js'
import styles from './Review.module.css'
import axios from 'axios'



const Review = () => {
    const { bookId } = useParams()
    const navigate = useNavigate()

    const [book, setBook] = useState(null)
    const [reviewText, setReviewText] = useState('')
    
    const reading_material = bookId
    const reviewer_name = 'user'
    const rating = 5
  
    useEffect(() => {
        if (!reading_material) return
        const fetchBook = async () => {
          try {
            const result = await getBookById(reading_material)
            setBook(result)
          } catch (error) {
            console.error(error)
          }
        }
        fetchBook()
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
