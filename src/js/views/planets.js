import React from "react";
import "../../styles/home.css";
import Card from "../component/card.jsx";




const Planets = () => {

    return (
        <div className="container mt-3">
                <h3 className="text-warning text-start">Planets</h3>
            <div className="d-flex flex-row overflow-scroll">
               
                    <Card/> 
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
           
                
            </div>
        </div>
    )


};
export default Planets