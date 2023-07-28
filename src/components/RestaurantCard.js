import { IMG_CDN_URL } from "../contants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";


const RestrauntCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  lastMileTravelString,
}) => {const { user } = useContext(UserContext);
  return (
    <> <div className="w-56  p-2 m-2 shadow-lg bg-pink-50 hover:scale-110 transition duration-100 cursor-pointer">
      <div className="flex flex-wrap">
        <img className="" src={IMG_CDN_URL + cloudinaryImageId} />
      <span className="font-bold 2xl p-1 m-1">{name}</span>
      <div className="m-1 p-1 ">{cuisines?.join(", ")}</div>
      </div>
      
      
        <div><span className="m-1 p-1">{avgRating}⭐ </span>  </div>
        

      <h1 className="font-bold">{user.name}</h1>
      <h1 className="font-bold">{user.email}</h1>
    </div>
    </>
   
  );
};

export default RestrauntCard;