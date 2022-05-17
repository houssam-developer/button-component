
import './App.css'
import Button from './components/Button'

function App() {

	return (
		<div className="container">
			<h1>Buttons</h1>

			<div className='container-box'>
				<h2>Default</h2>
				<Button text="Default" />
			</div>
			<div className='container-box'>
				<h2>Outline</h2>
				<Button text="Default" variant='outline' />
			</div>
			<div className='container-box'>
				<h2>Text</h2>
				<Button text="Default" variant='text' />
			</div>
			<div className='container-box'>
				<h2>Disable Shadow</h2>
				<Button text="Default" variant='primary' disableShadow />
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
					<Button text="Default" variant='primary' startIcon='MdAddShoppingCart' />
					<Button text="Default" variant='primary' endIcon='MdAddShoppingCart' />
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
		</div>
	)
}

export default App
