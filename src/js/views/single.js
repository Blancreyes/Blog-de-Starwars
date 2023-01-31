import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import LearMore from "../component/learnMore.jsx";
import { useLocation } from 'react-router-dom';



export const Single = props => {
	const { store, actions } = useContext(Context);
	const {type, theid} = useParams();
	const [infocharacter, setInfoCharacter] = useState({})
    const params = useParams();
	let location = useLocation();
	
	console.log(params.type)

	function getInfo () {

        https://swapi.dev/api/people
        fetch(`https://www.swapi.tech/api/${type}/${theid}`)
        .then(res => res.json())
		.then(data => setInfoCharacter(data.result))
		.catch(err => console.error(err))
        
    }

	useEffect(()=>{
		getInfo()
	},[])

	console.log(infocharacter.properties?.name);	

	var loginLearMoreButton;
	if (params.type==="people") {loginLearMoreButton = <LearMore />;
	} else if(params.type==="vehicle") {
	  loginLearMoreButton = <LearMore />;
	} else (loginLearMoreButton = <LearMore />)
		
	return (
		<>
			{loginLearMoreButton}
			

			<div className="py-2 d-flex justify-content-center">
				<Link to="/">
					<span className="btn btn-lg btn-primary justify-content-center" href="#" role="button">
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
