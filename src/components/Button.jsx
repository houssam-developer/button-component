import React from 'react'


function Button({ text, variant = 'text' }) {
	// TODO guard clause in case of incorrect variant


	return (
		<button className={`btn btn--${variant}`}>{text}</button>
	)
}

export default Button;