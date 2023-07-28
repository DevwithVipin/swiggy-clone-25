import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../contants";

 import { useDispatch } from "react-redux";
 import { addItem } from "../utils/cartSlice";
// import Alert from "./Alert";

const MenuItems = (props) => {
  const { id, image } = props;
  console.log(id);
  const [menuItem, setMenuItem] = useState({});


  useEffect(() => {
    getMenuItems();
  }, []);

  async function getMenuItems() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/quick?menuId=${id}&categories=true`, {mode:'cors'}
    );
    const jsonData = await data.json();
    setMenuItem(jsonData?.data?.menu?.items); 
  }
  const dispatch=useDispatch();
  const addFoodItem = (item) =>{
    dispatch(addItem(item));
  }

  return MenuItems?.length === 0 ? (
    <Shimmer />): (<>
    <div className=" flex justify-center m-2 p-2">
      <div >
        {Object.values(menuItem).map((item) => (
          <div className="w-100 m-5 p-5 border-lime-500" 
            
            key={item.id}
          >
            <img
              className=" h-24 w-32 rounded-md" alt=""
              src={
                IMG_CDN_URL +
                (!item.cloudinaryImageId ? image : item.cloudinaryImageId)
              }
            />
            
              <div >
                {item?.name}
              </div>
              <div >
                <span >
                  Price per plate :₹{item.price / 100}
                </span>
                <button className="bg-green-100 p-2 m-2" onClick={()=>addFoodItem(item)}>
                       Add item 
                </button>
              </div>
            
            
          </div>
        ))}
      </div>

    </div>
    <div className="p-2 m-2">
        <button ></button>
    </div>
    </>
  );
};

export default MenuItems;
