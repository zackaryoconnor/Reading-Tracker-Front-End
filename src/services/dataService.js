// Dummy data for the application
// This will serve as our temporary data store until a backend is implemented

// Authors data
export const authors = [
  {
    id: 1,
    name: "Matt Haig",
    biography: "Matt Haig is a British author who writes both fiction and non-fiction for children and adults, often blending elements of fantasy and mental health topics.",
    photo: "/images/author1.png",
    popularBooks: [1, 5]
  },
  {
    id: 2,
    name: "Alex Michaelides",
    biography: "Alex Michaelides is a British-Cypriot author known for his psychological thrillers. He studied English literature at Cambridge University and screenwriting at the American Film Institute.",
    photo: "/images/author2.png",
    popularBooks: [2]
  },
  {
    id: 3,
    name: "Tara Westover",
    biography: "Tara Westover is an American author and memoirist known for her memoir Educated. She was born in rural Idaho and raised by parents who were opposed to public education.",
    photo: "/images/author3.png",
    popularBooks: [3]
  },
  {
    id: 4,
    name: "Delia Owens",
    biography: "Delia Owens is an American author and zoologist. She has co-authored several non-fiction books about her life as a wildlife scientist in Africa before writing her first novel.",
    photo: "/images/author4.png",
    popularBooks: [4]
  },
  {
    id: 5,
    name: "Andy Weir",
    biography: "Andy Weir is an American novelist whose debut novel, The Martian, was later adapted into a film of the same name. He worked as a computer programmer before becoming a full-time writer.",
    photo: "/images/author5.png",
    popularBooks: [6]
  }
];

// Books data
const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: 1, // Matt Haig
    authorName: "Matt Haig",
    coverImage: "/images/hero.png",
    rating: 9.3,
    publicationDate: "2020-08-13",
    pages: 304,
    categories: ["Fiction", "Fantasy", "Philosophy"],
    description: "It's the story of Nora Seed, who finds herself in a vast library between life and death. Every book represents a different version of her life she could have lived. As Nora explores the infinite possibilities of her choices, she must search within herself to decide what makes life worth living.",
    isFeatured: true,
    isFavorite: false,
    reviews: [1, 2, 3],
    readingStatus: null
  },
  {
    id: 2,
    title: "The Silent Patient",
    author: 2, // Alex Michaelides
    authorName: "Alex Michaelides",
    coverImage: "/images/third.png",
    rating: 8.1,
    publicationDate: "2019-02-05",
    pages: 336,
    categories: ["Crime", "Thriller", "Mystery"],
    description: "Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London's most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.",
    isFeatured: false,
    isFavorite: false,
    reviews: [4, 5],
    readingStatus: null
  },
  {
    id: 3,
    title: "Educated",
    author: 3, // Tara Westover
    authorName: "Tara Westover",
    coverImage: "/images/second.png",
    rating: 8.6,
    publicationDate: "2018-02-20",
    pages: 352,
    categories: ["Memoir", "Biography", "Education"],
    description: "Born to survivalists in the mountains of Idaho, Tara Westover was seventeen the first time she set foot in a classroom. Her family was so isolated from mainstream society that there was no one to ensure the children received an education, and no one to intervene when one of Tara's older brothers became violent.",
    isFeatured: false,
    isFavorite: true,
    reviews: [6, 7],
    readingStatus: null
  },
  {
    id: 4,
    title: "Where the Crawdads Sing",
    author: 4, // Delia Owens
    authorName: "Delia Owens",
    coverImage: "/images/fr.png",
    rating: 8.0,
    publicationDate: "2018-08-14",
    pages: 384,
    categories: ["Fiction", "Mystery", "Literary"],
    description: "For years, rumors of the 'Marsh Girl' have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say.",
    isFeatured: false,
    isFavorite: false,
    reviews: [8, 9],
    readingStatus: null
  },
  {
    id: 5,
    title: "The Humans",
    author: 1, // Matt Haig
    authorName: "Matt Haig",
    coverImage: "/images/book1.png",
    rating: 8.3,
    publicationDate: "2013-05-09",
    pages: 304,
    categories: ["Fiction", "Science Fiction", "Philosophy"],
    description: "When an extraterrestrial visitor arrives on Earth, his first impressions of the human species are less than positive. But as time goes on, he starts to realize there may be more to this weird species than he had thought.",
    isFeatured: false,
    isFavorite: false,
    reviews: [10],
    readingStatus: null
  },
  {
    id: 6,
    title: "Project Hail Mary",
    author: 5, // Andy Weir
    authorName: "Andy Weir",
    coverImage: "/images/book2.png",
    rating: 8.4,
    publicationDate: "2021-05-04",
    pages: 496,
    categories: ["Sci-Fi", "Adventure", "Space"],
    description: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the Earth itself will perish. Except that right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it.",
    isFeatured: false,
    isFavorite: false,
    reviews: [11, 12],
    readingStatus: null
  },
  {
    id: 7,
    title: "The Night Wanderer",
    author: 2, // Alex Michaelides
    authorName: "Alex Michaelides",
    coverImage: "/images/book3.png",
    rating: 8.2,
    publicationDate: "2023-09-12",
    pages: 352,
    categories: ["Mystery", "Thriller", "Suspense"],
    description: "A gripping mystery about a series of unexplained disappearances in a small coastal town, where locals begin to suspect a mysterious figure who only appears at night.",
    isFeatured: false,
    isFavorite: false,
    reviews: [13],
    readingStatus: null
  },
  {
    id: 8,
    title: "Chronicles of the Forgotten: The Fourth Kingdom",
    author: 4, // Delia Owens
    authorName: "Delia Owens",
    coverImage: "/images/book4.png",
    rating: 8.7,
    publicationDate: "2025-09-04",
    pages: 416,
    categories: ["Fantasy", "Adventure", "Epic"],
    description: "The fourth installment in the epic Chronicles of the Forgotten series follows our heroes as they discover a hidden kingdom thought to be lost to time, containing both wonders and dangers beyond imagination.",
    isFeatured: false,
    isFavorite: false,
    reviews: [],
    readingStatus: null
  }
];

// Reviews data
const reviews = [
  {
    id: 1,
    bookId: 1,
    userId: 1,
    userName: "Alex Johnson",
    rating: 5,
    date: "2021-03-15",
    content: "Absolutely loved this book! The concept is so unique and thought-provoking. It really makes you think about the choices you've made in life and the roads not taken."
  },
  {
    id: 2,
    bookId: 1,
    userId: 2,
    userName: "Sarah Miller",
    rating: 4,
    date: "2020-09-22",
    content: "Beautiful writing and an interesting premise. I found it a bit slow at times but overall a very rewarding read."
  },
  {
    id: 3,
    bookId: 1,
    userId: 3,
    userName: "David Wong",
    rating: 5,
    date: "2020-12-05",
    content: "This book came to me at exactly the right time in my life. It's a wonderful exploration of regret, hope, and the infinite possibilities of life."
  },
  {
    id: 4,
    bookId: 2,
    userId: 4,
    userName: "Emily Parker",
    rating: 5,
    date: "2019-05-18",
    content: "Couldn't put it down! A masterfully crafted thriller with an ending I never saw coming. Absolutely brilliant."
  },
  {
    id: 5,
    bookId: 2,
    userId: 5,
    userName: "James Wilson",
    rating: 4,
    date: "2019-03-30",
    content: "A solid psychological thriller with great pacing and character development. The twist was unexpected but made perfect sense in retrospect."
  },
  {
    id: 6,
    bookId: 3,
    userId: 6,
    userName: "Sophia Rodriguez",
    rating: 5,
    date: "2018-04-12",
    content: "An incredible story of resilience and self-determination. Tara's journey from isolation to education is inspiring and eye-opening."
  },
  {
    id: 7,
    bookId: 3,
    userId: 7,
    userName: "Michael Chen",
    rating: 4,
    date: "2018-05-27",
    content: "A powerful memoir that's both heartbreaking and uplifting. It's amazing what the human spirit can overcome."
  },
  {
    id: 8,
    bookId: 4,
    userId: 8,
    userName: "Olivia Brown",
    rating: 5,
    date: "2019-01-14",
    content: "Beautiful prose and a captivating story. The descriptions of the marsh are so vivid you can almost feel yourself there."
  },
  {
    id: 9,
    bookId: 4,
    userId: 9,
    userName: "Ethan Davis",
    rating: 4,
    date: "2018-11-03",
    content: "A haunting story with a memorable protagonist. The mix of murder mystery and coming-of-age tale works surprisingly well."
  },
  {
    id: 10,
    bookId: 5,
    userId: 10,
    userName: "Isabella Martinez",
    rating: 5,
    date: "2014-02-20",
    content: "A delightful and insightful perspective on humanity through alien eyes. Both funny and profound."
  },
  {
    id: 11,
    bookId: 6,
    userId: 11,
    userName: "William Thompson",
    rating: 5,
    date: "2021-06-10",
    content: "Andy Weir does it again! The perfect blend of science, humor, and heart-stopping adventure. I learned a ton about astrophysics while being thoroughly entertained."
  },
  {
    id: 12,
    bookId: 6,
    userId: 12,
    userName: "Ava Garcia",
    rating: 4,
    date: "2021-07-25",
    content: "An excellent sci-fi adventure with a unique alien encounter story. The science is accessible and the characters are engaging."
  },
  {
    id: 13,
    bookId: 7,
    userId: 13,
    userName: "Noah Smith",
    rating: 4,
    date: "2023-10-15",
    content: "A gripping mystery that kept me guessing until the end. The atmosphere is perfectly eerie and the protagonist is compelling."
  }
];

// News data
const news = [
  {
    id: 1,
    title: "\"The Night Wanderer,\" the popular mystery novel, has been renewed for a sequel, much to the delight of its dedicated fanbase.",
    content: "Publisher HarperCollins has announced that Alex Michaelides will be writing a sequel to his popular mystery novel \"The Night Wanderer\". The announcement comes after the book spent 15 weeks on the New York Times bestseller list. The sequel, tentatively titled \"The Dawn Seeker\", is expected to be released in late 2026.",
    date: "2025-04-28",
    image: "/images/newscard2.png",
    author: "Literary Times"
  },
  {
    id: 2,
    title: "The highly anticipated fourth book in the \"Chronicles of the Forgotten\" series is set to premiere on September 4, 2025, promising more thrilling storylines and complex characters that readers have come to love.",
    content: "Fans of Delia Owens' epic fantasy series have been eagerly awaiting the fourth installment, which was delayed by six months due to the author's extensive research trips. The publisher has revealed that this will be the longest book in the series yet, clocking in at over 400 pages. Early reviews from critics who received advance copies have been overwhelmingly positive.",
    date: "2025-04-25",
    image: "/images/newscard.png",
    author: "Fantasy Book Review"
  },
  {
    id: 3,
    title: "Notable authors, including the acclaimed Gary Oldman and Cillian Murphy, will continue to bring depth and intrigue to the literary world with their upcoming releases.",
    content: "In a surprising career pivot, award-winning actors Gary Oldman and Cillian Murphy have both announced debut novels to be published next year. Oldman's historical fiction \"The Unseen Hand\" and Murphy's psychological thriller \"Quiet Minds\" have already generated significant buzz in publishing circles, with film rights being discussed before the books have even hit shelves.",
    date: "2025-04-20",
    image: "/images/newscard1.png",
    author: "Entertainment Weekly"
  },
  {
    id: 4,
    title: "Annual Book Festival to feature virtual reality reading rooms for the first time",
    content: "This year's International Book Festival will introduce cutting-edge virtual reality reading rooms, allowing attendees to immerse themselves in settings from popular books. Visitors can experience everything from the Hogwarts Great Hall to the dystopian landscape of The Hunger Games, bringing literature to life in unprecedented ways.",
    date: "2025-04-15",
    image: "/images/newscard2.png",
    author: "Tech & Literature"
  },
  {
    id: 5,
    title: "Study shows dramatic increase in audiobook consumption among young adults",
    content: "A recent study by the National Reading Foundation has found that audiobook consumption among 18-25 year olds has increased by 45% over the past two years. This shift is attributed to the rise of multitasking culture and improvements in audiobook production quality, with full cast recordings and ambient sound effects becoming increasingly common.",
    date: "2025-04-10",
    image: "/images/newscard4.png",
    author: "Publishing Insights"
  },
  {
    id: 6,
    title: "Local libraries embracing AI book recommendation systems",
    content: "Public libraries across the country are adopting AI-powered recommendation systems to help readers discover new books. These systems analyze reading history and preferences to suggest titles readers might enjoy, with early data showing a 30% increase in circulation for libraries that have implemented the technology.",
    date: "2025-04-05",
    image: "/images/newscard5.png",
    author: "Library Journal"
  }
];

// Categories/Genres data
const categories = [
  { id: "fiction", name: "Fiction", count: 4 },
  { id: "nonfiction", name: "Non-Fiction", count: 1 },
  { id: "fantasy", name: "Fantasy", count: 2 },
  { id: "scifi", name: "Sci-Fi", count: 2 },
  { id: "mystery", name: "Mystery", count: 3 },
  { id: "thriller", name: "Thriller", count: 2 },
  { id: "romance", name: "Romance", count: 0 },
  { id: "historical", name: "Historical", count: 0 },
  { id: "biography", name: "Biography", count: 1 },
  { id: "selfhelp", name: "Self-Help", count: 0 },
  { id: "horror", name: "Horror", count: 0 },
  { id: "youngadult", name: "Young Adult", count: 0 },
  { id: "children", name: "Children", count: 0 },
  { id: "poetry", name: "Poetry", count: 0 },
  { id: "philosophy", name: "Philosophy", count: 2 },
  { id: "adventure", name: "Adventure", count: 2 },
  { id: "literary", name: "Literary", count: 1 },
  { id: "memoir", name: "Memoir", count: 1 },
  { id: "education", name: "Education", count: 1 },
  { id: "space", name: "Space", count: 1 },
  { id: "epic", name: "Epic", count: 1 },
  { id: "suspense", name: "Suspense", count: 1 },
];

// User data (for the current user)
const currentUser = {
  id: 1,
  name: "User",
  email: "user@example.com",
  bookshelf: [
    { bookId: 1, status: "reading", progress: 0.3, dateAdded: "2025-04-01" },
    { bookId: 3, status: "read", progress: 1, dateAdded: "2025-03-15" },
    { bookId: 6, status: "want-to-read", progress: 0, dateAdded: "2025-04-10" }
  ],
  favorites: [3, 5],
  preferences: {
    preferredGenres: ["Fiction", "Sci-Fi", "Philosophy"],
    readingGoal: 20 // books per year
  }
};

// Mock API functions

// Get all books
export const getAllBooks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...books]);
    }, 300); // Simulate network delay
  });
};

// Get book by id
export const getBookById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const book = books.find(book => book.id === id);
      if (book) {
        resolve(book);
      } else {
        reject(new Error(`Book with id ${id} not found`));
      }
    }, 300);
  });
};

// Get books by category
export const getBooksByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredBooks = books.filter(book =>
        book.categories.some(cat => cat.toLowerCase() === category.toLowerCase())
      );
      resolve(filteredBooks);
    }, 300);
  });
};

// Search books
export const searchBooks = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lowercaseQuery = query.toLowerCase();
      const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(lowercaseQuery) ||
        book.authorName.toLowerCase().includes(lowercaseQuery) ||
        book.categories.some(cat => cat.toLowerCase().includes(lowercaseQuery))
      );
      resolve(filteredBooks);
    }, 300);
  });
};

// Get featured books
export const getFeaturedBooks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const featuredBooks = books.filter(book => book.isFeatured);
      resolve(featuredBooks);
    }, 300);
  });
};

// Get recommended books (based on user preferences or popularity)
export const getRecommendedBooks = (userId = null) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // If a user ID is provided, we would use their preferences
      // For now, just return a mix of books as a recommendation
      const recommended = books.slice(0, 4);
      resolve(recommended);
    }, 300);
  });
};

// Get author by id
export const getAuthorById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const author = authors.find(author => author.id === id);
      if (author) {
        resolve(author);
      } else {
        reject(new Error(`Author with id ${id} not found`));
      }
    }, 300);
  });
};

// Get books by author
export const getBooksByAuthor = (authorId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const authorBooks = books.filter(book => book.author === authorId);
      resolve(authorBooks);
    }, 300);
  });
};

// Get reviews for a book
export const getReviewsForBook = (bookId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const bookReviews = reviews.filter(review => review.bookId === bookId);
      resolve(bookReviews);
    }, 300);
  });
};

// Get news items
export const getNewsItems = (limit = null) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (limit) {
        resolve(news.slice(0, limit));
      } else {
        resolve([...news]);
      }
    }, 300);
  });
};

// Get all categories
export const getAllCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...categories]);
    }, 300);
  });
};

// Get user bookshelf
export const getUserBookshelf = (userId = null) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // We're just returning the current user's bookshelf for now
      const bookshelfWithDetails = currentUser.bookshelf.map(item => {
        const book = books.find(b => b.id === item.bookId);
        return { ...item, bookDetails: book };
      });
      resolve(bookshelfWithDetails);
    }, 300);
  });
};

// Toggle favorite status for a book
export const toggleFavorite = (bookId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = books.findIndex(b => b.id === bookId);
      if (index !== -1) {
        const updatedBook = { ...books[index], isFavorite: !books[index].isFavorite };
        books[index] = updatedBook;
        resolve(updatedBook);
      } else {
        resolve(null);
      }
    }, 300);
  });
};

// Update reading status for a book
export const updateReadingStatus = (bookId, status, progress = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const bookIndex = currentUser.bookshelf.findIndex(item => item.bookId === bookId);

      if (bookIndex !== -1) {
        // Update existing entry
        currentUser.bookshelf[bookIndex] = {
          ...currentUser.bookshelf[bookIndex],
          status,
          progress,
          dateUpdated: new Date().toISOString().slice(0, 10)
        };
      } else {
        // Add new entry
        currentUser.bookshelf.push({
          bookId,
          status,
          progress,
          dateAdded: new Date().toISOString().slice(0, 10),
          dateUpdated: new Date().toISOString().slice(0, 10)
        });
      }

      resolve(true);
    }, 300);
  });
};

// Add review for a book
export const addReview = (bookId, rating, content) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newReview = {
        id: reviews.length + 1,
        bookId,
        userId: currentUser.id,
        userName: currentUser.name,
        rating,
        date: new Date().toISOString().slice(0, 10),
        content
      };

      reviews.push(newReview);
      resolve(newReview);
    }, 300);
  });
};

export default {
  getAllBooks,
  getBookById,
  getBooksByCategory,
  searchBooks,
  getFeaturedBooks,
  getRecommendedBooks,
  getAuthorById,
  getBooksByAuthor,
  getReviewsForBook,
  getNewsItems,
  getAllCategories,
  getUserBookshelf,
  toggleFavorite,
  updateReadingStatus,
  addReview
};
