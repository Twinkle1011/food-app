type card0 = {
  card: {
    card: {
      ["@type"]: string;
      info: {
        id: string;
        name: string;
        cloudinaryImageId: string;
        costForTwoMessage: string;
        cuisines: string[];
      };
    };
  };
};

type card1 = {};
export type itemCard = {
  card: {
    info: {
      id: string;
      imageId: string;
      name: string;
      category: string;
      description: string;
      price: number;
    };
  };
};
export type CardDetails = {
  title: string;
  ["@type"]: string;
  itemCards: itemCard[];
};
type card = {
  card: {
    card: CardDetails;
  };
};
type card2 = {
  groupedCard: {
    cardGroupMap: {
      REGULAR: {
        cards: card[];
      };
    };
  };
};
export type MenuList = {
  // cards[3]0,2
  cards: [card0, card1, card2];
};
