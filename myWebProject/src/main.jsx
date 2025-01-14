import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//pages
import Tours from './pages/tours.jsx'
import Contacts from './pages/contacts.jsx'
import AboutUs from './pages/aboutUs.jsx'
import Register from './pages/register.jsx'
import Login from './pages/login.jsx'
import Payment from './pages/payment.jsx'
//tourPages
import Bratislava from './pages/tourPages/bratislava.jsx'
import Warsaw from './pages/tourPages/warsaw.jsx'
import Madrid from './pages/tourPages/madrid.jsx'
import London from './pages/tourPages/london.jsx'
import Paris from './pages/tourPages/paris.jsx'
import Berlin from './pages/tourPages/berlin.jsx'
//styles
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/contacts',
    element: <Contacts/>
  },
  {
    path: '/aboutUs',
    element: <AboutUs/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/tours',
    element: <Tours/>
  },
{
  path: '/bratislava',
  element: <Bratislava/>
},
{
  path: '/warsaw',
  element: <Warsaw/>
},
{
  path: '/madrid',
  element: <Madrid/>
},
{
  path: '/london',
  element: <London/>
},
{
  path: '/paris',
  element: <Paris/>
},
{
path: '/berlin',
element: <Berlin/>
},
{
  path: '/payment',
  element: <Payment/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
)