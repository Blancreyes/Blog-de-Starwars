import React from "react";
import "../../styles/home.css";
import Characters from "./characters.js";
import Planets from "./planets.js";
import Vehicles from "./vehicles.js";




export const Home = () => {

    return ( 
      <>
        <Characters />
        <Planets/>
        <Vehicles/>
    </>
    );
};