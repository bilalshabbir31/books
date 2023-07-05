import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";


function App() {

   const [books, setBooks] = useState([]);

   const create_book = (title) => {
     const updated_books = [
      ...books,
      {
        id:Math.round(Math.random()*9999),
        title:title
      }
    ]
     setBooks(updated_books)
   };

   const deleteBookbyId = (id) => {
    const updated_books = books.filter( (book) =>{
      return book.id !== id;
    } );

    setBooks(updated_books)

   };

   const editBookbyId = (id, newtitle) => {
    const updated_books = books.map( (book) => {
      if (book.id === id){
        return {...book, title: newtitle};
      }
      return book;
    });

    setBooks(updated_books);

   }

  return (
    <div className="app">
      <BookCreate onCreate={create_book} />
      <BookList books={books} onDelete={deleteBookbyId} onEdit={editBookbyId } />
    </div>
  );
}

export default App;
