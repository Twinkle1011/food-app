import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Restaurants } from "../utils/constant";
import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import useRestaurantList from "../hooks/useRestaurantList";

const Body = (): ReactElement => {
  const [searchText, setSearchText] = useState<string>("");

  const { filteredRestaurant, filterRestaurants, topRatedRestaurant } =
    useRestaurantList(searchText);
  console.log(filteredRestaurant);

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection.
      </h1>
    );

  return filteredRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            data-testid="searchInput"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={() => filterRestaurants()}> Search </button>
        </div>
        <button className="filter-btn" onClick={() => topRatedRestaurant()}>
          Top rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant: Restaurants) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
