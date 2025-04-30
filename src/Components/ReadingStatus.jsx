import { useState } from 'react'
import { updateReadingStatus } from '../services/dataService'
import './ReadingStatus.css'

const ReadingStatus = ({ bookId, initialStatus = null, initialProgress = 0, onUpdate = () => { } }) => {
  const [status, setStatus] = useState(initialStatus)
  const [progress, setProgress] = useState(initialProgress)
  const [isUpdating, setIsUpdating] = useState(false)
  const [showProgressSlider, setShowProgressSlider] = useState(false)

  const statusLabels = {
    'want-to-read': 'Want to Read',
    'reading': 'Currently Reading',
    'read': 'Read',
    null: 'Add to Bookshelf'
  }

  const handleStatusChange = async (newStatus) => {
    if (isUpdating) return

    setIsUpdating(true)
    try {
      const newProgress = newStatus === 'read' ? 1 : newStatus === 'reading' ? 0.1 : 0

      await updateReadingStatus(bookId, newStatus, newProgress)

      setStatus(newStatus)
      setProgress(newProgress)

      if (newStatus === 'reading') {
        setShowProgressSlider(true)
      } else {
        setShowProgressSlider(false)
      }

      onUpdate(newStatus, newProgress)
    } catch (error) {
      console.error('Error updating reading status:', error)
    } finally {
      setIsUpdating(false)
    }
  }

  const handleProgressChange = (e) => {
    setProgress(parseFloat(e.target.value))
  }

  const handleProgressUpdate = async () => {
    if (isUpdating) return

    setIsUpdating(true)
    try {
      await updateReadingStatus(bookId, status, progress)
      onUpdate(status, progress)

      if (progress >= 0.99) {
        // If progress is 100%, automatically set status to 'read'
        setStatus('read')
        setShowProgressSlider(false)
      }
    } catch (error) {
      console.error('Error updating reading progress:', error)
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <div className="reading-status">
      <div className="status-selector">
        <button
          className={`status-btn ${status === 'want-to-read' ? 'active' : ''}`}
          onClick={() => handleStatusChange('want-to-read')}
          disabled={isUpdating}
        >
          Want to Read
        </button>

        <button
          className={`status-btn ${status === 'reading' ? 'active' : ''}`}
          onClick={() => handleStatusChange('reading')}
          disabled={isUpdating}
        >
          Reading
        </button>

        <button
          className={`status-btn ${status === 'read' ? 'active' : ''}`}
          onClick={() => handleStatusChange('read')}
          disabled={isUpdating}
        >
          Read
        </button>
      </div>

      {showProgressSlider && (
        <div className="progress-container">
          <div className="progress-label">
            <span>Progress: {Math.round(progress * 100)}%</span>
          </div>

          <div className="progress-controls">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={progress}
              onChange={handleProgressChange}
              className="progress-slider"
              disabled={isUpdating}
            />

            <button
              className="update-btn"
              onClick={handleProgressUpdate}
              disabled={isUpdating}
            >
              {isUpdating ? 'Updating...' : 'Update'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReadingStatus
