import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/ServicesPage"
import Pages from './pages/PagesPage'
import Blog from './pages/BlogPage'
import Concat from './pages/ContactPage'
export default function App() {
  const routes = createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/services",
      element: <Services />
    },
    {
      path:"/pages",
      element: <Pages />
    }, 
    {
      path:"/blog",
      element:<Blog />
    },
    {
      path:"/concat",
      element:<Concat />
    }
  ])
  return (
    <RouterProvider router={routes} />
  )
}
