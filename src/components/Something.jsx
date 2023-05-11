import { useEffect, useState } from 'react'

const Something = () => {
  const [intervalId, setIntervalId] = useState()

  useEffect(() => {
    setIntervalId(
      setInterval(() => {
        console.log('Ping')
      }, 1000)
    )
  }, [])

  useEffect(() => {
    if (intervalId) {
      console.log(intervalId)

      return () => {
        clearInterval(intervalId - 1)
        clearInterval(intervalId)
      }
    }
  }, [intervalId])

  return <h1>Hello</h1>
}

export default Something
