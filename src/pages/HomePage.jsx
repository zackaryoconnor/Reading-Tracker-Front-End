import { Link } from "react-router-dom"
import BookCard from "../components/BookCard"
import FeaturedBook from "../components/FeaturedBook"
import Header from "../components/Header"
import NewsSection from "../components/NewsSection"
import Sidebar from "../components/Sidebar"

const HomePage = () => {
  const recommendedBooks = [
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
  ]

  const trendingBooks = [
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
    {
      id: "9",
      title: "Atomic Habits",
      author: "James Clear",
      coverUrl: "/blossoming-potential.png",
      rating: 4.8,
      genres: ["Self-Help", "Psychology"],
    },
    {
      id: "10",
      title: "The Housemaid",
      author: "Freida McFadden",
      coverUrl: "/shadowy-alley.png",
      rating: 4.3,
      genres: ["Thriller", "Mystery"],
    },
    {
      id: "11",
      title: "The Covenant of Water",
      author: "Abraham Verghese",
      coverUrl: "/whispering-woods.png",
      rating: 4.6,
      genres: ["Literary Fiction", "Historical"],
    },
  ]

  return (
    <div className="flex min-h-screen bg-[#121212]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <Header />

        {/* Featured Book */}
        <FeaturedBook />

        {/* Recommended Books */}
        <section className="py-8 px-4 md:px-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Recommended For You</h2>
            <Link to="/recommended" className="flex items-center text-amber-400 hover:underline">
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 ml-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {recommendedBooks.map((book) => (
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
        </section>

        {/* Trending Books */}
        <section className="py-8 px-4 md:px-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Trending Books</h2>
            <Link to="/trending" className="flex items-center text-amber-400 hover:underline">
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 ml-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {trendingBooks.map((book) => (
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
        </section>
      </main>

      {/* News Section */}
      <NewsSection />
    </div>
  )
}

export default HomePage
