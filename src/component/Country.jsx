import "../App.css";

function Country(props) {
    
    return (
        <section className="grid">
            {props.countries.map((country) => {
                const { population, name, capital, region, flags } = country;
                return (
                    <article className="card">
                            <h3>{name.common}</h3>
                        <div  className="card-detail">
                            <img src={flags.png}></img>
                            <div className="details">
                                <h4>
                                    <span
                                        className="material-icons"
                                        style={{ height: "100xpx", marginRight: "10px" }}
                                    >
                                        public
                                    </span>
                                    Region : <span>{region}</span>
                                </h4>
                                <h4>
                                    <span
                                        class="material-icons"
                                        style={{ height: "100xpx", marginRight: "10px" }}
                                    >
                                        flag
                                    </span>
                                    Capital : <span>{capital}</span>
                                </h4>
                                <h4>
                                    <span
                                        class="material-icons"
                                        style={{ height: "100xpx", marginRight: "10px" }}
                                    >
                                        person
                                    </span>
                                    Population : <span>{String(population).replace(/(.)(?=(\d{3})+$)/g,'$1,') } { population> 1000000 ? "millions" : "millier"} d'habitants</span>
                                </h4>
                            </div>
                        </div>
                    </article>
                );
            })}
        </section>
    );
}

export default Country;
