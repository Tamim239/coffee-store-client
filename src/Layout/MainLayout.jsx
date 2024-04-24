import { Outlet } from "react-router-dom";
import { Nav } from "../Shared/Nav";
import { Footer } from "../Shared/Footer";

export const MainLayout = () => {
  return (
    <div className="md:w-4/5 mx-auto">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
