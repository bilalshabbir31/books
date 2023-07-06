import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {

   const [books, setBooks] = useState([]);
   
   const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data)
   };

   useEffect(() => {
     fetchBooks();
   },[])
   

   const create_book = async (title) => {
    //  const updated_books = [
    //   ...books,
    //   {
    //     id:Math.round(Math.random()*9999),
    //     title:title
    //   }
    // ]
    //  setBooks(updated_books)
      const response = await axios.post("http://localhost:3001/books",
        {"title":title}
      );
      console.log(response);
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
