// Mock data for the book platform
export const featuredBooks = [
  {
    id: "1",
    title: "The Silent Echo",
    author: "Eleanor Blackwood",
    authorId: "1",
    rating: 9.2,
    genres: ["Mystery", "Thriller", "Drama"],
    description:
      "It's the story of a small town detective who uncovers a series of mysterious disappearances linked to an ancient local legend. As she delves deeper into the case, she discovers that the town's history is far more sinister than she could have imagined, and that the truth might be connected to her own past.",
    fullDescription:
      "It's the story of a small town detective who uncovers a series of mysterious disappearances linked to an ancient local legend. As she delves deeper into the case, she discovers that the town's history is far more sinister than she could have imagined, and that the truth might be connected to her own past. The Silent Echo explores themes of memory, identity, and the secrets we keep from ourselves. Eleanor Blackwood masterfully weaves a tale of suspense that will keep readers on the edge of their seats until the shocking conclusion.",
    cover: "/shadowed-alley-mystery.png",
    coverLarge: "/shadowed-alley-mystery.png",
    publishYear: 2023,
    publisher: "Midnight Press",
    pageCount: 384,
    ratingCount: 1245,
    reviews: [
      {
        userName: "BookLover42",
        userAvatar: "/abstract-user-icon.png",
        rating: 5,
        date: "April 15, 2023",
        content:
          "Absolutely riveting! I couldn't put it down. The way Blackwood weaves the town's history with the protagonist's personal journey is masterful.",
      },
      {
        userName: "MysteryFan",
        userAvatar: "/images/avatar-2.png",
        rating: 4,
        date: "March 28, 2023",
        content:
          "A solid mystery with unexpected twists. The atmosphere is perfectly eerie and the characters feel authentic. My only criticism is that the middle section drags a bit.",
      },
    ],
    authorImage: "/thoughtful-author.png",
    authorBio:
      "Eleanor Blackwood is an award-winning author known for her atmospheric mysteries and psychological thrillers. She lives in a small coastal town that often inspires the settings of her novels.",
    otherBooks: [
      { id: "1a", title: "Whispers in the Dark", cover: "/shadowed-alley.png" },
      { id: "1b", title: "The Forgotten Room", cover: "/shadowed-alley-mystery.png" },
    ],
  },
  {
    id: "2",
    title: "Chronicles of the Forgotten Kingdom",
    author: "Marcus Winters",
    authorId: "2",
    rating: 9.5,
    genres: ["Fantasy", "Adventure", "Epic"],
    description:
      "An epic tale of magic, politics, and destiny in a world where ancient powers are awakening. Follow the journey of a reluctant hero who discovers their connection to a forgotten royal lineage and must unite warring factions against a common enemy threatening to plunge the realm into darkness.",
    fullDescription:
      "An epic tale of magic, politics, and destiny in a world where ancient powers are awakening. Follow the journey of a reluctant hero who discovers their connection to a forgotten royal lineage and must unite warring factions against a common enemy threatening to plunge the realm into darkness. With richly developed characters and a meticulously crafted world, Chronicles of the Forgotten Kingdom explores themes of power, responsibility, and the weight of history on the present.",
    cover: "/whispering-woods.png",
    coverLarge: "/whispering-woods.png",
    publishYear: 2022,
    publisher: "Dragon Quill Publishing",
    pageCount: 612,
    ratingCount: 2089,
    reviews: [
      {
        userName: "FantasyReader",
        userAvatar: "/images/avatar-3.png",
        rating: 5,
        date: "December 10, 2022",
        content:
          "One of the best fantasy novels I've read in years! The world-building is incredible and the magic system is both unique and internally consistent.",
      },
    ],
    authorImage: "/thoughtful-writer.png",
    authorBio:
      "Marcus Winters began his career as a game designer before turning to fiction. His fantasy worlds are known for their complex political systems and innovative magic concepts.",
    otherBooks: [
      { id: "2a", title: "The Mage's Apprentice", cover: "/whispering-woods.png" },
      { id: "2b", title: "Realm of Shadows", cover: "/shadow-realm-tome.png" },
    ],
  },
]

export const recommendedBooks = [
  {
    id: "3",
    title: "The Quantum Deception",
    author: "Dr. Sophia Chen",
    rating: 8.1,
    genres: ["Science Fiction", "Thriller"],
    cover: "/nebula-explorer.png",
    isFavorite: true,
  },
  {
    id: "4",
    title: "Whispers of the Heart",
    author: "James Patterson",
    rating: 7.9,
    genres: ["Romance", "Drama"],
    cover: "/twilight-embrace.png",
    isFavorite: false,
  },
  {
    id: "5",
    title: "The Last Detective",
    author: "Raymond Chandler",
    rating: 8.4,
    genres: ["Mystery", "Crime"],
    cover: "/shadowy-alley-mystery.png",
    isFavorite: false,
  },
  {
    id: "6",
    title: "Echoes of Eternity",
    author: "Amara Wilson",
    rating: 9.0,
    genres: ["Fantasy", "Adventure"],
    cover: "/enchanted-forest-quest.png",
    isFavorite: true,
  },
]

export const trendingBooks = [
  {
    id: "7",
    title: "The Midnight Library",
    author: "Matt Haig",
    rating: 8.7,
    genres: ["Fiction", "Fantasy"],
    cover: "/whispering-stacks.png",
    isFavorite: false,
  },
  {
    id: "8",
    title: "Atomic Habits",
    author: "James Clear",
    rating: 9.3,
    genres: ["Self-Help", "Psychology"],
    cover: "/self-help-book-cover.png",
    isFavorite: true,
  },
  {
    id: "9",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    rating: 8.2,
    genres: ["Thriller", "Mystery"],
    cover: "/thriller-book-cover.png",
    isFavorite: false,
  },
  {
    id: "10",
    title: "Dune",
    author: "Frank Herbert",
    rating: 9.1,
    genres: ["Science Fiction", "Classic"],
    cover: "/dune-book-cover.png",
    isFavorite: true,
  },
  {
    id: "11",
    title: "The Vanishing Half",
    author: "Brit Bennett",
    rating: 8.5,
    genres: ["Fiction", "Historical"],
    cover: "/historical-fiction-book-cover.png",
    isFavorite: false,
  },
]

export const bookNews = [
  {
    title: '"The Silent Echo" Renewed for Film Adaptation',
    content:
      "Eleanor Blackwood's bestselling thriller has been picked up by a major studio for a film adaptation, with casting to begin next month.",
    date: "April 25, 2023",
    image: "/book-to-film.png",
  },
  {
    title: "Marcus Winters Announces New Series",
    content:
      'Fantasy author Marcus Winters has revealed plans for a new trilogy set in the same universe as his popular "Chronicles" series.',
    date: "April 20, 2023",
    image: "/placeholder.svg?height=200&width=300&query=fantasy book announcement",
  },
  {
    title: "Annual Book Festival Returns This September",
    content:
      "The International Book Festival will return with in-person events featuring over 100 authors, including several BookHaven favorites.",
    date: "April 15, 2023",
    image: "/placeholder.svg?height=200&width=300&query=book festival",
  },
]

// Helper functions to simulate API calls
export function getBookById(id) {
  return [...featuredBooks, ...recommendedBooks, ...trendingBooks].find((book) => book.id === id)
}

export function getSimilarBooks(genre) {
  return [...recommendedBooks, ...trendingBooks].filter((book) => book.genres.includes(genre)).slice(0, 4)
}

export function getBooksByGenre(genre) {
  const formattedGenre = genre.charAt(0).toUpperCase() + genre.slice(1)
  return [...featuredBooks, ...recommendedBooks, ...trendingBooks]
    .filter((book) => book.genres.some((g) => g.toLowerCase() === genre.toLowerCase()))
    .map((book) => ({
      ...book,
      isNew: Math.random() > 0.7,
      isBestseller: Math.random() > 0.6,
      publishDate: `2023-${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 28) + 1}`,
    }))
}

export function getAuthorById(id) {
  const authors = [
    {
      id: "1",
      name: "Eleanor Blackwood",
      image: "/placeholder.svg?height=300&width=300&query=female author portrait",
      bookCount: 12,
      followers: "45.2K",
      twitter: "https://twitter.com/eleanorblackwood",
      instagram: "https://instagram.com/eleanorblackwood",
      website: "https://eleanorblackwood.com",
      fullBio:
        'Eleanor Blackwood is an award-winning author known for her atmospheric mysteries and psychological thrillers. Born in a small coastal town, she draws inspiration from its foggy landscapes and close-knit community dynamics. Before becoming a full-time writer, Blackwood worked as a criminal psychologist, an experience that informs the depth and authenticity of her characters. Her debut novel, "Whispers in the Dark," won the National Mystery Award and established her as a powerful new voice in the genre. When not writing, Blackwood enjoys hiking, photography, and collecting vintage mystery novels.',
      interviews: [
        {
          title: "The Craft of Suspense: Interview with Eleanor Blackwood",
          description:
            "An in-depth conversation about building tension and creating memorable characters in mystery fiction.",
          image: "/placeholder.svg?height=200&width=300&query=author interview",
          url: "#",
          source: "Literary Review",
        },
        {
          title: "From Psychology to Fiction: Eleanor Blackwood's Journey",
          description: "How her background in criminal psychology shapes her approach to writing thrillers.",
          image: "/placeholder.svg?height=200&width=300&query=author podcast",
          url: "#",
          source: "Writer's Podcast",
        },
      ],
    },
    {
      id: "2",
      name: "Marcus Winters",
      image: "/thoughtful-writer.png",
      bookCount: 8,
      followers: "62.8K",
      twitter: "https://twitter.com/marcuswinters",
      instagram: "https://instagram.com/marcuswinters",
      website: "https://marcuswinters.com",
      fullBio:
        'Marcus Winters began his career as a game designer before turning to fiction writing. His fantasy worlds are known for their complex political systems and innovative magic concepts. The "Chronicles of the Forgotten Kingdom" series has been translated into 24 languages and has sold over 5 million copies worldwide. Winters is known for his meticulous research and world-building, often spending years developing the history, languages, and cultures of his fictional realms before writing the first word of a new series. He lives in a converted lighthouse with his family and two Irish wolfhounds.',
      interviews: [
        {
          title: "Building Worlds: The Marcus Winters Method",
          description: "A masterclass in fantasy world-building from one of the genre's most detailed creators.",
          image: "/placeholder.svg?height=200&width=300&query=fantasy author interview",
          url: "#",
          source: "Fantasy Quarterly",
        },
        {
          title: "From Pixels to Pages: A Game Designer's Approach to Fiction",
          description: "How his background in game design influences his storytelling techniques.",
          image: "/placeholder.svg?height=200&width=300&query=author convention panel",
          url: "#",
          source: "CreatorCon 2022",
        },
      ],
    },
  ]

  return authors.find((author) => author.id === id)
}

export function getBooksByAuthor(authorId) {
  return [...featuredBooks, ...recommendedBooks, ...trendingBooks].filter((book) => book.authorId === authorId)
}

export function searchBooks(query) {
  if (!query) return []

  const lowercaseQuery = query.toLowerCase()
  return [...featuredBooks, ...recommendedBooks, ...trendingBooks].filter(
    (book) =>
      book.title.toLowerCase().includes(lowercaseQuery) ||
      book.author.toLowerCase().includes(lowercaseQuery) ||
      book.genres.some((genre) => genre.toLowerCase().includes(lowercaseQuery)),
  )
}

export function searchAuthors(query) {
  if (!query) return []

  const lowercaseQuery = query.toLowerCase()
  const authors = [
    {
      id: "1",
      name: "Eleanor Blackwood",
      image: "/placeholder.svg?height=150&width=150&query=female author portrait",
      bookCount: 12,
    },
    {
      id: "2",
      name: "Marcus Winters",
      image: "/thoughtful-writer.png",
      bookCount: 8,
    },
    {
      id: "3",
      name: "Dr. Sophia Chen",
      image: "/placeholder.svg?height=150&width=150&query=female scientist author portrait",
      bookCount: 5,
    },
    {
      id: "4",
      name: "James Patterson",
      image: "/placeholder.svg?height=150&width=150&query=male thriller author portrait",
      bookCount: 22,
    },
  ]

  return authors.filter((author) => author.name.toLowerCase().includes(lowercaseQuery))
}
