import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Aboutt from './Components/Aboutt/Aboutt';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import Notfound from './Components/NotFound/Notfound';
import { Navigate, RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';


let routers = createHashRouter([
  {path:'' , element:<Layout/> , children: [
    {path:'' , element: <Navigate to={'home'}/>},
    {path:'home' , element: <Home/>},
    {path:'About' , element: <Aboutt/>},
    {path:'contact' , element: <Contact/>},
    {path:'protofolio' , element: <Portfolio/>},
    {path:'*' , element: <Notfound/>},
  ]}
])
export default function App() {
  return (
    <RouterProvider router={routers}>
    </RouterProvider>
  )
}
