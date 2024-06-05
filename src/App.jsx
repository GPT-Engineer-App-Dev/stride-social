import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Home from "./pages/Home.jsx";
import Upload from "./pages/Upload.jsx";
import RunDetail from "./pages/RunDetail.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/upload" element={<Upload />} />
        <Route exact path="/run/:id" element={<RunDetail />} />
      </Routes>
    </Router>
  );
}

export default App;