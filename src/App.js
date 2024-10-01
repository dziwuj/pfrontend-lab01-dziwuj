import './App.css'
import CContents from './components/CContents'
import { CFooter } from './components/CFooter'
import CHeader from './components/CHeader'

function App() {
    return (
        <div className="App">
            <CHeader aName="Jan" aFamily="Kowalski" />
            <CContents />
            <CFooter weather="słoneczna" temp="25">
                <p>Niebo jest bezchmurne, wiatr słaby</p>
            </CFooter>
            {/* <CFooter weather="deszczowa" temp="13" />
            <CFooter weather="śnieżna" temp="-6" /> */}
        </div>
    )
}

export default App
