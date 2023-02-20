import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Stack } from 'react-bootstrap'
import { Link } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App tw-bg-red">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Stack gap={3} >
        <div>
          <button onClick={() => setCount((count) => count + 1)} style={{ width: "100%" }}>
            count is {count}
          </button>
        </div>
        <div>
          <Link to="/">
            <button style={{ width: "100%" }}>
              List Product
            </button>
          </Link>
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </Stack>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
