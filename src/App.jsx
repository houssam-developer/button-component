
import { useEffect, useRef, useState } from 'react';
import './App.css'
import Button from './components/Button'
import Footer from './components/Footer'
import Select from './components/Select';
import ToggleButton from './components/ToggleButton'


function App() {
	const [targetVariant, setTargetVariant] = useState('default');
	const [targetIcon, setTargetIcon] = useState('MdAddShoppingCart');
	const [disableShadow, setDisableShadow] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [variantOptions, setVariantOptions] = useState([]);
	const [iconsOptions, setIconsOptions] = useState([]);

	useEffect(() => {
		setVariantOptions(['Default', 'Outline', 'Text']);
		setIconsOptions(['MdAddShoppingCart', 'MdAccountCircle', 'MdDns', 'MdMarkunreadMailbox', 'MdQuestionAnswer']);
	}, []);

	function handleCheckEvent(e) {
		console.log('checkEvent #checked: ', e.target.checked);
		setDisableShadow(e.target.checked);
	}

	function handleVariantEvent(e) {
		const targetSelect = e.target; // target is the element that emits the event
		const targetOption = targetSelect.options[targetSelect.selectedIndex].value;
		setTargetVariant(targetOption.toLowerCase());
	}

	function handleIconOptionEvent(e) {
		console.log('iconEvent: ', e);
		const targetSelect = e.target; // target is the element that emits the event
		const targetOption = targetSelect.options[targetSelect.selectedIndex].value;
		setTargetIcon(targetOption);
	}

	return (
		<div className="container">
			<h1>Buttons</h1>
			<div className="container-box">
				<Select text='Variant' options={variantOptions} handleChangeEvent={handleVariantEvent} />
				<div className="container-buttons">
					<Button text="Default" variant={targetVariant} color='default' />
					<Button text="Default" variant={targetVariant} color='primary' />
					<Button text="Default" variant={targetVariant} color='secondary' />
					<Button text="Default" variant={targetVariant} color='danger' />
				</div>
			</div>
			<div className='container-box'>
				<h2>Default</h2>
				<Button text="Default" />
			</div>
			<div className='container-box'>
				<h2>Outline</h2>
				<div className="container-buttons">
					<Button text="Default" variant='outline' color='default' />
					<Button text="Default" variant='outline' color='primary' />
					<Button text="Default" variant='outline' color='secondary' />
					<Button text="Default" variant='outline' color='danger' />
				</div>
			</div>
			<div className='container-box'>
				<h2>Text</h2>
				<div className="container-buttons">
					<Button text="Default" variant='text' color='default' />
					<Button text="Default" variant='text' color='primary' />
					<Button text="Default" variant='text' color='secondary' />
					<Button text="Default" variant='text' color='danger' />
				</div>
			</div>
			<div className='container-box'>
				<h2>Disable Shadow</h2>
				<div className="container-buttons">
					<ToggleButton handleOnClick={(e) => setDisableShadow(e.target.checked)} />
					{/* useState for disableShadow */}
					<Button text="Default" color='' disableShadow={disableShadow} />
				</div>
			</div>

			<div className='container-box'>
				<h2>Disabled Button</h2>
				<div className='container-buttons'>
					<ToggleButton handleOnClick={(e) => setDisabled(e.target.checked)} />
					<Button text="Default" disabled={disabled} variant='text' />
				</div>
			</div>

			<div className='container-box'>
				<h2>Icon Button</h2>
				<div className='container-buttons'>
					<Button text="Default" color='primary' startIcon='MdAddShoppingCart' />
					<Button text="Default" color='primary' endIcon='MdAddShoppingCart' />
				</div>
			</div>

			<div className="container-box">
				<Select text='Icon' options={iconsOptions} handleChangeEvent={handleIconOptionEvent} />
				<h3>Choose position</h3>
				<ToggleButton handleOnClick={(e) => setDisabled(e.target.checked)} />
				<div className="container-buttons">
					{
						disabled ? <Button text="Default" color='primary' startIcon={targetIcon} />
							: <Button text="Default" color='primary' endIcon={targetIcon} />
					}
				</div>
			</div>

			<div className='container-box'>
				<h2>Size Button</h2>
				<div className='container-buttons'>
					<Button text="Default" variant='primary' size='sm' />
					<Button text="Default" variant='primary' />
					<Button text="Default" variant='primary' size='lg' />

				</div>
			</div>

			<div className='container-box'>
				<h2>Color Button</h2>
				<div className='container-buttons'>
					<Button text="Default" color='default' />
					<Button text="Primary" color='primary' />
					<Button text="Secondary" color='secondary' />
					<Button text="Danger" color='danger' />

				</div>
			</div>

			<Footer></Footer>
		</div>
	)
}

export default App
