import './App.css'
import Hello from './components/Hello'
import Hellow from './components/Hellow'
import {ArrowHello} from './components/ArrowHello'

function App() {
  return (
    <div className="App">
      <Hello />
      <Hello msg="React JS" />
      <Hello msg="Angular" madeBy="Google" />
      <Hellow />
      <Hellow msg="React JS" />
      <Hellow msg="ASP.Net" madeBy="Microsoft" />
      <ArrowHello />
    </div>
  )
}

export default App
