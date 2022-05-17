
import './App.css'
import Button from './components/Button'

function App() {

	return (
		<div className="container">
			<h1>Buttons</h1>

			<div className='container-buttons'>
				<h2>Default</h2>
				<Button text="Default" />
			</div>
			<div className='container-buttons'>
				<h2>Outline</h2>
				<Button text="Default" variant='outline' />
			</div>
			<div className='container-buttons'>
				<h2>Text</h2>
				<Button text="Default" variant='text' />
			</div>
			<div className='container-buttons'>
				<h2>Disable Shadow</h2>
				<Button text="Default" variant='primary' disableShadow />
			</div>

			<div className='container-buttons'>
				<h2>Disabled Button</h2>
				<Button text="Default" disabled />
			</div>
		</div>
	)
}

export default App
