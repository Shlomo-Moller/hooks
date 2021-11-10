import logo from './logo.svg'
import './App.css'
import HookRuleTest from './components/React Hooks Examples/HookRuleTest'
import Fieldset from './components/Fieldset'
import LogHi from './components/useEffect Examples/LogHi'
import Counter from './components/useEffect Examples/Counter'
import Cleanup from './components/useEffect Examples/Cleanup'
import FriendStatus from './components/useEffect Examples/friendStatus/FriendStatus'
import { friend } from './components/useEffect Examples/friendStatus/util'
import Lifecycle from './components/useEffect Examples/lifecycle/Lifecycle'

const App = () => {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My React App About React Hooks</p>
      </header>

      <div className='App-body'>
        <p>This is the body.</p>

        {/* The "guides\React Hooks.md" Section */}
        <Fieldset legend='HookRuleTest'><HookRuleTest                 /></Fieldset>

        {/* The "guides\useEffect.md" Section */}
        <Fieldset legend='LogHi'       ><LogHi                        /></Fieldset>
        <Fieldset legend='Counter'     ><Counter                      /></Fieldset>
        <Fieldset legend='Cleanup'     ><Cleanup                      /></Fieldset>
        <Fieldset legend='FriendStatus'><FriendStatus friend={friend} /></Fieldset>
        <Fieldset legend='Lifecycle'   ><Lifecycle                    /></Fieldset>

        {/* The "guides\Custom Hooks.md" Section */}

      </div>
    </div>
  )
}

export default App
