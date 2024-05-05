

import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'

const CartDropdown = () => {
const cartItems = useSelector(selectCartItems);
const navigate = useNavigate();

const goToCheckOutHandler = () => {
  navigate('/checkout')
}

return(

   <CartDropdownContainer>
      <CartItems>
      {cartItems.length ? (cartItems.map((item) => (
        <CartItem key={ item.id } CartItem={item} />
        ))) : (
          <EmptyMessage>Your Shopping Bag Is Empty</EmptyMessage>
        )}
      </CartItems>
        <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
   </CartDropdownContainer>
    
      
   
  )

}
export default CartDropdown;