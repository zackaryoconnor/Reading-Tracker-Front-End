import { useState } from "react";
import { updateReadingStatus } from "../services/dataService";
import "./FeaturedBook.css";

const FeaturedBook = ({ book, onViewDetails, onPickRandomBook = () => {} }) => {
  const [isReading, setIsReading] = useState(false);

  const handleReadNow = async () => {
    try {
      await updateReadingStatus(book.id, "reading", 0);
      setIsReading(true);

      // In a real app, you might want to update the global state or refetch data
      setTimeout(() => {
        setIsReading(false);
      }, 2000);
    } catch (error) {
      console.error("Error updating reading status:", error);
    }
  };

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(book.id);
    }
  };

  return (
    <div className="featured-book">
      <div
        className="featured-backdrop"
        style={{
          backgroundImage: `url(${
            book.coverImage || "/images/book-cover-placeholder.png"
          })`,
        }}
      ></div>

      {/* Heading title */}
      <h2
        style={{
          opacity: 0.25,
          width: "max-content",
          textDecoration: "underline",
          textUnderlineOffset: "10px",
        }}
      >
        Discover Something New
      </h2>

      <div className="featured-content">
        <h1 className="featured-title">{book.title}</h1>

        <div className="featured-meta">
          <div className="featured-rating">
            <span className="rating-badge">{book.rating}</span>
          </div>

          <div className="featured-genres">
            {(book.categories || ["Unknown_Genre"]).map((genre, index) => (
              <span key={index} className="genre-tag">
                {genre}
                {index < (book.categories || ["Unknown_Genre"]).length - 1 &&
                  " • "}
              </span>
            ))}
          </div>
        </div>

        <p className="featured-description">{book.description}</p>

        <div className="featured-actions">
          <button className="btn-secondary" onClick={handleViewDetails}>
            View Details
          </button>
          <button onClick={onPickRandomBook} className="random-btn btn-primary">
            Pick a Story for Me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBook;
