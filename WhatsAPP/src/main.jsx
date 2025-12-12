
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './profile.jsx'
import Chat from './chat.jsx'
import Status from './status.jsx'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/profile',
      element: <Profile />
    },
    {
      path: '/chat',
      element: <Chat />
    },
    {
      path: '/status',
      element: <Status />
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
