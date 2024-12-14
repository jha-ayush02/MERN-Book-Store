import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from "./pages/Book.jsx";
import CreateBook from "./pages/CreateBook.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Sidebarmenu from "./Sidebarmenu.jsx";
import BookforEdit from "./pages/BookforEdit.jsx";
import ViewBook from "./pages/ViewBook.jsx";
import CreateBookImg from "./pages/CreateBookImg.jsx";
import UserList from './pages/UserList.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Sidebarmenu>
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/book" element={<Book />} />
          <Route path="/user" element={<UserList />} />
          {/* <Route path="/add/book" element={<CreateBook />} /> */}
          <Route path="/add/book" element={<CreateBookImg />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edit/book/:id" element={<BookforEdit />} />
          <Route path="/view/books" element={<ViewBook />} />
        </Routes>
      </Sidebarmenu>
    </BrowserRouter>
    {/* <App />
    <Book/>
    <CreateBook/>
    <Dashboard/>
    <Login/> */}
  </StrictMode>
);
