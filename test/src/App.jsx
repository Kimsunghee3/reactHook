import { Counter, Memo, TwoCounter } from "./components"
import ViewCounter from "./components/ViewCounter"

const App = () => {
  return(
    <>
      <Counter />
      <ViewCounter />
      <Memo />
      <TwoCounter />
    </>
  )
}

export default App