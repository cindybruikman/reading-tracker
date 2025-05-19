import { useState } from "react";

export default function BookForm({ onAddBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("To read");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Controleer of titel en auteur zijn ingevuld
    if (!title.trim() || !author.trim()) {
      alert("Please fill in both the title and the author!");
      return;
    }

    // Voeg het boek toe
    onAddBook({ title, author, status, id: Date.now() });

    // Reset het formulier
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="To read">To read</option>
        <option value="Read">Read</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
}
