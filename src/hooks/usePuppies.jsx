import { useState, useEffect } from "react";
import axios from "axios";
import { TOKEN } from "../constants/index";

const usePupies = () => {
  const [dogs, setDogs] = useState([]);

  const handlePuppies = async () => {
    const res = await axios({
      method: "GET",
      url: "https://puppies-service.onrender.com/api/v1/dogs/allDogs",
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    setDogs([...res.data]);
  };

  useEffect(() => {
    handlePuppies();
  }, []);

  return {
    dogs,
  };
};

export default usePupies;
