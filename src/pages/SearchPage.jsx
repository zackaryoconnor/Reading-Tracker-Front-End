"use client"

import { BookOpen, Search, X } from "lucide-react"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import BookCard from "../components/BookCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/Tabs"
import "./SearchPage.css"

const SearchPage = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const initialQuery = queryParams.get("q") || ""

  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [searchResults, setSearchResults] = useState({ books: [], authors: [] })

  useEffect(() => {
    if (searchQuery) {

      const allBooks = [
        {
          id: "1",
          title: "The Midnight Library",
          author: "Matt Haig",
          coverUrl: "/nocturnal-library.png",
          rating: 4.7,
          genres: ["Fiction", "Fantasy"],
        },
        {
          id: "2",
          title: "Educated",
          author: "Tara Westover",
          coverUrl: "/open-book-path.png",
          rating: 4.8,
          genres: ["Memoir", "Biography"],
        },
        {
          id: "3",
          title: "The Silent Patient",
          author: "Alex Michaelides",
          coverUrl: "/shadowy-alley.png",
          rating: 4.5,
          genres: ["Thriller", "Mystery"],
        },
        {
          id: "4",
          title: "Dune",
          author: "Frank Herbert",
          coverUrl: "/crimson-sands-awakening.png",
          rating: 4.9,
          genres: ["Science Fiction", "Fantasy"],
        },
      ]

      const authors = [
        {
          id: "1",
          name: "Matt Haig",
          books: 8,
          avatar: "/thoughtful-author.png",
        },
        {
          id: "2",
          name: "Tara Westover",
          books: 1,
          avatar: "/thoughtful-author.png",
        },
        {
          id: "3",
          name: "Alex Michaelides",
          books: 3,
          avatar: "/thoughtful-author.png",
        },
        {
          id: "4",
          name: "Frank Herbert",
          books: 12,
          avatar: "/thoughtful-author.png",
        },
      ]

      const filteredBooks = allBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase()),
      )

      const filteredAuthors = authors.filter((author) => author.name.toLowerCase().includes(searchQuery.toLowerCase()))

      setSearchResults({
        books: filteredBooks,
        authors: filteredAuthors,
      })
    } else {
      setSearchResults({ books: [], authors: [] })
    }
  }, [searchQuery])

  const handleSearch = (e) => {
    e.preventDefault()
    // Update URL with search query
    const newUrl = searchQuery
      ? `${window.location.pathname}?q=${encodeURIComponent(searchQuery)}`
      : window.location.pathname
    window.history.pushState({}, "", newUrl)
  }

  return (
    <div className="search-page">
      <div className="search-page-container">
        <div className="search-page-header">
          <form className="search-page-form" onSubmit={handleSearch}>
            <div className="search-page-input-container">
              <Search className="search-page-input-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for books, authors..."
                className="search-page-input"
              />
              {searchQuery && (
                <button type="button" onClick={() => setSearchQuery("")} className="search-page-clear-button">
                  <X className="search-page-clear-icon" />
                </button>
              )}
            </div>
          </form>

          {searchQuery ? (
            <p className="search-page-info">
              Showing results for <span className="search-page-query">"{searchQuery}"</span>
            </p>
          ) : (
            <p className="search-page-info">Enter a search term to find books and authors</p>
          )}
        </div>

        {searchQuery && (
          <Tabs defaultValue="books" className="search-page-tabs">
            <TabsList className="search-page-tabs-list">
              <TabsTrigger value="books">Books</TabsTrigger>
              <TabsTrigger value="authors">Authors</TabsTrigger>
            </TabsList>

            <TabsContent value="books" className="search-page-tab-content">
              {searchResults.books.length > 0 ? (
                <div className="search-page-books">
                  {searchResults.books.map((book) => (
                    <BookCard
                      key={book.id}
                      id={book.id}
                      title={book.title}
                      author={book.author}
                      coverUrl={book.coverUrl}
                      rating={book.rating}
                      genres={book.genres}
                    />
                  ))}
                </div>
              ) : (
                <div className="search-page-empty">
                  <BookOpen className="search-page-empty-icon" />
                  <h2 className="search-page-empty-title">No books found</h2>
                  <p className="search-page-empty-text">We couldn't find any books matching "{searchQuery}"</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="authors" className="search-page-tab-content">
              {searchResults.authors.length > 0 ? (
                <div className="search-page-authors">
                  {searchResults.authors.map((author) => (
                    <div key={author.id} className="search-page-author">
                      <div className="search-page-author-avatar">
                        <img
                          src={author.avatar || "/placeholder.svg"}
                          alt={author.name}
                          className="search-page-author-image"
                        />
                      </div>
                      <div className="search-page-author-info">
                        <h3 className="search-page-author-name">{author.name}</h3>
                        <p className="search-page-author-books">{author.books} books</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="search-page-empty">
                  <BookOpen className="search-page-empty-icon" />
                  <h2 className="search-page-empty-title">No authors found</h2>
                  <p className="search-page-empty-text">We couldn't find any authors matching "{searchQuery}"</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  )
}

export default SearchPage;
