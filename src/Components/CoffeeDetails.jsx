import { useLoaderData } from "react-router-dom";

export const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { name, chef, supplier, taste, category, details, price, photo } =
    coffee;
  return (
    <div className="md:w-4/5 mx-auto rounded-md bg-[#F4F3F0] my-10">  
      <div className="flex items-center gap-6">
        <div className="w-1/2 p-10">
          <img src={photo} alt="coffee" className="w-60 h-96 mx-auto" />
        </div>
        <div className="">
          <h1 className="text-2xl font-bold">Niceties</h1>
         <h2 className="text-xl my-1"><span className="font-semibold">Name :</span> {name}</h2>
          <p className="text-xl mb-1"><span className="font-semibold">Chef :</span> {chef}</p>
          <p className="text-xl mb-1"><span className="font-semibold">Supplier :</span> {supplier}</p>
          <p className="text-xl mb-1"><span className="font-semibold">Taste :</span> {taste}</p>
          <p className="text-xl mb-1"><span className="font-semibold">Price :</span> {price} Taka</p>
          <p className="text-xl mb-1"><span className="font-semibold">Category :</span> {category}</p>
          <p className="text-xl mb-1"><span className="font-semibold">Details :</span> {details}</p>
        </div>
      </div>
    </div>
  );
};
