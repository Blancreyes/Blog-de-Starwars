import React from "react";
import "../../styles/home.css";
import Card from "../component/card.jsx";




const Characters = () => {

    return (
        <div className="container mt-3">
                <h3 className="text-warning text-start">Characters</h3>
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
export default Characters