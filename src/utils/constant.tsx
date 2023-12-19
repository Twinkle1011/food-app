export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const LOGO_URL =
  "https://static.vecteezy.com/system/resources/previews/007/500/121/original/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg";
export const MENU_API =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1673456&lng=72.7872585&restaurantId=";
export const SWIGGY_DOMAIN = "https://www.swiggy.com/dapi/";
export const RESTAURANT_LIST = `${SWIGGY_DOMAIN}restaurants/list/v5?lat=21.1673456&lng=72.7872585&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

export const navObject: Record<string, string> = {
  Home: "/",
  About: "/about",
  Contact: "/contact",
  Grocery: "/grocery",
};

export type Restaurants = {
  info: {
    id: number;
    name: string;
    cloudinaryImageId: string;
    costForTwo: string;
    cuisines: string[];
    avgRating: number;
    veg: boolean;
    sla: {
      deliveryTime: number;
    };
    imageId: string;
    avgRatingString: string;
  };
};

type itemCard = {
  card: {
    info: {
      id: string;
      name: string;
      Category: string;
      price: number;
    };
  };
};

type Category = {
  title: string;
  itemCards: itemCard[];
};
