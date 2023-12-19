import ItemList from "../components/ItemList";
import "../Styles/RestaurantCategory.css";
import { useState } from "react";
import { CardDetails } from "../utils/type";
type CardProps = {
  data: CardDetails;
};
const RestaurantCategory = ({ data }: CardProps): JSX.Element => {
  const [showItems, setShowItems] = useState<boolean>(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      <div className="restaurant-category">
        <div className="restaurant-title" onClick={handleClick}>
          {data.title} ({data.itemCards.length})
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
