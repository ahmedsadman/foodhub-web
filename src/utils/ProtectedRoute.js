import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, auth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (auth.isLoggedIn) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to={{
                        pathname: '/auth',
                        state: {
                            loginRequired: true
                        }
                    }} />
                }
            }}
        />
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps, {})(ProtectedRoute);
