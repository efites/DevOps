import {useState} from 'react'

import {sum} from '@/utils/sum'

import styles from './Main.module.scss'

const Main = () => {
	const [count, setCount] = useState<number>(0)

	const setCountHandler = () => {
		const result = sum(1, 1)
		setCount(prev => prev + result)
	}

	return (
		<div className={styles.main}>
			Main page
			<div>{count}</div>
			<button type='button' onClick={setCountHandler}>
				Sum!
			</button>
		</div>
	)
}

export default Main
