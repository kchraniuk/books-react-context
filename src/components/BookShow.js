import { useState } from 'react';
import BookEdit from './BookEdit';
import useBooksContext from '../hooks/useBooksContext';

function BookShow({book}) {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useBooksContext();
    
    const handleDeleteClick = () => {
        deleteBookById(book.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = showEdit 
        ? <BookEdit book={book} onSubmit={handleSubmit}/> 
        : <h3>{book.title}</h3>;
    
    return <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="" />
            {content}
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>;
}

export default BookShow;