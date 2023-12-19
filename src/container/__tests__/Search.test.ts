import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../Mocks/RestaurantListMock1.json"
import { BrowserRouter, BrowserRouterProps } from "react-router-dom";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";


global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json : () =>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should ender the body component with search button",async()=>{
  
    await act(async ()=> render(
        <BrowserRouter>
        <Body />
        </BrowserRouter>
        ));
        
        const searchBtn = screen.getByRole("button", {name:"Search"});
        const searchInput = screen.getByTestId("searchInput");

        fireEvent.change(searchInput,{target : {value: "pizza"} });
        fireEvent.click(searchBtn);
       const cards = screen.getAllByTestId("resCard");
       expect(cards.length).toBe(1);
        
    });