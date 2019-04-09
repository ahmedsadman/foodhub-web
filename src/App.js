import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Auth from './routes/Auth';
import MainPage from './routes/MainPage';
import AdminDashboard from './routes/admin/Dashboard';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={Home} />
                    <Route path='/auth' exact component={Auth} />
                    <Route path='/main' component={MainPage} />
                    <Route path='/admin' exact component={AdminDashboard} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
