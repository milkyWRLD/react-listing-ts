import etsyJson from '../data/etsy.json'
import './App.css'
import Listing from './Listing'

function App() {
	return (
		<>
			<Listing items={etsyJson} />
		</>
	)
}

export default App
