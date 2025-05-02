import BookCard from "./BookCard";
import "./Recommendations.css";

const Recommendations = ({
  books = [],
  loading = false,
  genre,
  searchQuery,
  onViewDetails,
}) => {

  const handleViewDetails = (book) => {
    if (onViewDetails) {
      onViewDetails(book);
    }
  };

  return (
    <div className="recommendations">
      <div className="section-header">
        {/* Heading title */}
        <h2
          style={{
            opacity: 0.25,
            width: "max-content",
            textDecoration: "underline",
            textUnderlineOffset: "10px",
          }}
        >
          {searchQuery
            ? `Search Results for "${searchQuery}"`
            : genre !== "All"
            ? `${genre} Books`
            : "Recommended For You"}
        </h2>

        <a href="/bookshelf" className="view-all">
          View All <span className="arrow">→</span>
        </a>
      </div>

      {loading ? (
        <div className="loading-books">Loading books...</div>
      ) : books.length === 0 ? (
        <div className="no-books-message">
          {searchQuery
            ? `No books found matching "${searchQuery}"`
            : `No books found in the ${genre} category`}
        </div>
      ) : (
        <div className="books-grid">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onViewDetails={() => handleViewDetails(book)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Recommendations;
