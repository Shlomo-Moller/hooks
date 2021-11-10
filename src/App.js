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
        <Fieldset legend='FriendsList'   ><FriendsList                    /></Fieldset>
        <Fieldset legend='FriendStatusV2'><FriendStatusV2 friend={friend} /></Fieldset>

      </div>
    </div>
  )
}

export default App
