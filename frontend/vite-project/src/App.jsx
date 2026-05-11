import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import News from "./pages/News";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Bookmarks from "./pages/Bookmarks";
function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/news"
          element={<News />}
        />
        <Route
        path="/signup"
        element={<Signup />}
      />
          <Route
        path="/login"
        element={<Login />}
      />

      <Route
  path="/bookmarks"
  element={<Bookmarks />}
/>

      </Routes>

    </BrowserRouter>

  );
}

export default App;