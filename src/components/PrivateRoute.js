import React from "react";
import { Route, Redirect } from "react-router-dom";


/* 
1. Renders a <Route /> with all props passed 
2. checks if user is authenticated, if they are, render the components
3. if not authenticated, redirect to login
*/
const PrivateRoute = ({component: Component, ...rest}) => {
return <Route 
  {...rest}
    render={() => {
      if (localStorage.getItem('token')) {
        return <Component />
      } else {
        return <Redirect to="/login" />
      }
    }}
/>
}


export default PrivateRoute; 