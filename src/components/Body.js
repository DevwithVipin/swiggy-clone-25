import { restaurantList } from "../contants";
import RestaurantCard from "./RestaurantCard";
import { useState , useEffect,useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANTLIST_API_URL } from "../contants";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";




function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}
// const isOnline=useOnline();
// if (!isOnline()) {
//   return (
//     <h4 className="flex justify-center m-20 p-12">You are Offline!!!</h4>
//   );
// }



const Body = () => {
  
  

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");//searchText is a local variabls.it will have the updated value.
  //empty dependency array=>once after render
  //dep array[searchText] =>once after initial render +everytime after render(my searchText changes)
  useEffect(() => {
    //API call
    getRestaurants();
  },[]);
  async function getRestaurants () {
    const data = await fetch(RESTAURANTLIST_API_URL);
    const json = await data.json();
    
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    console.log(allRestaurants);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

  }
  //conditional rendering
  //if restaurants is empty => simmer ui
  //if restaurant is data => actual data ui
  //if(!allRestaurants) return  <shimmer />  ;
  

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) 
   : (
    <>
      <div className="p-5 bg-pink-50 my-5 shadow-lg">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-2 bg-green-800 text-white rounded-md hover:bg-violet-600"
          onClick={(e) => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
            console.log(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={"restaurant/" + restaurant?.data?.id}
              key={restaurant?.data?.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>);
        })}
      </div>
    </>
  );
};

export default Body;