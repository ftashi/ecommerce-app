import { Fragment, useContext } from "react";
import { Outlet, Link, Form } from "react-router-dom";
import './navigation.styles.scss';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { signOutUser } from "../../utils/firebase.utils";


const Navigation = ({handleSearch}) => {
  const { currentUser } = useContext(UserContext) ;
  const { isCardOpen } = useContext(CartContext)
  
    return(
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
             <CrwnLogo className='logo'/>
            </Link>
             <div>
              <SearchBar handleSearch={handleSearch} />
             </div>
            
           
           <div className='nav-links-container'>
             <Link className='nav-link' to='/shop'>
               SHOP
              </Link>

            {currentUser ? (

              <span className='nav-link' onClick={signOutUser}>
              {''}
              SIGN OUT{''}
              </span>
              ) : (
                <Link className='nav-link' to='/auth'>
               SIGN IN
              </Link>
              )}
            <CartIcon />
          
           </div>
            {isCardOpen && <CartDropdown />}
        </div>
        <Outlet/>
      </Fragment>
       
    );
  };

  export default Navigation;