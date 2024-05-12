
import styled from "styled-components";

export const CartDropdownContainer = styled.div`

    
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    position: absolute;
  `




export const EmptyMessage = styled.span`
      font-size: 18px;
      margin: 50px auto;
    
`
    



  


export const CartItems = styled.div`

      height: 240px;
      display: flex;
      flex-direction: column;
      overflow: scroll;
    
  
    button {
      margin-top: auto;
    }

`
    
  
