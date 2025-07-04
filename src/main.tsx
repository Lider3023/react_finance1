import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import './sass/main.scss'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routes}/>
)
