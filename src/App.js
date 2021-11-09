import logo from './logo.svg'
import './App.css'
import HookRuleTest from './components/HookRuleTest'
import Fieldset from './components/Fieldset'
import LogHi from './components/LogHi'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My React App About React Hooks</p>
      </header>
      <div className='App-body'>
        <p>This is the body.</p>
        <Fieldset legend='HookRuleTest'><HookRuleTest /></Fieldset>
        <Fieldset legend='LogHi'       ><LogHi        /></Fieldset>
      </div>
    </div>
  )
}

export default App
