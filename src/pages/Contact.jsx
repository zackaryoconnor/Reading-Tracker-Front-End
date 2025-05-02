import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitResult({
        success: true,
        message: 'Your message has been sent successfully! We will get back to you soon.'
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitResult(null)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p className="contact-intro">
          Have questions, suggestions, or want to collaborate? We'd love to hear from you!
          Fill out the form below or reach out through any of our contact channels.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>

          {submitResult && (
            <div className={`submit-result ${submitResult.success ? 'success' : 'error'}`}>
              {submitResult.message}
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this regarding?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Type your message here..."
                rows="5"
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="contact-info-container">
          <h2>Get in Touch</h2>

          <div className="contact-info">
            <div className="contact-method">
              <div className="method-icon">📧</div>
              <div className="method-details">
                <h3>Email</h3>
                <p>support@tbook.com</p>
                <p>business@tbook.com</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">📱</div>
              <div className="method-details">
                <h3>Phone</h3>
                <p>+1 (800) 123-4567</p>
                <p>Mon-Fri: 9:00 AM - 6:00 PM EST</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">📍</div>
              <div className="method-details">
                <h3>Address</h3>
                <p>123 Book Street</p>
                <p>Library District, Bookville</p>
                <p>NY 10001, USA</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">💬</div>
              <div className="method-details">
                <h3>Social Media</h3>
                <div className="social-links">
                  <a href="https://x.com/" className="social-link">Twitter</a>
                  <a href="https://www.facebook.com/" className="social-link">Facebook</a>
                  <a href="https://www.instagram.com/" className="social-link">Instagram</a>
                  <a href="https://www.instagram.com/" className="social-link">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
