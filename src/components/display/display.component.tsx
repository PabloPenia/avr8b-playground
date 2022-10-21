// import './Display.styles.scss'

import Simulator from '../simulator/simulator.component'

// type DisplayProps = {}

const Display = (/*: DisplayProps */) => (
	<div className='display'>
		<div className='hardware'>
			<h2>Hardware</h2>
			<img src='assets/images/arduino_uno.png' alt='arduino uno board' />
		</div>
		<Simulator />
	</div>
)

export default Display
