import {clsx} from 'clsx'
import {Route, Routes} from 'react-router-dom'

import Main from '@/pages/Main/Main.tsx'
import NotFound from '@/pages/NotFound/NotFound'

import styles from './App.module.scss'

import '@/styles/common.scss'

const App = () => {
	return (
		<div className={clsx(styles.app)}>
			<Routes>
				<Route element={<Main />} path='/' />
				<Route element={<NotFound />} path='*' />
			</Routes>
		</div>
	)
}

export default App
