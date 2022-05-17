import React from 'react';
import * as MdIcons from 'react-icons/md';

function Button({ text, variant = 'default', disableShadow, disabled, startIcon = '', endIcon = '' }) {
	// TODO guard clause in case of incorrect variant


	console.log(`#text: ${text} #variant: ${variant} #disableShadow: ${disableShadow} #disabled: ${disabled} `);

	if (variant === '') { variant = 'default'; }
	let setClassNames = `btn btn--${variant}`;

	if (disableShadow) { setClassNames = `${setClassNames} btn--disableshadow` }
	if (disabled) { setClassNames = `${setClassNames} btn--disabled` }

	let startIconVal;
	let endIconVal;

	if (startIcon) {
		try {
			startIconVal = MdIcons[startIcon]();
		} catch (ex) {
			console.log('unknown icon name');
		}
	}
	if (endIcon) {
		try {
			endIconVal = MdIcons[endIcon]();
		} catch (ex) {
			console.log('unknown icon name');
		}
	}

	function handleBtnClickEvent(e) { console.log('click'); }

	return (
		<button className={setClassNames} disabled={disabled} onClick={handleBtnClickEvent}>
			{startIcon ? startIconVal : ''}
			{text}
			{endIcon ? endIconVal : ''}
		</button>
	)
}

export default Button;