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
	const [infoPlanet, setInfoPlanet] = useState({})
	const [infoVehicle, setInfoVehicle] = useState({})
    	const params = useParams();
	let location = useLocation();
	
	console.log(params.type)

	function getInfo () {

        fetch(`https://www.swapi.tech/api/${type}/${theid}`)
        .then(res => res.json())
		.then(data => setInfoCharacter(data.result))
		.catch(err => console.error(err))
        
    	}

	function getInfoPlanets() {
	
        fetch(`https://www.swapi.tech/api/${type}/${theid}`)
        .then(res => res.json())
		.then(data => setInfoPlanet(data.result))
		.catch(err => console.error(err))
        
   	 }
	
	function getInfoVehicles() {

   	fetch(`https://www.swapi.tech/api/${type}/${theid}`)
        .then(res => res.json())
        	.then(data => setInfoVehicle(data.result))
        	.catch(err => console.error(err))

    	useEffect(()=>{
		getInfo()
		getInfoPlanets()
		getInfoVehicles()
	},[])

	var loginLearMoreButton;
	if (params.type==="people") {
		loginLearMoreButton = <LearMore 
								key={infocharacter.uid}
								id={infocharacter.uid}
								image={`https://starwars-visualguide.com/assets/img/characters/${infocharacter.uid}.jpg`}
								name={infocharacter.properties?.name}
								description={infocharacter.description}
								property1={infocharacter.properties?.birth_year}
								property2={infocharacter.properties?.gender}
								property3={infocharacter.properties?.height}
								property4={infocharacter.properties?.skin_color}
								property5={infocharacter.properties?.eye_color}/>;
	} else if(params.type==="planets") {
	  loginLearMoreButton = <LearMore 
								key={infoPlanet.uid}
								id={infoPlanet.uid}
								image={`https://starwars-visualguide.com/assets/img/planets/${infoPlanet.uid}.jpg`}
								name={infoPlanet.properties?.name}
								description={infoPlanet.description}
								property1={infoPlanet.properties?.climate}
								property2={infoPlanet.properties?.population}
								property3={infoPlanet.properties?.orbital_period}
								property4={infoPlanet.properties?.rotation_period}
								property5={infoPlanet.properties?.diameter}
								/>;
	  
	} else (loginLearMoreButton = <LearMore 
								key={infoVehicle.uid}
								id={infoVehicle.uid}
								image={`https://starwars-visualguide.com/assets/img/vehicles/${infoVehicle.uid}.jpg`}
								name={infoVehicle.properties?.name}
								description={infoVehicle.description}
								property1={infoVehicle.properties?.model}
								property2={infoVehicle.properties?.vehicle_class}
								property3={infoVehicle.properties?.manufacturer}
								property4={infoVehicle.properties?.cost_in_credits}
								property5={infoVehiclet.properties?.max_atmosphering_speed}
	
	/>)
		
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
