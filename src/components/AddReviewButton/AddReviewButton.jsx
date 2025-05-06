import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './AddReviewButton.module.css'

export default function AddReviewButton({ bookId, onClose, ...props }) {
  const navigate = useNavigate()

  if (!bookId) {
    console.warn('AddReviewButton: bookId is required.')
    return null
  }

  const path = `/reviews/${ bookId }`

  const handleClick = (event) => {
    onClose?.()
    navigate(path)
    props.onClick?.(event)
  }
  
  return (
    <button
    className={ styles.addReviewButton }  
    type="button"
    onClick={handleClick}
    {...props}
      
      
    >
      Add a review +
    </button>
  )
}
