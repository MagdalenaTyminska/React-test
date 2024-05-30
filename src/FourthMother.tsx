import { FourthLight } from './FourthLight'
import { FourthDark } from './FourthDark'
import { useState } from 'react'

export const FourthMother = () => {
	const [isTurnedOn, setTurnedOn] = useState(false)

	const toggleLight = () => {
		setTurnedOn((prevTurnedOn) => !prevTurnedOn)
	}

	return (
		<>
			<button onClick={toggleLight}>
				{isTurnedOn ? `Turn off` : `Turn on`}
			</button>
			{isTurnedOn ? <FourthLight /> : <FourthDark />}
		</>
	)
}
