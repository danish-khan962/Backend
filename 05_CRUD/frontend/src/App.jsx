import React from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'


const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <Navbar />
      <Create />
    </div>
  },
  {
    path: '/read',
    element: <div>
      <Navbar />
      <Read />
    </div>
  },
  {
    path: '/:id',
    element: <div>
      <Navbar />
      <Update />
    </div>
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
