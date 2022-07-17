function Card (props) {
	return (
	<div>
	<h1>{props.data.name.common}</h1>
    <img src={props.data.flags.png}/>
	</div>	
	)
}

export default Card