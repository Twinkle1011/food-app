import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./container/Header";
import { Outlet } from "react-router-dom";
import Body from "./container/Body";
import About from "./container/About";
import Contact from "./container/Contact";
import Error from "./container/Error";
import RestaurantMenu from "./container/RestaurantMenu";
import Shimmer from "./container/Shimmer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import "./Index.css";
const Grocery = lazy(() => import("./container/Grocery"));

export function AppLayout() {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}
export function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/grocery",
          element: (
            <Suspense fallback={<Shimmer />}>
              {" "}
              <Grocery />{" "}
            </Suspense>
          ),
        },
        {
          path: "/restaurants/:resId",
          element: <RestaurantMenu />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
}
// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(<RouterProvider router={appRouter} />);
