import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import BookDetail from "./components/BookDetail";
import FeaturedBook from "./components/FeaturedBook";
import Header from "./components/Header";
import Loading from "./components/Loading";
import NewsSection from "./components/NewsSection"; // ! we somehow have to use this component (maybe?)
import Recommendations from "./components/Recommendations";
import Sidebar from "./components/Sidebar";
import Authors from "./pages/Authors";
import Blog from "./pages/Blog";
import Bookshelf from "./pages/Bookshelf";
import axios from "axios";

function App() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [featuredBook, setFeaturedBook] = useState(null);
  const [allBooks, setAllBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBook, setSelectedBook] = useState(null);
  const location = useLocation();

  // Fetch new books on initial page render
  useEffect(() => {
    const api_url = import.meta.env.VITE_API_URL || "http://localhost:8000";

    const fetchInitialData = async () => {
      axios
        .get(`${api_url}/api/reading-materials`)
        .then((response) => {
          const newBooks = response.data;
          if (newBooks && newBooks.length > 0) {
            setFeaturedBook(newBooks[0]);
            setAllBooks(newBooks);
            setBooks(newBooks);
          }
        })
        .catch((error) => {
          console.error("Error fetching initial book data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchInitialData();
  }, []);

  // Filter books when search query or genre changes
  useEffect(() => {
    if (allBooks.length === 0) return;

    const filteredBooks = allBooks.filter((book) => {
      // Apply genre filter if not "All"
      const matchesGenre =
        selectedGenre === "All" || book.categories?.includes(selectedGenre);

      // Apply search filter if search query exists
      const matchesSearch =
        searchQuery === "" ||
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (book.author &&
          book.author.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesGenre && matchesSearch;
    });

    setBooks(filteredBooks);
  }, [searchQuery, selectedGenre, allBooks]);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleViewBookDetails = (book) => {
    setSelectedBook(book);
  };

  const handleCloseBookDetails = () => {
    setSelectedBook(null);
  };

  const handleRandomFeaturedBook = () => {
    if (allBooks.length > 0) {
      // Check if allBooks array is not empty
      // Generate a random index
      const randomIndex = Math.floor(Math.random() * allBooks.length);
      // Get the random book from the array
      const randomBook = allBooks[randomIndex];
      // Lastly, set the featured book to that random picked book.
      setFeaturedBook(randomBook);
    }
  };

  // Discover page component
  const DiscoverPage = () => (
    <>
      <div className="primary-content">
        {featuredBook && (
          <FeaturedBook
            book={featuredBook}
            onViewDetails={() => handleViewBookDetails(featuredBook)}
            onPickRandomBook={handleRandomFeaturedBook}
          />
        )}
        <Recommendations
          books={books}
          genre={selectedGenre}
          searchQuery={searchQuery}
          onViewDetails={handleViewBookDetails}
        />
      </div>
    </>
  );

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header
          onGenreChange={handleGenreChange}
          onSearch={handleSearch}
          currentPath={location.pathname}
        />
        <div className="content-container">
          {loading ? (
            <div className="loading-container">
              <Loading size="large" text="Loading content..." />
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<DiscoverPage />} />
              <Route
                path="/bookshelf"
                element={<Bookshelf onViewDetails={handleViewBookDetails} />}
              />
              <Route
                path="/authors"
                element={<Authors onViewDetails={handleViewBookDetails} />}
              />
              <Route path="/blog" element={<Blog />} />
              <Route
                path="*"
                element={
                  <div className="page-not-found">
                    <h2>Page Not Found</h2>
                    <p>
                      The page you're looking for doesn't exist or is still
                      under development.
                    </p>
                  </div>
                }
              />
            </Routes>
          )}
        </div>
      </div>

      {/* Book detail modal */}
      {selectedBook && (
        <BookDetail book={selectedBook} onClose={handleCloseBookDetails} />
      )}
    </div>
  );
}

export default App;
