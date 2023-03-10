import React, {useContext} from "react";
import { Link } from "react-router-dom";
import banner from "../../img/Star-wars-logo.png"
import { Context } from "../store/appContext";

export const Navbar = () => {

	const {store,actions} = useContext(Context);
	console.log(store.favorites)
	
	return (

		
			<nav className="navbar bg-body-tertiary d-flex justify-content-between">
				<div className="container">
					<Link to="/">
						<span className="navbar-brand mb-0">
							<img className="object-fit-contain" style={{height: "100px"}} src="https://www.aaddpa.org/ckfinder/userfiles/files/starwars.png"/>
						</span>
							
					</Link>

					
				<div className="btn-group">
					<button type="button" className="btn btn-primary">Favorites
						<span className="badge text-bg-secondary ms-1">{store.favorites.length}</span>
					</button>
					<button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
						<span className="visually-hidden">Toggle Dropdown</span>
					</button>
					<ul className="dropdown-menu">
						{store.favorites.map((item, index)=><li className="dropdown-item" key={index}>{item} <i className="fa fa-trash" aria-hidden="true" onClick={()=>actions.deleteItem(item)}></i></li>
						)
						
						
						}
					</ul>
				</div>
					
					
								
				</div>
				
			</nav>
		
			




	);
};
