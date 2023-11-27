import { useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import useBooksContext from './hooks/useBooksContext';
import './index.css';

function App () {
    const { fetchBooks } = useBooksContext();

    useEffect(()=> {
        fetchBooks();
    }, [fetchBooks]);

    return <div className="app">
        <h1>Books list</h1>
        <BookList/>
        <BookCreate/>
    </div>
}

export default App;