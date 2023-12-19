import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import appStore from "src/utils/appStore";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

it("should render login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
        );

        const loginButton= screen.getByText("login");
        expect(loginButton).toBeInTheDocument();
});