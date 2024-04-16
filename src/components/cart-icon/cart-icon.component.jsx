
import { useContext } from 'react'
import { ReactComponent as ShoppingSVG} from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/cart.context'
import { CartIconContainer, ItemCount, ShoppingIcon} from './cart-icon.styles'


const CartIcon = () => {
  const { isCardOpen, setIsCardOpen, cartCount } = useContext(CartContext)
  const toogleIsCardOpen = () => setIsCardOpen(!isCardOpen)
    return(
      <CartIconContainer onClick={toogleIsCardOpen}>
        <ShoppingIcon><ShoppingSVG/></ShoppingIcon>
      <ItemCount>{cartCount}</ItemCount>
      </CartIconContainer>
    )
}

export default CartIcon; 