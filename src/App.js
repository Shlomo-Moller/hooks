import logo from './logo.svg'
import './App.css'
import HookRuleTest from './components/React Hooks/HookRuleTest'
import CodeExample from './components/CodeExample'
import LogHi from './components/useEffect/LogHi'
import Counter from './components/useEffect/Counter'
import Cleanup from './components/useEffect/Cleanup'
import { friend } from './components/useEffect/friendStatus/util'
import FriendsList from './components/Custom Hooks/FriendsList'
import FriendStatusV2 from './components/Custom Hooks/FriendStatusV2'
import StatusControls from './components/useEffect/friendStatus/StatusControls'
import FriendControl from './components/useEffect/friendStatus/FriendControl'
import Lifecycle from './components/useEffect/lifecycle/V1/Lifecycle'
import LifecycleV2 from './components/useEffect/lifecycle/V2/LifecycleV2'
import Parent from './components/temp/Parent'

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
        <CodeExample title='HookRuleTest'><HookRuleTest /></CodeExample>

        <h2>useEffect</h2>

        <h3>The most classic example would be:</h3>

        <CodeExample title='Parent'><Parent /></CodeExample>

        <h3>More examples:</h3>

        <CodeExample title='LogHi'         ><LogHi          /></CodeExample>
        <CodeExample title='Counter'       ><Counter        /></CodeExample>
        <CodeExample title='Cleanup'       ><Cleanup        /></CodeExample>
        <CodeExample title='StatusControls'><StatusControls /></CodeExample>
        <CodeExample title='FriendControl' ><FriendControl  /></CodeExample>
        <CodeExample title='Lifecycle'     ><Lifecycle      /></CodeExample>
        <CodeExample title='LifecycleV2'   ><LifecycleV2    /></CodeExample>

        <h2>Custom Hooks</h2>
        <CodeExample title='FriendsList'   ><FriendsList                    /></CodeExample>
        <CodeExample title='FriendStatusV2'><FriendStatusV2 friend={friend} /></CodeExample>

      </div>
    </div>
  )
}

export default App
