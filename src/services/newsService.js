// src/services/newsService.js

// This function fetches the latest news from your API
export const getLatestNews = async () => {
  try {
    // Replace this with your actual API endpoint
    // const response = await fetch('your-api-endpoint/news');
    // const data = await response.json();
    // return data;

    // For now, return mock data until your API is set up
    return mockNewsData;
  } catch (error) {
    console.error('Error in getLatestNews:', error);
    throw error;
  }
};

// Mock data to use until your API is connected
const mockNewsData = [
  {
    id: 1,
    title: "New Release: 'The Silent Echo' Tops Charts",
    date: "May 2, 2025",
    excerpt: "The latest mystery novel from acclaimed author Emma Rivers has taken the literary world by storm...",
    image: "https://via.placeholder.com/300x200",
    url: "#"
  },
  {
    id: 2,
    title: "Author Spotlight: James Chen Interview",
    date: "April 28, 2025",
    excerpt: "Award-winning author James Chen discusses his creative process and upcoming projects...",
    image: "https://via.placeholder.com/300x200",
    url: "#"
  },
  {
    id: 3,
    title: "Literature Festival Announced for Summer",
    date: "April 25, 2025",
    excerpt: "The annual Bay Area Book Festival will return this July with an exciting lineup of authors and events...",
    image: "https://via.placeholder.com/300x200",
    url: "#"
  }
];
