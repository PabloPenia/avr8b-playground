import './theme/App.scss'
import CodeEditor from './components/code-editor/code-editor.component'
import Simulator from './components/Simulator/simulator.component'

function App() {
	return (
		<main>
			<CodeEditor />
			<Simulator />
		</main>
	)
}
export default App

// export default function App() {
// 	const [ledState, setLedState] = useState(false)

// 	const runCode = async () => {
// 		// Compile the arduino source code
// 		const result = await fetch('https://hexi.wokwi.com/build', {
// 			method: 'post',
// 			body: JSON.stringify({ sketch: arduinoCode }),
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		})
// 		const { hex, stderr } = await result.json()
// 		if (!hex) {
// 			alert(stderr)
// 			return
// 		}
// 		const { data } = parse(hex)
// 		const progData = new Uint8Array(data)
// 		console.log(data)
// 		// Set up the simulation
// 		const cpu = new CPU(new Uint16Array(progData.buffer))
// 		// Attach the virtual hardware
// 		const port = new AVRIOPort(cpu, portDConfig)
// 		port.addListener(() => {
// 			const turnOn = port.pinState(7) === PinState.High
// 			setLedState(turnOn)
// 			console.log('LED', turnOn)
// 		})
// 		const timer = new AVRTimer(cpu, timer0Config)
// 		// Run the simulation
// 		while (true) {
// 			for (let i = 0; i < 500000; i++) {
// 				avrInstruction(cpu)
// 				timer.tick()
// 			}
// 			await new Promise((resolve) => setTimeout(resolve))
// 		}
// 	}

// 	return (
// 		<div className='App'>
// 			<h1>Arduino Simulator</h1>
// 			<wokwi-led color='red' value={ledState ? true : ''} />
// 			<button onClick={runCode}>Run</button>
// 			<textarea
// 				value={arduinoCode}
// 				readOnly
// 				style={{ width: '100%' }}
// 				rows='20'
// 			/>
// 		</div>
// 	)
// }
