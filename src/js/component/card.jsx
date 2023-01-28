import React from "react";
import { Link } from "react-router-dom";


const Card = (props) => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	// const basename = process.env.BASENAME || "";

	return (
		<div className="card col-md-3 col-sm-4 ms-4">
            <img src={props.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.property2}</p>
            </div>

            <div class="d-grid gap-2 d-md-flex justify-content-md-around py-4">
                <Link to="/single">
                <button className="btn btn-outline-primary">Learn more!</button>
                </Link>
                
                <button className="btn btn-outline-warning"><i className="fa fa-heart"></i></button>
            </div>
        </div>
	);
};

export default Card;