import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux";

const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div>
      <nav> 
        <NavLink to="/">
                <div>
                        <img src="https://www.google.com/search?sca_esv=f7d7f63f6bd64516&rlz=1C5MACD_enIN1071IN1071&sxsrf=ADLYWILf_KWSUVeOBY6khuf2sVnzllfRww:1719571245403&q=shopping+app+logo&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3JzEq8sk6FPCPzvp42tv1tXoWzhWsXC_I4p4mJ4MbFnhHPHoiz_0NGI0EeL5c9x1RL0XX8LhA345K4vkELq2N6Huh9gBh_CodTo3hhf9WPKN97roEyseE_4y4bzwrBzI0ZboH7HptEpnl1vQf4-SZi8K-mu0Ef-InpARpBUhWbo8exQVkJg&sa=X&sqi=2&ved=2ahUKEwiQ9P2Jjv6GAxWqcWwGHaNECCIQtKgLegQIERAB&biw=1680&bih=963&dpr=2#vhid=xyGF3ah1ntV1XM&vssid=mosaic"/>
                </div>
        </NavLink>
        <NavLink to="/">
                Home
        </NavLink>
        <NavLink to="/cart" >
                <div>
                  <FaShoppingCart/>
                  {
                    cart.length>0 &&
                    <span>{cart.length}</span>
                  }
                </div>
        </NavLink>
      </nav>
    </div>
  )
}

export default Navbar
