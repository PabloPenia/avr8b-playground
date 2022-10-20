import {
	avrInstruction,
	AVRTimer,
	CPU,
	timer0Config,
	timer1Config,
	timer2Config,
	AVRIOPort,
	AVRUSART,
	portBConfig,
	portCConfig,
	portDConfig,
	usart0Config,
} from 'avr8js'
import intelHexLoader from '../loaders/intelHexLoader'
import { MicroTaskScheduler } from '../task-scheduler'

// ATmega328p params
const FLASH = 0x8000
// todo: type tick()
export default function AVRRunner(hex: string) {
	const program = new Uint16Array(FLASH)
	const cpu = new CPU(program)
	const timer0 = new AVRTimer(cpu, timer0Config)
	const timer1 = new AVRTimer(cpu, timer1Config)
	const timer2 = new AVRTimer(cpu, timer2Config)
	const portB = new AVRIOPort(cpu, portBConfig)
	const portC = new AVRIOPort(cpu, portCConfig)
	const portD = new AVRIOPort(cpu, portDConfig)
	const speed = 16e6 // 16 MHZ
	const usart = new AVRUSART(cpu, usart0Config, speed)
	const workUnitCycles = 500000
	const taskScheduler = new MicroTaskScheduler()
	const hexLoaded = intelHexLoader(hex, new Uint8Array(this.program.buffer))

	taskScheduler.start()

	// CPU main loop
	const execute = (cb: (cpu: CPU) => void) => {
		const cyclesToRun = this.cpu.cycles + this.workUnitCycles
		while (cpu.cycles < cyclesToRun) {
			avrInstruction(this.cpu)
			cpu.tick()
		}

		cb(cpu)
		taskScheduler.postTask(() => execute(cb))
	}

	const stop = () => taskScheduler.stop()

	return { portB, portC, portD, usart, execute }
}
