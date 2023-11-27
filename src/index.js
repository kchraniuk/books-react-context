import React from  'react';
import ReactDOM from 'react-dom/client';

import { Provider } from './context/books';

import App from './App';

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);

root.render(
    <Provider value={5}>
        <App />
    </Provider>
);
