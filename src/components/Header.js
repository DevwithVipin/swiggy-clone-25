import { useState,useContext } from "react";
import Logo from "../assets/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import cart from "./Cart"
import { useSelector } from "react-redux";

const loggedInUser = () => {
  return false;
}

 
const Title = () => (
    <a href="/">
      <img
        className="h-28 p-2"
        alt="logo"
        src={Logo}
      />
    </a>
  );
  
  const Header = () => {
    //const [title, setTitle] = useState("Food Villa");//if my title changes usestate update my UI quickly,it will rerender this title
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const isOnline=useOnline();
       const {user,setUser} = useContext(UserContext);
       const cartItems=useSelector(store=>store.cart.items);                                      
    return (
      <div className="flex bg-yellow-100 shadow-lg justify-between m-2 p-2 ">
        <Title />
        <div className="">
          <ul className="flex wrap py-10 space">
          
            <Link to="/">
              <li className="px-2">Home</li>
            </Link>
            <li className="px-2">
              <Link to = "/about">
                About
              </Link>
            </li>
            <li className="px-2"><Link to="/contact">Contact</Link></li>
            <li className="px-2"><Link to="/Instamart">Instamart</Link></li>
            <Link to="/cart"><li>Cart-{cartItems.length}</li></Link> 
            <li className="mx-2">{isOnline?"✅":"Oops!It seems like you are offline please check your internet connection"}</li>  
          </ul>
          <input value={user.name} onChange={e=>setUser({
            ...user,
            name:e.target.value,
            
          })}></input>
          <input value={user.email} onChange={e=>setUser({
            ...user,
            email:e.target.value,
            
          })}></input>
               
        </div>
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
        {
          isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>)
        }
      </div>
    );
  };
  
  export default Header;