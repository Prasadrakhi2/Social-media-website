import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import CreatePost from './Components/CreatePost.jsx'

const router = createBrowserRouter([
  {path : "/", element : <App/>},
  {path : "/create-post" , element : <CreatePost/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
