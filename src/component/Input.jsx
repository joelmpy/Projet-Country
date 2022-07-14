import { useState, useEffect } from 'react'
import Country from './Country';

function Input() {

	const [contiant, setContiant] = useState([])
	const [select, setSelect] = useState("");
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const url = "https://restcountries.com/v3.1/all";
		fetch(url).then((reponse) =>
			reponse.json().then((result) => {
				setCountries(result);
			})
		);
	}, [contiant]);



	const searchApi = (event) => {
		setSelect(event.target.value)
		fetch(`https://restcountries.com/v3.1/region/${event.target.value}`)
			.then(reponse => reponse.json()
				.then(result => {
					// setContiant(result)
					setCountries(result)
				}
				))
	}

	const searchBar = (event) => {
		setSelect(event.target.value)
		fetch(`https://restcountries.com/v3.1/name/${event.target.value}`)
			.then(reponse => reponse.json()
				.then(result => {
					// setContiant(result)
					setCountries(result)
				}
				))
	}
	return (
		<section className="input-continent">
			<div className="input-top">
			<input onChange={searchBar} type="text" placeholder="Exemple : France" />
			<div className="select-continent">
				<select onChange={searchApi}>
					<option value="Africa">Afrique</option>
					<option value="Asia">Asie</option>
					<option value="Europe">Europe</option>
					<option value="Americas">Amérique</option>
					<option value="Oceania">Océanie</option>
				</select>
			</div>
			</div>

			{
				countries.length > 0 ?
					<Country countries={countries} />
					: <p className="messagError">Il y aucun resultat pour la recherche "{select}"</p>
			}
		</section>
	) 
}

export default Input