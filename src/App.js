import React from "react";
import Main from "./components/main/Main";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
