import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL} from "../contants";
import Shimmer from "./Shimmer";
import MenuItems from "./MenuItems";

const RestaurantMenu = () => {
	const { id } = useParams();
	const [restaurant, setRestaurant] = useState({});
	// const [itemData, setItemData] = useState();

	useEffect(() => {
		getRestaurantDetails();
	}, []);

	async function getRestaurantDetails() {
		const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940499&lng=85.1376051&restaurantId=${id}&submitAction=ENTER`, {mode:'cors'});
		const jsonData = await data.json();
		setRestaurant(jsonData?.data?.cards[0]?.card?.card.info);
	}

	

return restaurant.length === 0 ? (
  <Shimmer />
) 
 : (<><div className="bg-pink-100">

 < div className="w-150 h-100  flex flex-wrap m-2 p-2">
 
 <img className=" h-52 w-60 rounded-lg shadow-sm mt-10  " src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
 <div className=" text-md font-semibold">
					<span className=" font-bold text-black m-2 p-2">{restaurant?.name}</span><span>
					<div className=" fa fa-star-half-empty text-black m-2 p-2">{restaurant.cuisines?.join(", ")}</div>
	</span>

					
	</div></div><span>{restaurant?.availability?.nextOpenTimeMessage}</span>
  
  <span>
					<div className=" fa fa-star-half-empty ">{restaurant.avgRating}</div>
	</span>
  <span >Location : {restaurant?.areaName + ' ' + restaurant?.city}</span>
  <div>{restaurant.availabilityServiceabilityMessage}</div>

 
 
 <div className=""><MenuItems  id={id} image={restaurant.cloudinaryImageId}/></div>
 </div>
 </>)
 };
export default RestaurantMenu;