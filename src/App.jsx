import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Reading from "./Components/Reading/Reading.jsx";
import ReadingDetails from "./Components/ReadingDetails/ReadingDetails.jsx";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/reading" element={ <Reading /> } />
        <Route path="/reading-details" element={ <ReadingDetails /> } />
      </Routes>
    </Router>
  );
}

export default App;
