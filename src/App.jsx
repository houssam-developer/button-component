
import './App.css'
import Button from './components/Button'
import Footer from './components/Footer'
import ToggleButton from './components/ToggleButton'


function App() {

	function handleCheckEvent(e) {
		console.log('checkEvent #checked: ', e.target.checked);
	}

	return (
		<div className="container">
			<h1>Buttons</h1>
			<div className="container-box">
				<h2>Variant Selection</h2>
				<ToggleButton handleOnClick={handleCheckEvent} />
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
				<Button text="Default" color='primary' disableShadow />
			</div>

			<div className='container-box'>
				<h2>Disabled Button</h2>
				<div className='container-buttons'>
					<Button text="Default" disabled />
					<Button text="Default" disabled variant='text' />
				</div>
			</div>

			<div className='container-box'>
				<h2>Icon Button</h2>
				<div className='container-buttons'>
					<Button text="Default" color='primary' startIcon='MdAddShoppingCart' />
					<Button text="Default" color='primary' endIcon='MdAddShoppingCart' />
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
