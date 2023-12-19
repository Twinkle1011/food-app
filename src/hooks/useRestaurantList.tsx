import { RESTAURANT_LIST, Restaurants } from "../utils/constant";
import { useCallback, useEffect, useState } from "react";

const useRestaurantList = (searchText: string) => {
  const [listOfRestaurant, setListOfRestaurant] = useState<Restaurants[]>([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState<Restaurants[]>(
    []
  );

  const topRatedRestaurant = () => {
    const filterList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
    setListOfRestaurant(filterList);
    setFilteredRestaurant(filterList);
  };

  const filterRestaurants = useCallback(() => {
    if (searchText !== "") {
      console.log(searchText);
      const filteredRestaurants = listOfRestaurant.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
      );
      setFilteredRestaurant(filteredRestaurants);
    }
  }, [searchText]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST);
    const json = await data.json();
    let { restaurants = [] } =
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle || "";
    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
  };
  return {
    filteredRestaurant,
    filterRestaurants,
    topRatedRestaurant,
  };
};
export default useRestaurantList;
