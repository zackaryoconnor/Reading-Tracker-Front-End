// 1. Import React hooks
import { useEffect, useState } from 'react';

// 2. Define the ReadingList component
const ReadingList = () => {
  // 2.2 Define state to store reading materials
  const [materials, setMaterials] = useState([]);

  // 2.3 Define logic to fetch reading materials from the backend
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/reading-materials/`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched reading materials:", data);
        setMaterials(data);
      })
      .catch((err) => {
        console.error("Error fetching reading materials:", err);
      });
  }, []);

  // 3. Return JSX to display the list
  return (
    <div>
      <h2>Reading List</h2>
      <ul>
        {materials.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong> by {item.authorName}
          </li>
        ))}
      </ul>
    </div>
  );
};

// 4. Export the component
export default ReadingList;
