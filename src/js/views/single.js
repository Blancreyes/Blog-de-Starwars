import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import LearMore from "../component/learnMore.jsx";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const {type, theid} = useParams();
	

	function getInfo () {

        https://swapi.dev/api/people
        fetch(`https://www.swapi.tech/api/${type}/${theid}`)
        .then(res => res.json())
		.then(data => console.log(data))
		.catch(err => console.error(err))
        
    }

	useEffect(()=>{
		getInfo()
	},[])

	return (
		<>
			<LearMore
				
			/>

			<div className="py-2">
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
				
		</>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
