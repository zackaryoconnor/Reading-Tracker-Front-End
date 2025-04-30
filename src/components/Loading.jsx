import './Loading.css'

const Loading = ({ size = 'medium', text = 'Loading...' }) => {
  return (
    <div className={`loading-container loading-${size}`}>
      <div className="loading-spinner"></div>
      {text && <div className="loading-text">{text}</div>}
    </div>
  )
}

export default Loading
