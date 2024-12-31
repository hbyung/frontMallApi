import React, { useEffect } from 'react'
import useCustomLogin from '../../hooks/useCustomLogin'
import useCustomCart from '../../hooks/useCustomCart'
import CartItemComponent from '../cart/CartItemComponent'
import { useRecoilValue } from 'recoil'
import { cartTotalState } from '../../atom/cartState'

function CartComponent() {

  const {isLogin, loginState} = useCustomLogin()  

  const { cartItems, changeCart} = useCustomCart()

  const totalValue = useRecoilValue(cartTotalState)

  // const {refreshCart, cartItems, changeCart} = useCustomCart()

  // useEffect(() => {

  //   if(isLogin){

  //     refreshCart()

  //   }

  //   }, [isLogin])

  return (
    <div className='w-full mt-2'>

        {isLogin ? 
            <div>
                <div className='w-full flex items-center'>
                  <div className='font-extrabold text-2xl w-4/5'>{loginState.nickname}`s cart</div>
                  <div className="bg-orange-600 text-center text-white font-bold w-1/5 rounded-full m-2 ml-4">{cartItems.length}</div>
                </div>
                <div className='mb-2'>
                  <ul>
                    {cartItems.map(item => 
                      <li><CartItemComponent {...item} 
                              key={item.cino} 
                              changeCart = {changeCart}
                              email = {loginState.email}
                              /></li>)}
                  </ul>
                </div>
                <div className="m-2 text-3xl ">
                  TOTAL: {totalValue}
                </div>
            </div> 

            : 
            <div></div> }

    </div>
  )
}

export default CartComponent