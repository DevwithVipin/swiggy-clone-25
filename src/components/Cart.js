import { useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import {useDispatch} from  "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{
    const dispatch = useDispatch();
    const handleCart = () =>{
        dispatch(clearCart());
        }
    const cartItems = useSelector(store=>store.cart.items);
    console.log(cartItems);
    return (<div >
        <buttton className="bg-green-200 m-2 p-2 cursor-pointer"  onClick={()=>handleCart()}>Clear Cart</buttton>
         <div>{
            cartItems.map(item=><FoodItems key={item.id} {...item}/>)
        }</div>
        
        
       
    </div>
        );
};

export default Cart;