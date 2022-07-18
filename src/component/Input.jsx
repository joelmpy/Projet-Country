import { useState, useEffect } from "react";
import Country from "./Country";
import Card from "./Card";

function Input() {
  const [contiant, setContiant] = useState([]);
  const [select, setSelect] = useState("");
  const [countries, setCountries] = useState([]);
  const [actifCountry, setActifCountry] = useState([false, []]);

  useEffect(() => {
  contiantAll()
  }, [contiant]);

  const contiantAll = () => {
	const url = "https://restcountries.com/v3.1/all";
    fetch(url).then((reponse) =>
      reponse.json().then((result) => {
        setCountries(result);
      })
    );
  }

  const searchApi = (event) => {
	if (event.target.value === "All"){
		contiantAll()
	}else {
		setActifCountry([false, []]);
		setSelect(event.target.value);
		fetch(`https://restcountries.com/v3.1/region/${event.target.value}`).then(
		  (reponse) =>
			reponse.json().then((result) => {
			  // setContiant(result)
			  setCountries(result);
			})
		);

	}

	
  };

  const searchBar = (event) => {
    setActifCountry([false, []]);

    setSelect(event.target.value);
    fetch(`https://restcountries.com/v3.1/name/${event.target.value}`).then(
      (reponse) =>
        reponse.json().then((result) => {
          // setContiant(result)
          setCountries(result);
        })
    );
  };

  const openFlag = (country) => {
    setActifCountry([true, country]);
    console.log(actifCountry);
  };

  const closeFlag = () => {
    setActifCountry([false, []]);
  };
  return (
    <section className="input-continent">
      <div className="input-top">
        {actifCountry[0] ? (
          <span
            class="material-icons"
            style={{ fontSize: "80px", cursor: "pointer" }}
            onClick={closeFlag}
          >
            arrow_back
          </span>
        ) : null}
        <input onChange={searchBar} type="text" placeholder="Exemple : Spain" />
        <div className="select-continent">
          <select onChange={searchApi}>
		  <option value="All">All</option>
            <option value="Africa">Afrique</option>
            <option value="Asia">Asie</option>
            <option value="Europe">Europe</option>
            <option value="Americas">Amérique</option>
            <option value="Oceania">Océanie</option>
            
          </select>
        </div>
      </div>

      {actifCountry[0] ? (
        <Card data={actifCountry[1]} />
      ) : countries.length > 0 ? (
        <Country openFlag={openFlag} countries={countries} />
      ) : (
        <p className="messagError">
          Il y aucun resultat pour la recherche "{select}"
        </p>
      )}
    </section>
  );
}

export default Input;
