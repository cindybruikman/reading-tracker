import BookItem from "./BookItem";

export default function BookList({ books, onDeleteBook, onToggleStatus }) {
  return (
    <div>
      <ul>
        {books
          .filter((book) => book.title && book.author)
          .map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onDeleteBook={onDeleteBook}
              onToggleStatus={onToggleStatus}
            />
          ))}
      </ul>
    </div>
  );
}
