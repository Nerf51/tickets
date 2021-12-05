import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./User";
import "./App.css";
function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/user/:id" element={<User />}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
