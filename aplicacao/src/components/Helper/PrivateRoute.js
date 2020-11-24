import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../UserContext';


const PrivateRoute = (props) => {
    const {login} = React.useContext(UserContext);

    if (login) return <Route {...props} />
    else if (!login) return <Redirect to={{pathname: '/login', state: {from: props.location}}} />
    else return null

}

export default PrivateRoute;