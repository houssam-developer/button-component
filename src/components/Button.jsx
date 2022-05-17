import React from 'react'


function Button({ text, variant = 'default', disableShadow, disabled }) {
	// TODO guard clause in case of incorrect variant


	console.log(`#text: ${text} #variant: ${variant} #disableShadow: ${disableShadow} #disabled: ${disabled} `);

	if (variant === '') { variant = 'default'; }
	let setClassNames = `btn btn--${variant}`;

	if (disableShadow) { setClassNames = `${setClassNames} btn--disableshadow` }

	function handleBtnClickEvent(e) {
		console.log('click');
	}

	return (
		<button className={setClassNames} disabled={disabled} onClick={handleBtnClickEvent}>{text}</button>
	)
}

export default Button;