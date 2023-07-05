import React, { useState } from 'react'
import BookEdit from './BookEdit';

const BookShow = ( {book, onDelete, onEdit} ) => {

  const [showEdit, setshowEdit] = useState(false)

  const handleDeleteclick = () => {
    onDelete(book.id);
  } 

  const handleEditClick = () => {
    setshowEdit(!showEdit);
  }

  const handleSubmit = (id, newTitle) => {
    setshowEdit(false);
    onEdit(id, newTitle)
  };

  let content = <h3>{book.title}</h3>
  if (showEdit) {
    content = (
      <BookEdit onSubmit={handleSubmit} book={book}/>
    );
  }
  
  return (
    <div className='book-show'>{book.title}
      <div>
        {content}
      </div>
      <div className='action'>
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteclick}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow