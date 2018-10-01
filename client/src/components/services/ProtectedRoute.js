import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

// const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
//     <Route
//         {...rest}
//         render={props =>
//             isAuthenticated === true ? (
//                 <Component {...props} />
//             ) : (
//                     <Redirect to="/login" />
//                 )
//         }
//     />
// );

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			isAuthenticated === true ? (
				<Component {...props} />
			) : (
				<Redirect to="/login" />
			)
		}
	/>
);

export default ProtectedRoute;