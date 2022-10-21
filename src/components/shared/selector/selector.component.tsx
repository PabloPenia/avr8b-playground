// import './Selector.styles.scss'

import { ChangeEvent, useState } from 'react'
import { preview } from 'vite'

type SelectorProps = {
	options: string[]
	label: string
	handler: (key: string, val: string) => void
}

const Selector = ({ label, options, handler }: SelectorProps) => {
	const [selectedOption, setSelectedOption] = useState<string>(options[0])

	// This function is triggered when the select changes
	const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value
		setSelectedOption(value)
		handler(label, value)
	}
	return (
		<div className='selector'>
			<label htmlFor='select'>{label}: </label>
			<select name='select' onChange={handleChange}>
				{options.map((option) => (
					<option
						key={option}
						value={option}
						selected={option === selectedOption}
					>
						{option}
					</option>
				))}
			</select>
		</div>
	)
}
export default Selector
