import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Something from './components/Something'

function App() {
  const [count, setCount] = useState(0)
  const [isTrue, setIsTrue] = useState(false)

  useEffect(() => {
    console.log('Mounted')
  }, []) //Mounting time === empty dependency array

  useEffect(() => {
    console.log('update')
  }) // Gonna run on every update

  useEffect(() => {
    console.log('isRunning')
    if (count % 5 === 0) {
      console.log(count)
      console.log(isTrue)
    }
  }, [count]) // Runs when count is updated

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <button onClick={() => setIsTrue(!isTrue)}>{isTrue ? 'Yes' : 'No'}</button>
      {isTrue ? <Something /> : null}
      <p></p>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
