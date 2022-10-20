import './simulator.styles.scss'

import Led from '../led/led.component'

// type SimulatorProps = {}

const Simulator = (/*: SimulatorProps */) => (
	<div className='l-Simulator'>
		<h1>Simulador</h1>
		<Led color='red' name='Led 1' port={13} />
		<Led color='green' name='Led 2' port={12} />
	</div>
)

export default Simulator
