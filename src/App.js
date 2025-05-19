import React, { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  // Functie om een nieuw boek toe te voegen
  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]); // Voeg het nieuwe boek toe aan de array
  };

  const toggleBookStatus = (id) =>
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id
          ? {
              ...book,
              status: book.status === "To read" ? "Read" : "To read",
            }
          : book
      )
    );

  const deleteBook = (id) =>
    setBooks((prev) => prev.filter((book) => book.id !== id));

  return (
    <div className="App">
      <h1>Reading Tracker 📖</h1>
      <BookForm onAddBook={handleAddBook} />
      <BookList
        books={books}
        onDeleteBook={deleteBook}
        onToggleStatus={toggleBookStatus}
      />
    </div>
  );
}

export default App;
