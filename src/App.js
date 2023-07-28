import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { Instamart } from "./components/Instamart";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import store from "./utils/store"


const AppLayout = () => {
  const [user,setUser] =useState({
    name:"Vipin Kumar",
    email:"vipinmishra00516@gmail.com",
  });
  return (
         <Provider store={store}> <UserContext.Provider value={{
        user:user,
        setUser:setUser,
      }}>
     
      <Header />
      <Outlet/>
      <Footer/>
   
      </UserContext.Provider>
 </Provider>
   
  );
};
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout/>,
    errorElement:<Error />,
    children : [
      {
        path: "/",
        element:<Body/>,
      },
      {
        path: "/about",
        element:<About/>,
      },
      {
        path: "/contact",
        element:<Contact/>,
      },
      {
        path: "/restaurant/:id",
        element:<RestaurantMenu/>,
      },
      {
        path: "/cart",
        element:<Cart/>,
      },
      {
        path: "/restaurant/:id",
        element:<RestaurantMenu/>,
      },
      {
        path: "/instamart",
        element:<Instamart />,
      },
  
  
    ],
  },

  
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);