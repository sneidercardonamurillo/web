import {BrowserRouter, useRoutes} from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAcount from '../MyAcount'
import MyOrde from '../MyOrde'
import MyOrders from '../MyOrders'
import Signin from '../Signin'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes =()=>{
  let routes = useRoutes ([
    { path:'/', element: <Home/>},
    { path:'/my-acount', element: <MyAcount/>},
    { path:'/my-orde', element: <MyOrde/>},
    { path:'/my-orders', element: <MyOrders/>},
    { path:'/sign-in', element: <Signin/>},
    { path:'/*', element: <NotFound />}
  ])
  return routes
}
const App =() => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
