export default function BookItem({ book = {}, onDeleteBook, onToggleStatus }) {
  return (
    <div>
      <li>
        <span>
          {book.title} by {book.author} - {book.status}
        </span>
        <button onClick={() => onToggleStatus(book.id)}>
          {book.status === "To read" ? "Mark as read" : "Mark as to read"}
        </button>
        <button onClick={() => onDeleteBook(book.id)}>Delete</button>
      </li>
    </div>
  );
}
