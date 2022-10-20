import './led.styles.scss'

type LedProps = {
	color: string
	name?: string
	port: string | number
}

const Led = ({ color, name, port }: LedProps) => (
	<>
		<div className='led'>
			<div className='led__element' style={{ background: color }}></div>
		</div>
		<span className='led__port'>
			{name && `${name}:`} Port{port}
		</span>
	</>
)

export default Led
