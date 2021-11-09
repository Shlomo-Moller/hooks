import logo from './logo.svg'
import './App.css'
import HookRuleTest from './components/HooksWarningsExamples/HookRuleTest'
import Fieldset from './components/Fieldset'
import LogHi from './components/useEffectExamples/LogHi'
import Counter from './components/useEffectExamples/Counter'
import Cleanup from './components/useEffectExamples/Cleanup'

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
        <Fieldset legend='Counter'     ><Counter      /></Fieldset>
        <Fieldset legend='Cleanup'     ><Cleanup      /></Fieldset>
      </div>
    </div>
  )
}

export default App
