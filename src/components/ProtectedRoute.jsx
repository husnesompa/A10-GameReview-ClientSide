import React from 'react';

const ProtectedRoute = () => {
    return (
        <div>
            
        </div>
    );
};

export default ProtectedRoute;


// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext"; // Replace with your actual auth context

// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth(); // `user` contains the authenticated user's details

//   // If no user is logged in, redirect to the login page
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   // If the user is logged in, render the requested component
//   return children;
// };

// export default ProtectedRoute;
