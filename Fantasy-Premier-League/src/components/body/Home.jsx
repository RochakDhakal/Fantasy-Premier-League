import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const [fpldata, setFpldata] = useState([]);

  const PARAMS = {
    method: "GET",
    url: `${
      import.meta.env.VITE_BASE_URL
    }bootstrap-static/`,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  };
  const getData = async () => {
    try {
      const response = await axios(PARAMS);
      console.log("Response", response.data);
    } catch (e) {
      console.log("Error",e)
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="h-screen pl-background flex justify-center items-center">
      <div className="grid md:grid-cols-2 h-4/6 w-4/6">
        <div
          className="bg-red-500 p-5 pl-logo position-size hover-cursor"
          onClick={() => navigate("/fplstats")}
        >
          Fantasy Premier League
        </div>
        <div
          className="bg-blue-500 p-5 pl-logo position-size hover-cursor"
          onClick={() => navigate("/fixtures")}
        >
          Fixtures
        </div>
        <div
          className="bg-green-400 p-5 pl-logo position-size hover-cursor"
          onClick={() => navigate("/players")}
        >
          Players
        </div>
        <div
          className="bg-yellow-300 p-5 pl-logo position-size hover-cursor"
          onClick={() => navigate("/live")}
        >
          Live
        </div>
      </div>
    </div>
  );
}

export default Home;
