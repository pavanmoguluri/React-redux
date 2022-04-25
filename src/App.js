import "./App.css";
import Dashboard from "./dashboard";
import Navbar from "./Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Create from "./containers/Crud/create";
import Read from "./containers/Crud/read";
import Update from "./containers/Crud/update";
import Delete from "./containers/Crud/delete";

function App() {
  return (
    <div className="App mb-10">
      <h1>Start Application</h1>
      <div className="d-flex flex-row">
        <div className="p-2 mr-10"> Navigation</div>
        <div className="p-2">
          <Link to="">Home</Link>
        </div>
        <div className="p-2">
          <Link to="/navbar">navbar</Link>
        </div>
        <div className="p-2">
          <Link to="/dashboard">dashboard</Link>
        </div>
      </div>

      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="navbar" element={<Navbar />} />
        <Route path="create" element={<Create />} />
        <Route path="read" element={<Read />} />
        <Route path="update" element={<Update />} />
        <Route path="delete" element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
