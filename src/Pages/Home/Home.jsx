import { useLoaderData } from "react-router-dom";
import { CardCoffee } from "../../Components/CardCoffee";
import { useState } from "react";
import { Banner } from "../Banner";
import { SubBanner } from "../SubBanner";
import { Follow } from "../Follow";

export const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className>
      <Banner></Banner>
      <SubBanner></SubBanner>
      <h1 className="text-center text-4xl font-bold mb-10 font-rancho">
        Our Popular Products
      </h1>
      <div className="grid max-sm:grid-cols-1 grid-cols-2  gap-6">
        {coffees.map((coffee) => (
          <CardCoffee
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CardCoffee>
        ))}
      </div>
       <Follow></Follow>
    </div>
  );
};
