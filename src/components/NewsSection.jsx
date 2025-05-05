import { useEffect, useState } from 'react';
import './NewsSection.css';
// Import your actual news service
import { getLatestNews } from '../services/newsService';

const NewsSection = () => {
  const [visibleNews, setVisibleNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const newsData = await getLatestNews();
        // Make sure data is an array
        if (newsData && Array.isArray(newsData)) {
          setVisibleNews(newsData);
        } else {
          // If it's not an array, create an empty array
          setVisibleNews([]);
          console.warn('News data is not an array:', newsData);
        }
        setError(null);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Failed to load news. Please try again later.');
        setVisibleNews([]); // Set to empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="news-section">
      <div className="section-header">
        <h2>Latest News</h2>
        <a href="#" className="view-all">
          View All <span className="arrow">→</span>
        </a>
      </div>

      {loading ? (
        <div className="loading-news">Loading news...</div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : visibleNews.length === 0 ? (
        <div className="no-news-message">No news articles available at this time.</div>
      ) : (
        <div className="news-grid">
          {/* Make sure visibleNews is an array before mapping */}
          {Array.isArray(visibleNews) && visibleNews.map((newsItem) => (
            <div key={newsItem.id} className="news-card">
              {newsItem.image && (
                <div className="news-image">
                  <img src={newsItem.image} alt={newsItem.title} />
                </div>
              )}
              <div className="news-content">
                <h3>{newsItem.title}</h3>
                <p className="news-date">{newsItem.date}</p>
                <p className="news-excerpt">{newsItem.excerpt}</p>
                <a href={newsItem.url} className="read-more">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default NewsSection;
