"use client"

import { BookOpen } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import BookCard from "../components/BookCard"
import "./GenrePage.css"

const GenrePage = () => {
  const { genre } = useParams()
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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
      {
        id: "5",
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        coverUrl: "/whispering-woods-cover.png",
        rating: 4.6,
        genres: ["Fiction", "Mystery"],
      },
      {
        id: "6",
        title: "Fourth Wing",
        author: "Rebecca Yarros",
        coverUrl: "/emerald-scales-cover.png",
        rating: 4.6,
        genres: ["Fantasy", "Romance"],
      },
      {
        id: "7",
        title: "Iron Flame",
        author: "Rebecca Yarros",
        coverUrl: "/whispering-woods-return.png",
        rating: 4.5,
        genres: ["Fantasy", "Romance"],
      },
      {
        id: "8",
        title: "The Heaven & Earth Grocery Store",
        author: "James McBride",
        coverUrl: "/gilded-age-ballroom.png",
        rating: 4.7,
        genres: ["Historical Fiction"],
      },
    ]

    const filteredBooks = allBooks.filter((book) => book.genres.some((g) => g.toLowerCase() === genre.toLowerCase()))

    setBooks(filteredBooks)
    setLoading(false)
  }, [genre])

  const formattedGenre = genre.charAt(0).toUpperCase() + genre.slice(1)

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="genre-page">
      <div className="genre-page-container">
        <div className="genre-page-header">
          <BookOpen className="genre-page-icon" />
          <h1 className="genre-page-title">{formattedGenre} Books</h1>
        </div>

        {books.length > 0 ? (
          <div className="genre-page-books">
            {books.map((book) => (
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
          <div className="genre-page-empty">
            <BookOpen className="genre-page-empty-icon" />
            <h2 className="genre-page-empty-title">No books found</h2>
            <p className="genre-page-empty-text">We couldn't find any books in the {formattedGenre} genre.</p>
            <Link to="/" className="genre-page-empty-button">
              Browse All Books
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default GenrePage
