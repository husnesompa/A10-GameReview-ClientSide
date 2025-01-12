import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddReview from './pages/AddReview.jsx';
import AllReviews from './pages/AllReviews.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "addReview",
    element: <AddReview></AddReview>,
   
  },
  {
    path: "allReviews",
    element: <AllReviews></AllReviews>
   
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
