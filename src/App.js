import './App.css'
import Hello from './components/Hello'
import Hellow from './components/Hellow'

function App() {
  return (
    <div className="App">
      <Hello />
      <Hello msg="React JS" />
      <Hello msg="Angular" madeBy="Google" />
      <Hellow />
      <Hellow msg="React JS" />
      <Hellow msg="ASP.Net" madeBy="Microsoft" />
    </div>
  )
}

export default App
