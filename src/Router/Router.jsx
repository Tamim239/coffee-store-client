import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home/Home";
import { AddCoffee } from "../Components/AddCoffee";
import { UpdateCoffee } from "../Components/UpdateCoffee";
import { CoffeeDetails } from "../Components/CoffeeDetails";
import { SignIn } from "../Components/SignIn";
import { SignUp } from "../Components/SignUp";
import { Users } from "../Components/Users";
import { PrivateRouter } from "../Provider/PrivateRouter";
import { ErrorPage } from "../Shared/ErrorPage";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch('https://coffe-store-server-liart.vercel.app/coffee')
        },
        {
          path: "/coffeeDetails/:id",
          element: <PrivateRouter><CoffeeDetails></CoffeeDetails></PrivateRouter>,
          loader: ({params})=> fetch(`https://coffe-store-server-liart.vercel.app/coffee/${params.id}`)
        },
        {
          path: "/addCoffee",
          element: <PrivateRouter><AddCoffee></AddCoffee></PrivateRouter>,
        },
        {
          path: "/updateCoffee/:id",
          element: <PrivateRouter><UpdateCoffee></UpdateCoffee></PrivateRouter>,
          loader: ({params})=> fetch(`https://coffe-store-server-liart.vercel.app/coffee/${params.id}`)
        },
        {
          path: "/signIn",
          element: <SignIn></SignIn>
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>
        },
        {
          path: "/users",
          element: <PrivateRouter><Users></Users></PrivateRouter>,
          loader: ()=> fetch('https://coffe-store-server-liart.vercel.app/user')
        },
      ]
    }
  ]);