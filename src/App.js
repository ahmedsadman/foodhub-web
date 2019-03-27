import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Auth from './routes/Auth';
import SearchResult from './routes/SearchResult';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={Home} />
                    <Route path='/auth' exact component={Auth} />
                    <Route path='/restaurants/search' exact component={SearchResult} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
