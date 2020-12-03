import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { login } = React.useContext(UserContext);

    return (
        <>
            {login !== null &&

                <Route {...rest} render={props => (
                    login ? (
                        <Component {...props} />
                    ) : (
                            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                        )
                )} />
            }


        </>
    )
}

export default PrivateRoute;