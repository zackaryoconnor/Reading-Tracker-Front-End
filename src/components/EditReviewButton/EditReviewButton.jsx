import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './EditReviewButton.module.css'



export default function EditReviewButton({ bookId, reviewId, content, onClose, ...props }) {
  const navigate = useNavigate()

  if (!bookId) {
    console.warn('EditReviewButton: bookId is required.')
    return null
  }

  const path = `/reviews/${ bookId }`

  const handleClick = (event) => {
    onClose?.()
    navigate(path, { state: { initialComment: content, reviewId } })
    props.onClick?.(event)
  }
  
  return (
    <button
    className={ styles.editReviewButton }
    type="button"
    onClick={ handleClick }
    {...props}
      
    >
      Edit review
    </button>
  )
}
