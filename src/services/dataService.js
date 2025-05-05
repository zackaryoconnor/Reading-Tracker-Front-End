

import axios from 'axios';


const API_URL = import.meta.env.VITE_API_URL;


const makeCallToAPI = async (endpoint, options = {}) => {
  try {

    const config = {
      url: `${API_URL}${endpoint}`,
      ...options //
    };


    const response = await axios(config);


    return response.data;
  } catch (error) {

    console.error(`Error calling API at ${endpoint}:`, error);
    throw error;
  }
};


export const getAllBooks = () => {
  return makeCallToAPI('/api/reading-materials/');
};

// Get a book by ID
export const getBookById = (id) => {
  return makeCallToAPI(`/api/reading-materials/${id}/`);
};


export const getBooksByCategory = (category) => {
  return makeCallToAPI(`/api/reading-materials/?category=${category}`);
};


export const searchBooks = (query) => {
  return makeCallToAPI(`/api/reading-materials/?search=${query}`);
};

// Get featured books
export const getFeaturedBooks = () => {
  return makeCallToAPI('/api/reading-materials/?featured=true');
};

// Get recommended books
export const getRecommendedBooks = () => {
  // makeCallToAPI('/api/reading-materials/?recommended=true');

  return makeCallToAPI('/api/reading-materials/');
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

// Get all categories
export const getAllCategories = async () => {
  /*
    ! Due to time constraints, and not being able to this any other way,
    ! we're extracting unique categories from reading materials
    ! directly from the API and normalizing them. That's the only way
    ! we can get a list of categories.
  */

  try {
    // Make the API call to get all reading materials
    const readingMaterials = await makeCallToAPI('/api/reading-materials/');

    // Create a Set to store categories (using Set to automatically remove duplicates)
    const categoriesSet = new Set();

    // Loop through each reading material item
    readingMaterials.forEach(item => {
      if (item.categories && Array.isArray(item.categories)) {
        // For each category, normalize to uppercase and add to the Set
        item.categories.forEach(category => {
          categoriesSet.add(category.toLowerCase());
        });
      }
    });


    // Convert Set back to array and return
    return Array.from(categoriesSet);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

// Get user's bookshelf
export const getUserBookshelf = async () => {
  try {
    // Get the user's books
    const data = await makeCallToAPI('/api/reading-materials/');

    // Format the data for the bookshelf component
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
    // First, get the current book data
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

// Export all functions as a default object
export default {
  getAllBooks,
  getBookById,
  getBooksByCategory,
  searchBooks,
  getFeaturedBooks,
  getRecommendedBooks,
  getReviewsForBook,
  getNewsItems,
  getAllCategories,
  getUserBookshelf,
  toggleFavorite,
  updateReadingStatus,
  addReview
};
