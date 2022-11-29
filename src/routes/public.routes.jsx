import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Dogs from "../pages/dogs";
import Dog from "../pages/dog";
import CreateDog from "../pages/createDog";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dogs" element={<Dogs />} />
      <Route path="/dogs/:dogId" element={<Dog />} />
      <Route path="/createdog" element={<CreateDog />} />
    </Routes>
  );
};

export default PublicRoutes;
