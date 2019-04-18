import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Home from './routes/Home';
import Auth from './routes/Auth';
import MainPage from './routes/MainPage';
import AdminDashboard from './routes/admin/Dashboard';
import { history } from './utils/history';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Route path='/' exact component={Home} />
                    <Route path='/auth' exact component={Auth} />
                    <Route path='/main' component={MainPage} />
                    <Route path='/admin' exact component={AdminDashboard} />
                </div>
            </Router>
        </div>
    );
}

export default App;
