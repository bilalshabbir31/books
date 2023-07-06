import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/books";

const fetch_all_books = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

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

   useEffect(() =>{
    let mounted = true;
    fetch_all_books().then((items) =>{
      setBooks(items);
    });
    return () => (mounted=false);
   },[]);

  return (
    <div className="app">
      <BookCreate onCreate={create_book} />
      <BookList books={books} onDelete={deleteBookbyId} onEdit={editBookbyId } />
    </div>
  );
}

export default App;
