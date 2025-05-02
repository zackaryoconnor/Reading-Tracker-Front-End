import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function AddReviewButton({ bookId, ...props }) {
  const navigate = useNavigate()

  if (!bookId) {
    console.warn('AddReviewButton: bookId is required.')
    return null
  }

  const path = `/review/${bookId}`
  
  return (
    <button
      type="button"
      onClick={() => navigate(path)}
      {...props}
    >
      Add a review +
    </button>
  )
}
