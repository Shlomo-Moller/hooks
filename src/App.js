import logo from './logo.svg'
import './App.css'
import HookRuleTest from './components/HookRuleTest'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My React App About React Hooks</p>
      </header>
      This is the body.
      <HookRuleTest />
    </div>
  )
}

export default App
