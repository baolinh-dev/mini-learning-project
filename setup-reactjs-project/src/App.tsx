import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [prevCount, setPrevCount] = useState(0)

  const handleIncrease = () => {
    setCount((prevCount) => {
      // đoạn này setPrevCount để có thể xem giá trị trước đó
      setPrevCount(prevCount)
      return prevCount + 1
    })
  }

  return (
    <div>
      <p>count: {count}</p>
      <p>preCount: {prevCount}</p>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

export default App
