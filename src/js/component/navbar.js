import React from "react";
import { Link } from "react-router-dom";
import banner from "../../img/Star-wars-logo.png"

export const Navbar = () => {
	return (
		<nav className="navbar bg-body-tertiary d-flex justify-content-between">
			<div class="container">
				<Link to="/">
					<img className="navbar-brand mb-0 h1" src={banner}/>
				</Link>

				<Link to="demo">
					<div class="btn-group">
						<button type="button" class="btn btn-primary">Favorites</button>
						<button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
							<span class="visually-hidden">Toggle Dropdown</span>
						</button>
						<ul class="dropdown-menu">
							<li class="dropdown-item">Something else here</li>
							<li class="dropdown-item">Something else here</li>
							<li class="dropdown-item">Something else here</li>
							<li class="dropdown-divider"></li>
							<li class="dropdown-item" >Separated link</li>
						</ul>
					</div>
				</Link>
				
							
			</div>
			
		</nav>




	);
};
