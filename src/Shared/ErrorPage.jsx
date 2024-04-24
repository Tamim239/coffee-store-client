import { Link } from "react-router-dom";
import error from "../assets/404/404.gif";

export const ErrorPage = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        <img src={error} alt="" className="h-96 object-cover"/>
      </div>
      <div className="text-center">
        <Link to="/">
          <button className="btn bg-black text-white">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
};
