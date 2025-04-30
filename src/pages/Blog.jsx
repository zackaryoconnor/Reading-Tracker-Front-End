import { useState, useEffect } from 'react'
import { getNewsItems } from '../services/dataService'
import Loading from '../components/Loading'
import './Blog.css'

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true)
      try {
        // Use the news data as our blog posts for this example
        const news = await getNewsItems()

        // Transform news items into blog posts with added fields
        const posts = news.map(item => ({
          ...item,
          category: getRandomCategory(), // In a real app, categories would come from the API
          readTime: Math.floor(Math.random() * 10) + 3 // Random read time between 3-12 minutes
        }))

        setBlogPosts(posts)
      } catch (error) {
        console.error('Error fetching blog posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

  // Helper function to get a random category for demo purposes
  const getRandomCategory = () => {
    const categories = ['Book Reviews', 'Author Interviews', 'Literary News', 'Reading Tips']
    return categories[Math.floor(Math.random() * categories.length)]
  }

  const handlePostClick = (post) => {
    setSelectedPost(post)
    window.scrollTo(0, 0)
  }

  const handleBackClick = () => {
    setSelectedPost(null)
  }

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
  }

  // Filter posts by category
  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category.toLowerCase() === activeCategory.toLowerCase())

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  // Render the blog post detail view
  const renderPostDetail = () => {
    if (!selectedPost) return null

    return (
      <div className="blog-post-detail">
        <button className="back-to-blog" onClick={handleBackClick}>
          ← Back to Blog
        </button>

        <h1 className="post-title">{selectedPost.title}</h1>

        <div className="post-meta">
          <div className="post-author">{selectedPost.author}</div>
          <div className="post-date">{formatDate(selectedPost.date)}</div>
          <div className="post-category">{selectedPost.category}</div>
          <div className="post-read-time">{selectedPost.readTime} min read</div>
        </div>

        <div className="post-featured-image">
          <img src={selectedPost.image.replace('150x100', '800x400')} alt="Featured" />
        </div>

        <div className="post-content">
          <p>{selectedPost.content}</p>

          {/* Additional paragraphs for a realistic blog post */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget diam vitae nunc efficitur lacinia. Nullam feugiat, nisi at vulputate efficitur, sem eros convallis enim, vel pharetra massa neque vel magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus venenatis nisl dui, vel efficitur libero tristique id.</p>

          <p>Suspendisse potenti. Curabitur ultricies libero sed est molestie, in convallis ligula malesuada. Nulla facilisi. Duis bibendum odio vel facilisis euismod. Maecenas ac nisi tortor. Cras tincidunt, sem sit amet molestie consectetur, turpis nisi molestie nisi, et sodales metus neque vitae metus.</p>

          <h2>The Impact on Literary World</h2>

          <p>Etiam accumsan, massa sit amet tempus pretium, ante eros auctor felis, eu vehicula ex mauris non est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam id ultrices odio, ac maximus dui. Integer tincidunt, est id fermentum eleifend, dui augue vestibulum est, in congue dui est id nisi.</p>

          <p>Sed semper, quam vitae congue efficitur, velit felis dapibus lorem, id rutrum nulla arcu sed metus. Sed hendrerit orci non dolor semper, ac efficitur metus vestibulum. Praesent condimentum massa a turpis auctor, in euismod urna vulputate.</p>

          <blockquote>
            "Reading is the sole means by which we slip, involuntarily, often helplessly, into another's skin, another's voice, another's soul."
            <cite>— Joyce Carol Oates</cite>
          </blockquote>

          <p>Fusce suscipit eros vitae arcu consequat, vel imperdiet ligula iaculis. Donec id risus sem. Praesent quis sapien ac nibh condimentum porttitor ut eu augue. Cras feugiat, elit in tristique dictum, purus eros commodo lectus, quis varius arcu diam et magna.</p>
        </div>

        <div className="post-tags">
          <div className="tags-title">Tags:</div>
          <div className="tag">Books</div>
          <div className="tag">Literature</div>
          <div className="tag">{selectedPost.category}</div>
          <div className="tag">Reading</div>
        </div>
      </div>
    )
  }

  // Render the blog posts list
  const renderBlogList = () => {
    return (
      <div className="blog-list">
        <div className="blog-header">
          <h1>Literary Blog</h1>

          <div className="blog-categories">
            <button
              className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('all')}
            >
              All Posts
            </button>
            <button
              className={`category-btn ${activeCategory === 'Book Reviews' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('Book Reviews')}
            >
              Book Reviews
            </button>
            <button
              className={`category-btn ${activeCategory === 'Author Interviews' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('Author Interviews')}
            >
              Author Interviews
            </button>
            <button
              className={`category-btn ${activeCategory === 'Literary News' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('Literary News')}
            >
              Literary News
            </button>
            <button
              className={`category-btn ${activeCategory === 'Reading Tips' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('Reading Tips')}
            >
              Reading Tips
            </button>
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="no-posts">
            No posts found in this category.
          </div>
        ) : (
          <div className="blog-posts-grid">
            {filteredPosts.map(post => (
              <div key={post.id} className="blog-post-card" onClick={() => handlePostClick(post)}>
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                  <div className="post-category-badge">{post.category}</div>
                </div>

                <div className="post-card-content">
                  <h2 className="post-card-title">{post.title}</h2>

                  <div className="post-card-meta">
                    <span className="post-card-date">{formatDate(post.date)}</span>
                    <span className="post-card-read-time">{post.readTime} min read</span>
                  </div>

                  <p className="post-card-excerpt">
                    {post.content.length > 120
                      ? `${post.content.substring(0, 120)}...`
                      : post.content}
                  </p>

                  <div className="read-more-link">Read More →</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="blog-page">
      {loading ? (
        <div className="blog-loading">
          <Loading size="large" text="Loading blog posts..." />
        </div>
      ) : selectedPost ? (
        renderPostDetail()
      ) : (
        renderBlogList()
      )}
    </div>
  )
}

export default Blog
