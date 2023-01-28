import React from "react";
import { Link } from "react-router-dom";
import banner from "../../img/Star-wars-logo.png"

export const Navbar = () => {
	return (

		
			<nav className="navbar bg-body-tertiary d-flex justify-content-between">
				<div className="container">
					<Link to="/">
						<span className="navbar-brand mb-0">
							<img className="object-fit-contain" style={{height: "100px"}} src="https://www.aaddpa.org/ckfinder/userfiles/files/starwars.png"/>
						</span>
							
					</Link>

					<Link to="demo">
						<div className="btn-group">
							<button type="button" className="btn btn-primary">Favorites
								<span className="badge text-bg-secondary ms-1">0</span>
							</button>
							<button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
								<span className="visually-hidden">Toggle Dropdown</span>
							</button>
							<ul className="dropdown-menu">
								<li className="dropdown-item">Something else here</li>
								<li className="dropdown-item">Something else here</li>
								<li className="dropdown-item">Something else here</li>
								<li className="dropdown-divider"></li>
								<li className="dropdown-item" >Separated link</li>
							</ul>
						</div>
					</Link>
					
								
				</div>
				
			</nav>
		
			




	);
};
