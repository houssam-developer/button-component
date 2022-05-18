import './Select.scss';


function Select({ handleChangeEvent }) {
	return (
		<div className="container-select">
			<h2>Variant Selection</h2>
			<select className="select" name="buttons" onChange={handleChangeEvent}>
				<option value="default">Default</option>
				<option value="outline">Outline</option>
				<option value="text">Text</option>
			</select>
		</div>
	)
}

export default Select