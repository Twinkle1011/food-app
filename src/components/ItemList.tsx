import { CDN_URL } from "../utils/constant";
import "../Styles/ItemList.css";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { itemCard } from "../utils/type";
import { ReactElement } from "react";

type TypeProps = {
  items: itemCard[];
};
const ItemList = (props: TypeProps): ReactElement => {
  const { items } = props;
  const dispatch = useDispatch();

  const handleAddItem = (item: itemCard) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="item-cards">
          <div className=" item-description">
            <div className="item-heading">
              <span>{item.card.info.name} -</span>
              <span>Rs. {item.card.info.price / 100}</span>
            </div>{" "}
            <p>{item.card.info.description}</p>{" "}
          </div>
          <div>
            <button onClick={() => handleAddItem(item)}>Add</button>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="item-image"
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
