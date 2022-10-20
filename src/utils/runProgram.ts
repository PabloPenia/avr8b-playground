import AVRRunner from './runners/AVRRunner'

export function runProgram(hex: string) {
	const runner = AVRRunner(hex)
	const MHZ = 16000000

	// Hook to PORTB register
	runner.portB.addListener(() => {
		// led12.value = runner.portB.pinState(4) === PinState.High
		// led13.value = runner.portB.pinState(5) === PinState.High
	})
	runner.usart.onByteTransmit = (value) => {
		// serialOutputText.textContent += String.fromCharCode(value)
	}
	// const cpuPerf = new CPUPerformance(runner.cpu, MHZ)
	runner.execute((cpu) => {
		// const time = formatTime(cpu.cycles / MHZ)
		// const speed = (cpuPerf.update() * 100).toFixed(0)
		// statusLabel.textContent = `Simulation time: ${time} (${speed}%)`
	})
}
