import { render,screen } from "@testing-library/react";
import MOCK_DATA from "../Mocks/RestaurantCardMock";


import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";

it("should show Restaurant Card",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);
   const name= screen.getByText("Jay Gopinath Khaman And Locho");
    expect(name).toBeInTheDocument();
});