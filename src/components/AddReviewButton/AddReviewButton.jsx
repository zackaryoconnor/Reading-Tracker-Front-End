import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './AddReviewButton.module.css'

export default function AddReviewButton({ bookId, onClose, ...props }) {
  const navigate = useNavigate()

  if (!bookId) {
    console.warn('AddReviewButton: bookId is required.')
    return null
  }

  const path = `/review/${ bookId }`

  const handleClick = (event) => {
    onClose?.()
    navigate(path)
    props.onClick?.(event)
  }
  
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
