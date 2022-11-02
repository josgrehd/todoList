import { element } from "prop-types";
import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {

	const [datos, setDatos] = useState([])


	const getListado= () =>{
		let request = {
			method: "GET", 
			redirect:"follow"
		}
		fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', request)
		.then((resp) => {resp.json()
		.then(result => {setDatos(result)})
		}).catch(error => {
			//manejo de errores
			console.log(error);
		})
	}
		
	return (
		<>
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<button onClick={getListado}>obtener listado</button>
			{datos.map(elment=>{<p>{elment.label}</p>
						console.log(elment.label)} )}
		</div>
		</>
	);
};

	

export default Home;
