function Card(props) {
  return (
    <article className="cards">
      <div className="cards-flag">
        <h1>{props.data.name.common}</h1>
        <img src={props.data.flags.png} />
        <div className="cards-details">
          <h4>
            <span
              className="material-icons"
              style={{ height: "100xpx", marginRight: "10px" }}
            >
              public
            </span>
            Region : <span>{props.data.region}</span>
          </h4>
          <h4>
            <span
              class="material-icons"
              style={{ height: "100xpx", marginRight: "10px" }}
            >
              flag
            </span>
            Capital : <span>{props.data.capital}</span>
          </h4>
          <h4>
            <span
              class="material-icons"
              style={{ height: "100xpx", marginRight: "10px" }}
            >
              person
            </span>
            Population :{" "}
            <span>
              {String(props.data.population).replace(
                /(.)(?=(\d{3})+$)/g,
                "$1,"
              )}{" "}
              {props.data.population > 1000000 ? "millions" : "millier"}{" "}
              d'habitants
            </span>
          </h4>

          <h4>
            <span
              class="material-icons"
              style={{ height: "100xpx", marginRight: "10px" }}
            >
              flag
            </span>
            Subregion: <span>{props.data.subregion}</span>
          </h4>
          <h4>
            <span
              class="material-icons"
              style={{ height: "100xpx", marginRight: "10px" }}
            >
              translate
            </span>
            languages :{" "}
            <span>
              {Object.keys(props.data.languages).map((key) => {
                console.log(key);
                return key + " ";
              })}
            </span>
          </h4>

          <h4>
            <iframe className="maps"
              src={props.data.maps.googleMaps}
             
            ></iframe>
          </h4>
        </div>
      </div>
    </article>
  );
}

export default Card;
