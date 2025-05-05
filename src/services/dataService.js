// dataService.js - Simple API service that makes calls to our backend
import axios from 'axios';

// Get the base URL from environment variables
const API_URL = import.meta.env.VITE_API_URL;

// Predefined categories since they're referenced but not defined
const categories = [
  { id: "fiction", name: "Fiction", count: 4 },
  { id: "nonfiction", name: "Non-Fiction", count: 1 },
  { id: "fantasy", name: "Fantasy", count: 2 },
  { id: "scifi", name: "Sci-Fi", count: 2 },
  { id: "mystery", name: "Mystery", count: 3 },
  { id: "thriller", name: "Thriller", count: 2 },
  { id: "philosophy", name: "Philosophy", count: 2 },
  { id: "biography", name: "Biography", count: 1 },
  { id: "education", name: "Education", count: 1 }
];

// This is the 'base' function to make API calls
const makeCallToAPI = async (endpoint, options = {}) => {
  try {
    const config = {
      url: `${API_URL}${endpoint}`,
      ...options
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error(`Error calling API at ${endpoint}:`, error);
    throw error;
  }
};

// Get all books
export const getAllBooks = () => {
  return makeCallToAPI('/api/reading-materials/');
};

// Get a book by ID
export const getBookById = (id) => {
  return makeCallToAPI(`/api/reading-materials/${id}/`);
};

// Get books by category
export const getBooksByCategory = (category) => {
  return makeCallToAPI(`/api/reading-materials/?category=${category}`);
};

// Search for books
export const searchBooks = (query) => {
  return makeCallToAPI(`/api/reading-materials/?search=${query}`);
};

// Get featured books
export const getFeaturedBooks = () => {
  return makeCallToAPI('/api/reading-materials/?featured=true');
};

// Get recommended books
export const getRecommendedBooks = () => {
  return makeCallToAPI('/api/reading-materials/');
};

// Get all authors
export const getAuthors = () => {
  return makeCallToAPI('/api/authors/');
};

// Get an author by ID
export const getAuthorById = (id) => {
  return makeCallToAPI(`/api/authors/${id}/`);
};

// Get books by author
export const getBooksByAuthor = (authorId) => {
  return makeCallToAPI(`/api/reading-materials/?author=${authorId}`);
};

// Get reviews for a book
export const getReviewsForBook = (bookId) => {
  return makeCallToAPI(`/api/reviews/?book=${bookId}`);
};

// Get news items
export const getNewsItems = (limit = null) => {
  const endpoint = limit ? `/api/news/?limit=${limit}` : '/api/news/';
  return makeCallToAPI(endpoint);
};

// Fixed getAllCategories - no dependency on readingMaterials
export const getAllCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Return the predefined categories array directly
      resolve(categories);
    }, 300);
  });
};

// Get user's bookshelf
export const getUserBookshelf = async () => {
  try {
    const data = await makeCallToAPI('/api/reading-materials/');
    const bookshelf = data.map(book => ({
      bookId: book.id,
      status: book.readingStatus || 'want-to-read',
      progress: book.readingStatus === 'read' ? 1 : 0,
      dateAdded: book.created_at,
      bookDetails: book
    }));
    return bookshelf;
  } catch (error) {
    console.error('Error getting user bookshelf:', error);
    throw error;
  }
};

// Toggle favorite status for a book
export const toggleFavorite = async (bookId) => {
  try {
    const book = await getBookById(bookId);
    return makeCallToAPI(`/api/reading-materials/${bookId}/`, {
      method: 'PATCH',
      data: { isFavorite: !book.isFavorite }
    });
  } catch (error) {
    console.error('Error toggling favorite status:', error);
    throw error;
  }
};

// Update reading status for a book
export const updateReadingStatus = (bookId, status, progress = 0) => {
  return makeCallToAPI(`/api/reading-materials/${bookId}/`, {
    method: 'PATCH',
    data: { status, progress }
  });
};

// Add a review for a book
export const addReview = (bookId, rating, content) => {
  return makeCallToAPI('/api/reviews/', {
    method: 'POST',
    data: {
      book: bookId,
      rating,
      content
    }
  });
};

export default {
  getAllBooks,
  getBookById,
  getBooksByCategory,
  searchBooks,
  getFeaturedBooks,
  getRecommendedBooks,
  getAuthors,
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
