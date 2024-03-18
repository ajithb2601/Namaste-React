import { CDN_URL } from "../utils/Constant";


const RestaurantCard = (props) => {

    const{restoData} = props;
    const{name,cuisines,area,lastMileTravelString,costForTwoString,avgRating,cloudinaryImageId} = restoData?.data
    return (
      <div className="resto-card">
        <img className="res-logo" 
          src={CDN_URL + cloudinaryImageId}
        />
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{area}</h4>
          <h4>{avgRating} Rating</h4>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
      </div>
    );
  };

  export default RestaurantCard;