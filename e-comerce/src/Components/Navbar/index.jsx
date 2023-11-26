import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context";


const Navbar =()=>{
    const activeStyle ='underline';
    const context = useContext(ShoppingCartContext)
    
    return(
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-line">
            <ul className='flex items-center gap-3'>              
                <li className="font-semibold text-lg">
                    <NavLink to='/' className={({isActive})=>
                isActive ? activeStyle: undefined}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/all'  className={({isActive})=>
                isActive ? activeStyle: undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'  className={({isActive})=>
                isActive ? activeStyle: undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'  className={({isActive})=>
                isActive ? activeStyle: undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/fornitures'  className={({isActive})=>
                isActive ? activeStyle: undefined}>
                        Fornitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'  className={({isActive})=>
                isActive ? activeStyle: undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'  className={({isActive})=>
                isActive ? activeStyle: undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className="font-semibold text-lg">
                    sneid@dev.com.co
                </li>
                <li>
                    <NavLink to='/my-acount' className={({isActive})=>
                isActive ? activeStyle: undefined}>
                        My Acount
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-orde' className={({isActive})=>
                isActive ? activeStyle: undefined}>
                        My Orde
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-orders' className={({isActive})=>
                isActive ? activeStyle: undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in' className={({isActive})=>
                isActive ? activeStyle: undefined}>
                        Sign in
                    </NavLink>
                </li>
                <li>
                🛒 {context.count  }
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;