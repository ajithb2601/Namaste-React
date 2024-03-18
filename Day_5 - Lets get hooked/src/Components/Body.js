import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData.js";

const Body = ()=> {

    return (
        <div className="body">
            {/* Filter feature */}
            <div className="filter">
              <button 
              className="filter-btn"
              // onClick={()=> {
              //   listOfResto = listOfResto.filter(
              //     (res) => res.data.avgRating > 4.1
              //     );
              //     console.log(listOfResto)
              //   }}
              >
                Filter Restaurants</button>
            </div>

            {/* Restuarant List */}
            <div className="resto-container">
                {
                  restaurantList.map((restaurant)=>{
                    return (
                      <RestaurantCard key={restaurant.data.id} restoData={restaurant} />
                    )
                  })
                }  
            </div>
        </div>   
    );
};

export default Body;