import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './router/App.jsx'
import CreatePost from './Components/CreatePost.jsx'
import PostLists from './Components/PostLists.jsx'

const router = createBrowserRouter([
  {path: "/" , element : <App/>, 
    children : [
      {path:"/", element: <PostLists/>},
      {path: "/create-post" , element: <CreatePost/>},
  ]},
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
