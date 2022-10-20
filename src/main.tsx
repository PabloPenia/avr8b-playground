import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App'

const rootEl = document.getElementById('app')
if (!rootEl) throw new Error('Failed to find the root element.')

const root = createRoot(rootEl) // add non null assertion or cast as HTMLElement if gives error in the future

root.render(
	<StrictMode>
		<App />
	</StrictMode>
)
