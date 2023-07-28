import { IMG_CDN_URL } from "../contants";


const FoodItems = ({
  name,
  description,
  price,
  cloudinaryImageId
  
}) => {
  return (
    <div className="w-56  p-2 m-2 shadow-lg bg-pink-50 ">
      <img className="" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold bg-red-100 2xl">{name}</h2>
      <h3>{price/100}</h3>
      <h2>{description}</h2>
    </div>
  );
};

export default FoodItems;