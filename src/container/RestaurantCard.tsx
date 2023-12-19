import { CDN_URL, Restaurants } from "../utils/constant";
type RestaurantCardProps = {
  resData: Restaurants;
};
const RestaurantCard = ({ resData }: RestaurantCardProps): JSX.Element => {
  //const { resData } = props;
  // console.log(resData);

  const { cloudinaryImageId, name, cuisines, avgRatingString, sla } =
    resData?.info;
  return (
    <div className="res-card" data-testid="resCard">
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3> {name}</h3>
      <p> {cuisines.join(", ")} </p>
      <h4>{avgRatingString}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
