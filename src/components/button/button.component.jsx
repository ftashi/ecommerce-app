
import { BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner} from "./button.styles"; 

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
  }

  const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (

    {
      [BUTTON_TYPE_CLASSES.base]: BaseButton,
      [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
      [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,

    }[buttonType]
  )

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
const CostumButton = getButton(buttonType);
  return (
  
   <CostumButton disabled={isLoading} {...otherProps}>
   
   {isLoading ? <ButtonSpinner /> :children}
   
   </CostumButton>
    
    
   
   
  );
};
export default Button;