import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Reading from "./Components/Reading/Reading.jsx";
import ReadingMaterialReview from "./Components/ReadingMaterialReview/ReadingMaterialReview.jsx";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/reading" element={ <Reading /> } />
        <Route path="/reading-material-review" element={ <ReadingMaterialReview /> } />
      </Routes>
    </Router>
  );
}

export default App;
