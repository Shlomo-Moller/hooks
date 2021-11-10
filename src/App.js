import logo from './logo.svg'
import './App.css'
import HookRuleTest from './components/React Hooks/HookRuleTest'
import Fieldset from './components/Fieldset'
import LogHi from './components/useEffect/LogHi'
import Counter from './components/useEffect/Counter'
import Cleanup from './components/useEffect/Cleanup'
import FriendStatus from './components/useEffect/friendStatus/FriendStatus'
import { friend } from './components/useEffect/friendStatus/util'
import Lifecycle from './components/useEffect/lifecycle/Lifecycle'
import FriendsList from './components/Custom Hooks/FriendsList'
import FriendStatusV2 from './components/Custom Hooks/FriendStatusV2'
import StatusControls from './components/useEffect/friendStatus/StatusControls'

const App = () => {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My React App About React Hooks</p>
      </header>

      <div className='App-body'>
        <h1>Code Examples</h1>

        <h2>React Hooks</h2>
        <Fieldset legend='HookRuleTest'><HookRuleTest                 /></Fieldset>

        <h2>useEffect</h2>
        <Fieldset legend='LogHi'         ><LogHi                        /></Fieldset>
        <Fieldset legend='Counter'       ><Counter                      /></Fieldset>
        <Fieldset legend='Cleanup'       ><Cleanup                      /></Fieldset>
        <Fieldset legend='StatusControls'><StatusControls               /></Fieldset>
        <Fieldset legend='FriendStatus'  ><FriendStatus friend={friend} /></Fieldset>
        <Fieldset legend='Lifecycle'     ><Lifecycle                    /></Fieldset>

        <h2>Custom Hooks</h2>
        <Fieldset legend='FriendsList'   ><FriendsList                    /></Fieldset>
        <Fieldset legend='FriendStatusV2'><FriendStatusV2 friend={friend} /></Fieldset>

      </div>
    </div>
  )
}

export default App
