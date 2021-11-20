import './App.css';
import {TimeoutLogic} from "./components/TimeoutLogic";

function App() {
  return (
    <div className="app">
      <div className="app-content">
        <h2>Session Timeout Modal Example</h2>
        <p>Please wait 5 seconds and the modal will pop up asking you to end your session</p>
        <p>You can either choose to</p>
        <ul>
          <li>AFK, it will redirect you to my personal website as a spoofed signout (implement your own version of this)</li>
          <li>Logout, it will do same as above</li>
          <li>Continue the session, it will reset timer</li>
        </ul>
      </div>
      <TimeoutLogic/>
    </div>
  );
}

export default App;
