import { Route, Routes } from "react-router-dom";
import "./App.css";

import SignUpPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

// ANY component that is rendered by a route, should be stored in the 
// pages folder. Every page is like an app component


function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Pageeeeeeeeeee</h1>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path='/signup' element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
