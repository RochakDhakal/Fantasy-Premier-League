import React from "react";
import "./style.css";

function Home() {
  return (
    <div className="h-screen pl-background flex justify-center items-center">
      <div className="grid md:grid-cols-2 h-4/6 w-4/6">
        <div className="bg-red-500 p-5 pl-logo position-size hover-cursor">
          Fantasy Premier League
        </div>
        <div className="bg-blue-500 p-5 pl-logo position-size hover-cursor">
          Fixtures
        </div>
        <div className="bg-green-400 p-5 pl-logo position-size hover-cursor">
          Players
        </div>
        <div className="bg-yellow-300 p-5 pl-logo position-size hover-cursor">
          Live
        </div>
      </div>
    </div>
  );
}

export default Home;
